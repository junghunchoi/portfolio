<script setup>
import { ref, onMounted, watch } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const props = defineProps({
  summaryPolyline: String
});

const emit = defineEmits(['update:summaryPolyline']);

const mapContainer = ref(null);
let map = null;

// 여러 루트 옵션을 제공합니다. 실제 사용 시 이 부분을 동적으로 가져올 수 있습니다.
const routes = ref([
  { id: 1, name: 'Route 1', polyline: props.summaryPolyline },
]);

const selectedRoute = ref(props.summaryPolyline);

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

  const decodedCoordinates = decodePolyline(selectedRoute.value);

  map = L.map(mapContainer.value).setView(decodedCoordinates[0], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const polyline = L.polyline(decodedCoordinates, { color: 'red' }).addTo(map);

  map.fitBounds(polyline.getBounds());

  L.marker(decodedCoordinates[0]).addTo(map).bindPopup('Start');
  L.marker(decodedCoordinates[decodedCoordinates.length - 1]).addTo(map).bindPopup('End');
};

const handleRouteChange = (event) => {
  selectedRoute.value = event.target.value;
  emit('update:summaryPolyline', selectedRoute.value);
};

onMounted(() => {
  renderMap();
});

watch(selectedRoute, () => {
  renderMap();
});
</script>

<template>
  <div>
    <select v-model="selectedRoute" @change="handleRouteChange">
      <option v-for="route in routes" :key="route.id" :value="route.polyline">
        {{ route.name }}
      </option>
    </select>
    <div ref="mapContainer" style="height: 400px;"></div>
  </div>
</template>

<style scoped>
select {
  margin-bottom: 10px;
}
</style>

/* 부모컴포넌트에선 아래와 같이 사용할 수 있다.
<template>
  <TheStrava v-model:summaryPolyline="currentPolyline" />
</template>

<script setup>
import { ref } from 'vue';
import TheStrava from './TheStrava.vue';

const currentPolyline = ref('initial_polyline_here');
</script>
*/