import type {FeatureCollection} from "geojson";
import texas from './assets/texas.json'
import { Map } from './map'
import './App.css'

function App() {
  const texasMap = texas as FeatureCollection;
  return (
    <>
      <div>
        <Map className="texas-ufo" width={900} height={900} geoJson={texasMap} opacity={0.9} />
      </div>
    </>
  )
}

export default App
