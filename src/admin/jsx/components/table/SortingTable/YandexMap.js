// 41.312626349619556, 69.24959178515621
import React, { useState, useMemo } from 'react';
import { YMaps, Map, Placemark, ZoomControl, SearchControl, ObjectManager, objectManagerFeatures, TrafficControl, TypeSelector, Circle, RouteEditor} from '@pbe/react-yandex-maps';
import './style.css';

{/* <head>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=661056bb-2309-4aa2-ab16-074342d0c105&lang=en_US" type="text/javascript">
    </script>
</head> */}

export default function App() {
    const [zoom, setZoom] = useState(12);
    const mapState = useMemo(
      () => ({ center: [41.312626349619556, 69.24959178515621], zoom }),
      [zoom]
    );
    const objectManagerFeatures = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            id: 1,
            geometry: {
              type: "Point",
              coordinates: [41.29699, 69.26001],
            },
            properties: {
              balloonContent: "Placemark 1",
              hintContent: "Hint 1",
            },
          },
          
        ],
    };
      

    return (
        <div>
            <YMaps>
                <Map state={mapState} className='map'>
                {/* Placemarks */}

                {/* ProTouch */}
                <Placemark geometry={[41.31561, 69.30424]} 
                properties={{
                    balloonContentHeader: "<strong>ProTouch</strong>",
                    balloonContentBody: "Ташкент",
                    balloonContentFooter: "Phone1: +998 931550902, Phone2: +998 _______",
                }}
                />

                <Placemark
                geometry={[41.30729, 69.28408]} 
                properties={{
                    balloonContentHeader: "<strong>KFC</strong>",
                    balloonContentBody: "Это филиал Весминистер. Ташкент",
                    balloonContentFooter: "Phone1: +998 781297070, Phone2: +998 _______",
                }}
                options={{
                    iconLayout: "default#image",
                    iconImageHref: "https://cdn.iconscout.com/icon/free/png-512/free-kfc-logo-icon-download-in-svg-png-gif-file-formats--food-brand-brands-and-logos-pack-icons-2673854.png?f=webp&w=512", // Replace with the direct image URL
                    iconImageSize: [50, 50], // Optional: size of the icon
                    iconImageOffset: [-22, -22], // Optional: offset of the icon
                }}
                />
                {/* EVOS */}
                <Placemark 
                    geometry={[41.32004, 69.28239]}
                    properties={{
                        balloonContentHeader: "<strong>EVOS</strong>",
                        balloonContentBody: "Это филиал _____. Ташкент",
                        balloonContentFooter: "Phone1: +998 712031212, Phone2: +998 712035555",
                    }}
                    options={{
                        iconLayout: "default#image",
                        iconImageHref: "https://api.logobank.uz/media/logos_png/EVOS-01.png", // Replace with the direct image URL
                        iconImageSize: [50, 50], // Optional: size of the icon
                        iconImageOffset: [-22, -22], // Optional: offset of the icon
                    }}
                />

                {/* MaxWay */}
                <Placemark 
                    geometry={[41.32678, 69.33006]}
                    properties={{
                        balloonContentHeader: "<strong>MaxWay</strong>",
                        balloonContentBody: "Это филиал Максима Горького. Ташкент",
                        balloonContentFooter: "Phone1: +998 712005400",
                    }}
                    options={{
                        iconLayout: "default#image",
                        iconImageHref: "https://api.logobank.uz/media/logos_preview/preview_MW-01.png", // Replace with the direct image URL
                        iconImageSize: [50, 50], // Optional: size of the icon
                        iconImageOffset: [-22, -22], // Optional: offset of the icon
                    }}
                />

                {/* Feedup */}
                <Placemark 
                    geometry={[41.32698, 69.33235]}
                    properties={{
                        balloonContentHeader: "<strong>Feedup</strong>",
                        balloonContentBody: "Это филиал Максима Горького. Ташкент",
                        balloonContentFooter: "Phone1: +998 712002211",
                    }}
                    options={{
                        iconLayout: "default#image",
                        iconImageHref: "https://static.tildacdn.com/tild3433-3335-4663-b633-393138303263/feed_up.png", // Replace with the direct image URL
                        iconImageSize: [50, 40], // Optional: size of the icon
                        iconImageOffset: [-22, -22], // Optional: offset of the icon
                    }}
                />

                {/* DodoPizza */}
                <Placemark 
                    geometry={[41.29602, 69.28079]}
                    properties={{
                        balloonContentHeader: "<strong>Dodo Pizza</strong>",
                        balloonContentBody: "Это филиал Айбек. Ташкент",
                        balloonContentFooter: "Phone1: 1168, Phone2: ",
                    }}
                    options={{
                        iconLayout: "default#image",
                        iconImageHref: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Dodo_Logo.svg/360px-Dodo_Logo.svg.png?20210704184146", // Replace with the direct image URL
                        iconImageSize: [50, 20], // Optional: size of the icon
                        iconImageOffset: [-22, -22], // Optional: offset of the icon
                    }}
                />            


                {/* Controls */}
                <ZoomControl options={{ float: "right" }} />

            

                {/* Traffic Control */}
                <TrafficControl options={{ float: "right" }} />

                {/* Type Celector */}
                {/* <TypeSelector options={{ float: "right" }} /> */}

                {/* Route Editor */}
                <RouteEditor />

                {/* Object Manager */}
                <ObjectManager
                    options={{
                    clusterize: true,
                    gridSize: 32,
                    }}
                    objects={{
                    openBalloonOnClick: true,
                    preset: "islands#greenDotIcon",
                    }}
                    clusters={{
                    preset: "islands#redClusterIcons",
                    }}
                    filter={(object) => object.id % 2 === 0}
                    defaultFeatures={objectManagerFeatures}
                    modules={[
                    "objectManager.addon.objectsBalloon",
                    "objectManager.addon.objectsHint",
                    ]}
                />

                {/* <Circle
                    geometry={[[41.312626349619556, 69.24959178515621], 8000]}
                    options={{
                        draggable: true,
                        fillColor: "#DB709377",
                        strokeColor: "#990066",
                        strokeOpacity: 0.8,
                        strokeWidth: 5,
                    }}
                    /> */}
            </Map>
            </YMaps>
            
        </div>
    );
}
