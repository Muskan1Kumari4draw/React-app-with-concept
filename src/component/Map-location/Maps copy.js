import React, { useState, useEffect } from "react";
import { TiGlobe } from "react-icons/ti";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  InfoWindow,
  Polyline,
  InfoWindowF,
  Box,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { HubConnectionBuilder } from "@microsoft/signalr";

const markers = [
  {
    id: 1,
    name: "Patna",
    positions: { latitude: 25.59409, longitude: 85.13756 },
  },
  {
    id: 2,
    name: "Gorakhpur",
    positions: { latitude: 26.76055, longitude: 83.37317 },
  },
  {
    id: 3,
    name: "Mumbai",
    positions: { latitude: 19.07598, longitude: 72.87766 },
  },
  {
    id: 4,
    name: "New Delhi",
    positions: { latitude: 28.61394, longitude: 77.20902 },
  },
  {
    id: 5,
    name: "Kolkata",
    positions: { latitude: 22.57265, longitude: 88.36389 },
  },
  {
    id: 6,
    name: "Chennai",
    positions: { latitude: 13.08268, longitude: 80.27072 },
  },
  {
    id: 7,
    name: "Bengaluru",
    positions: { latitude: 12.9716, longitude: 77.59456 },
  },
  {
    id: 8,
    name: "Hyderabad",
    positions: { latitude: 17.38504, longitude: 78.48667 },
  },
  {
    id: 9,
    name: "Jaipur",
    positions: { latitude: 26.91243, longitude: 75.78727 },
  },
  {
    id: 10,
    name: "Lucknow",
    positions: { latitude: 26.84677, longitude: 80.94616 },
  },
  {
    id: 11,
    name: "Ahmedabad",
    positions: { latitude: 23.0225, longitude: 72.57137 },
  },
  {
    id: 12,
    name: "Chandigarh",
    positions: { latitude: 30.73331, longitude: 76.77941 },
  },
  {
    id: 13,
    name: "Bhopal",
    positions: { latitude: 23.25993, longitude: 77.41261 },
  },
  {
    id: 14,
    name: "Dehradun",
    positions: { latitude: 30.3165, longitude: 78.03219 },
  },
  {
    id: 15,
    name: "Panaji",
    positions: { latitude: 15.49091, longitude: 73.82783 },
  },
];

const Maps = () => {
  const [directions, setDirections] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // const [connection, setConnection] = useState(null);

  const [activeMarker, setActiveMarker] = useState(null);
  // const [origin, setOrigin] = useState(null);
  // const [destination, setDestination] = useState(null);
  // useEffect(() => {
  //   const newConnection = new HubConnectionBuilder().withUrl("").build();
  //   setConnection(newConnection);
  //   newConnection.start().then(() => {
  //     console.log("Connected to SR");
  //   });
  //   newConnection.on("RecceiveLocationUpdate", (latitude, longitude) => {
  //     setLatitude(latitude);
  //     setLongitude(longitude);
  //   });
  //   return () => {
  //     newConnection.stop();
  //   };
  // }, []);
  const origin = { lat: 19.07698, lng: 72.87766 };
  const destination = { lat: 25.59409, lng: 85.13756 };
  useEffect(() => {
    const geo = navigator.geolocation;
    geo.getCurrentPosition((position) => {
      const useLatitude = position.coords.latitude;
      const useLongitude = position.coords.longitude;
      console.log("Latitude: ", useLatitude);
      console.log("Longitude: ", useLongitude);
      setLatitude(useLatitude);
      setLongitude(useLongitude);
      // setOrigin({ lat: 30.3165, lng: 78.03219 });
      // setDestination({ lat: 15.49091, lng: 73.82783 });
    });
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeuGHlVLlPfquqvfM9LWfduoZ_gJp32pc",
  });
  const handleDirectionsCallback = (response) => {
    if (response !== null && response.status === "OK") {
      setDirections(response);
    }
  };
  const handleMarkerClick = (markers) => {
    setActiveMarker(markers === activeMarker ? null : markers);
  };

  if (!isLoaded || latitude === null || longitude === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Current Location</h1>
      <h1>Longitude: {longitude}</h1>
      <h1>Latitude: {latitude}</h1>
      <div style={{ width: "100%", height: "90vh" }}>
        <GoogleMap
          center={{ lat: latitude, lng: longitude }}
          zoom={10}
          mapContainerStyle={{ width: "100%", height: "90vh" }}
        >
          {markers.map(({ id, name, positions }) => (
            <MarkerF
              key={id}
              position={{ lat: positions.latitude, lng: positions.longitude }}
              onClick={() => handleMarkerClick(id)}
              icon={{
                url: <TiGlobe />,
                // url: "https://img.freepik.com/premium-vector/illustration-black-white-earth-globe_74440-4374.jpg",
                scaledSize: new window.google.maps.Size(50, 50),
              }}
            >
              {activeMarker === id && (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div>{name}</div>
                </InfoWindowF>
              )}
            </MarkerF>
          ))}
          {/* Orgin */}
          {origin && destination && (
            <DirectionsService
              options={{
                origin: origin,
                destination: destination,
                travelMode: "DRIVING",
              }}
              callback={handleDirectionsCallback}
            />
          )}
          {directions && <DirectionsRenderer directions={directions} />}
          {markers.map(({ id, name, positions }) => (
            <MarkerF
              key={id}
              position={{ lat: 25.59409, lng: 85.13756 }}
              onClick={() => handleMarkerClick(id)}
            />
          ))}

          {/* Destinatiion */}
        </GoogleMap>
      </div>
    </>
  );
};

export default Maps;
