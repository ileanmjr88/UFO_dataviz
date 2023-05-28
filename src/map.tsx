import type { FeatureCollection } from 'geojson';
import { geoMercator, geoPath } from 'd3-geo';

interface IMapProps{
  className: string;
  width: number;
  height: number;
  geoJson: FeatureCollection;
  opacity: number;
}

export function Map({className, width, height, geoJson, opacity}: IMapProps) : JSX.Element {
  
  const projection = geoMercator().fitExtent(
    [[0, 0], [width * 0.9, length * 0.9 ]], geoJson);
  const path = geoPath().projection(projection);
  console.log(geoJson)
  return(
    <svg width={width} height={height} className={className}>
      <g className="geojson-layer">
        {
          geoJson.features.map( d => {
            console.log(d);
            return(
              <path
                key={d.properties.STATE_NAME}
                d={path(d) as string}
                fill="#000"
                stroke="#0e1724"
                strokeWidth="1"
                strokeOpacity={opacity}
              />
            )
          })
        }
      </g>
    </svg>
  );
}