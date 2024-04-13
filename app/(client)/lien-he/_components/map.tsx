"use client";

import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
// @ts-ignore
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map = () => {
	const markerIcon = new L.Icon({
		iconUrl: "/location.png",
		iconSize: [30, 30],
	});

	return (
		<MapContainer
			// @ts-ignore
			center={[10.81905, 106.63338]}
			zoom={17}
			style={{ aspectRatio: 1 / 1, zIndex: 10 }}
		>
			{/* @ts-ignore */}
			<TileLayer attribution={attribution} url={url} />
			{/* @ts-ignore */}
			<Marker position={[10.81905, 106.63338]} icon={markerIcon}>
				<Popup>Điện dân dụng HomeServices</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
