import React, { useEffect, useRef, useState } from 'react';
import { useJsApiLoader, Autocomplete, GoogleMap, Marker, } from '@react-google-maps/api'



const LocationPicker = ({ onLocation,markerPosition,onChildData}) => {
  const [mark, setmark] = useState(false)
  const [selectedAddress,setSelectedAddress] = useState("")
  // const [map,setMap] = useState(null);
  // /** @type React.MutableRefObject<HTMLInputElement> */
  // const originRef = useRef()
  // console.log("In child",markerPosition);
  // setmark(markerPosition);

  const [selectedLocation, setSelectedLocation] = useState({ lat: 26.477626, lng: 80.31696 });
  const [libraries,setLibra] = useState(['places'])

  
  useEffect(()=>{
    handleClick();
  },[selectedAddress]);

  const handleMarker = () =>{
    setmark(true)
  }
//  /** @type React.MutableRefObject<HTMLInputElement> */
//  const originRef = useRef()
  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  }

  const fetchAddress = async (location) => {
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat()},${location.lng()}&key=AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U`);
      const data = await response.json();

      // Extract the formatted address from the response and update the state
      setSelectedAddress(data.results[0].formatted_address);
    } catch (error) {
      console.log("Error fetching address: ", error);
      
    }
  };
  const handleClick=()=>{
    onChildData(selectedAddress)
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
    libraries: libraries,
  })

  if (!isLoaded) {
    return <h4> Loading....</h4>
  }
 
  return (
    <div>
      <div>
       
        <div className="form-group col-md-6 mt-1">
         
          


        </div>

        <div className="form-group col-md-12">
        {/* <button type='btn' onClick={()=>handleClick()} className="btn mb-3" style={{backgroundColor:"#27ae60",float:"right"}}>Check<i className="fa-solid fa-location-arrow"></i></button> */}
        <GoogleMap
        zoom={11}
        mapContainerStyle={{ width: '100%', height: '300px' }}
        center={markerPosition}
        options={{
          // zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          // fullscreenControl: false,

        }}
        onTilesLoaded={handleMarker}
        onClick={handleMapClick}


      >

        {
          mark && <Marker position={markerPosition}
            draggable={true} 
            // onDragEnd={onLocation}
            onDragEnd={(e) => {
              setSelectedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
              fetchAddress(e.latLng);
    onLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
              
            }}
          />
        }
      </GoogleMap>
        </div>


      </div>
    
    </div>


  );
}

export default LocationPicker;