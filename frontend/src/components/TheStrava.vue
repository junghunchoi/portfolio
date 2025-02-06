<script setup>
import {ref, onMounted, watch, computed, onBeforeUnmount} from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const props = defineProps({
  strava: Object,
  summaryPolyline: String
});
const emit = defineEmits(['update:strava']);
const mapContainer = ref(null);
let map = null;

const summaryPolyline = computed(() => props.strava.map.summary_polyline);

function createSpeedMessage(distance, type, averageSpeed) {
  if (type === 'Ride') {
    return `${(distance/1000).toFixed(2)} km를 자전거로 ${averageSpeed * 3.6} km/h 만큼 탔어요`;
  } else if (type === 'Run') {
    const pace = 1000 / (averageSpeed * 3600) * 60;
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);
    return `${(distance/1000).toFixed(2)} km를 ${minutes}:${seconds.toString().padStart(2, '0')}/km 페이스로 달렸어요`;
  }
}

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
  <div class="col d-flex justify-content-center align-items-center">
    <div class="card h-100 shadow-sm strava-card">
      <div ref="mapContainer" class="card-img-top" style="height: 200px;"></div>
      <div class="card-body d-flex flex-column">
        {{createSpeedMessage(props.strava.distance, props.strava.type, props.strava.averageSpeed)}}
        <div class="d-flex justify-content-between align-items-center mt-auto">
          <small class="text-muted">{{ $dayjs(props.strava.startDateLocal).format('YYYY.MM.DD') }}</small>
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
