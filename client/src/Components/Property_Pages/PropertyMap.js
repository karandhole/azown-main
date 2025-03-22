import { React, useEffect, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker, } from '@react-google-maps/api'
const PropertyMap = ({ position }) => {

    const [libraries, setLibra] = useState(['places'])
    const [mark, setmark] = useState(false)
    const [markerPosition, setMarkerPosition] = useState();
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
        libraries: libraries,
    })
    useEffect(() => {
        setMarkerPosition(x=>position);
    }, [mark])
    const handleMarker = () => {
        setmark(true);
        setMarkerPosition(position) 
    }
    // console.log("useStateWali",markerPosition)
    // console.log("componnet",position)
    if (isLoaded) {
        return (
            <div>
                <GoogleMap
                    zoom={13}
                    mapContainerStyle={{ width: '100%', height: '400px' }}
                    center={markerPosition}
                    options={{
                        streetViewControl: false,
                        mapTypeControl: false,
                    }}
                    onTilesLoaded={handleMarker}
                >
                    {
                        mark && <Marker position={markerPosition}
                            draggable={false}
                        />
                    }
                </GoogleMap>
            </div>
        )
    }else
    return(
        <div>...Loading</div>
    )
}

export default PropertyMap;