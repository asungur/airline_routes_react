import React from 'react';

const Map = ({ onMapClick, getAirport, routes }) => (
  <svg className="map" viewBox="-180 -90 360 180">
    <g transform="scale(1 -1)">
      <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>

      {
        routes.map((route, i) => {
          const src = getAirport(route.src);
          const dest = getAirport(route.dest);
          const [x1, y1] = [src.long, src.lat];
          const [x2, y2] = [dest.long, dest.lat];

          return (
            <g key={i}>
              <circle className="source" cx={x1} cy={y1} data-code={src.code} onClick={onMapClick}>
                <title>{src.code} - {src.name}</title>
              </circle>
              <circle className="destination" cx={x1} cy={y1} data-code={dest.code} onClick={onMapClick}>
                <title>{dest.code} - {dest.name}</title>
              </circle>
              <path d={`M${x1} ${y1} L ${x2} ${y2}`} />
            </g>
          )
        })
      }
    </g>
  </svg>
)


export default Map;
