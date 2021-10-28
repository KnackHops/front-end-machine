import './MapLiesHere.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMemo, useState } from 'react';

const center = [122.01753029011469, 16.981790663900746]
const imgIconUrl = "https://i1.lensdump.com/i/gdLcnK.png";
const accessToken = "pk.eyJ1IjoiYWZmYWZ1IiwiYSI6ImNrdjJsbXA0dDB3MjkzMm1zODBvdHFybTIifQ.6tQtiF80ykkSmiHj50XqIg"
const mapStyleUrl = 'mapbox://styles/mapbox/streets-v8'
const mapConID = 'here_lies_map_container';
const geoFeat = {
    'type': 'Feature',
    'properties': {
        'message': 'Purok 5, Buensuceso St, Zone 2, San Mariano Isabela'
    },
    'geometry': {
        'type': 'Point',
        'coordinates': center
    }
}
const bounds = [
    [121.99734265899869, 16.979659106689162],
    [122.02203700681238, 16.988353297648]
]

const MapLiesHere = () => {
    const [ isLoaded, setLoaded ] = useState(false);
    
    const mapGlBox = useMemo( async () => {
        if ( !isLoaded ){
            setLoaded(true)
            let modu = await import('mapbox-gl');
            modu['default'].accessToken = accessToken;
            
            // The following is required to stop "npm build" from transpiling mapbox code.
            // notice the exclamation point in the import.
            // @ts-ignore
            // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
            // modu['default'].workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

            const map = new modu['default'].Map({
                container: mapConID,
                style: mapStyleUrl,
                center: center,
                zoom: 16.25,
                maxBounds: bounds,
                dragRotate: false
                // dragPan: false
            })
            
            if ( document.querySelector("div.resto_marker") ) {
                const mark = document.querySelector("div.resto_marker");
                mark.parentNode.parentNode.childNodes.forEach(el => {
                    mark.parentNode.parentNode.removeChild(el)
                });
            }

            const el = document.createElement("div");
            el.classList.add("resto_marker")
            el.style.backgroundImage = `url(${imgIconUrl})`
            el.style.backgroundPosition = "center";
            el.style.backgroundSize = '80%';
        
            new modu['default'].Marker(el)
            .setLngLat(geoFeat.geometry.coordinates)
            .addTo(map)

            el.addEventListener("click", () => {
                window.confirm(geoFeat.properties.message)
            })

            return modu['default']
        }
    }, [])

    return (        
        <div className="here_lies_zemap" id={mapConID}>
        </div>
    )
}

export default MapLiesHere;