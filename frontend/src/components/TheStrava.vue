<script setup>
import {ref, onMounted, watch, computed, onBeforeUnmount} from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const props = defineProps({
  strava: Object,
  summaryPolyline: String
});

const emit = defineEmits(['update:strava']);

const mapContainer = ref(null);
let map = null;

const summaryPolyline = computed(() => props.strava.map.summary_polyline);


const selectedRoute = ref(summaryPolyline.value);

const decodePolyline = (encoded) => {
  const points = [];
  let index = 0, len = encoded.length;
  let lat = 0, lng = 0;
  while (index < len) {
    let b, shift = 0, result = 0;
    do {
      b = encoded.charAt(index++).charCodeAt(0) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlat = ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1));
    lat += dlat;
    shift = 0;
    result = 0;
    do {
      b = encoded.charAt(index++).charCodeAt(0) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlng = ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1));
    lng += dlng;
    points.push([lat / 1E5, lng / 1E5]);
  }
  return points;
};

const renderMap = () => {
  if (map) {
    map.remove();
  }

  if (!mapContainer.value) return;
  const decodedCoordinates = decodePolyline(selectedRoute.value);

  if (decodedCoordinates.length === 0) {
    console.error('No valid coordinates found');
    return;
  }

  map = L.map(mapContainer.value).setView(decodedCoordinates[0], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const polyline = L.polyline(decodedCoordinates, {color: 'red'}).addTo(map);

  map.fitBounds(polyline.getBounds());

  L.marker(decodedCoordinates[0]).addTo(map).bindPopup('Start');
  L.marker(decodedCoordinates[decodedCoordinates.length - 1]).addTo(map).bindPopup('End');
};

const formattedDate = computed(() => {
  return new Date(props.strava.start_date_local).toLocaleDateString();
});


onMounted(() => {
  renderMap();
});

watch(summaryPolyline, (newValue) => {
  selectedRoute.value = newValue;
  renderMap();
});

onBeforeUnmount(() => {
  if (map) {
    map.remove();
  }
});
</script>


<template>
  <div class="col">
    <div class="card h-100 shadow-sm strava-card">
      <div ref="mapContainer" class="card-img-top" style="height: 200px;"></div>
      <div class="card-body d-flex flex-column">
        <!--        <h5 class="card-title">{{ activityTitle }}</h5>-->
        <!--        <p class="card-text flex-grow-1">{{ activityExcerpt }}</p>-->
        <div class="d-flex justify-content-between align-items-center mt-auto">
          <small class="text-muted">{{ formattedDate }}</small>
          <a href="#" class="btn btn-sm btn-outline-primary">자세히 보기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
  margin-bottom: 10px;
}

.card-img-top {
  overflow: hidden;
}

.card-body {
  min-height: 150px;
}

.strava-card {
  flex: 0 0 auto;
  width: 300px;
  margin-right: 20px;
  scroll-snap-align: start;
}
</style>
