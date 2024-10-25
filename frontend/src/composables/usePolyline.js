import { computed } from 'vue';

export function usePolyline() {
    const decodePolyline = (encoded) => {
        if (!encoded) return [];

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

    const getPolylineFromStrava = (strava) => {
        if (!strava?.map?.summary_polyline) return '';
        return strava.map.summary_polyline;
    };

    return {
        decodePolyline,
        getPolylineFromStrava
    };
}