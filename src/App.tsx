import { Attribution } from "./components/attribution/attribution.component";
import "./index.css";
import { GeolocationContextProvider } from "./context/geolocation.context";
import { Application } from "./components/application/application.component";

function App() {
  return (
    <GeolocationContextProvider>
      <Application />
      <Attribution />
    </GeolocationContextProvider>
  );
}

export default App;
