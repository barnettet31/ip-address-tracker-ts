import { useContext } from "react";
import { GeolocationContext } from "../../context/geolocation.context";
import { Header } from "../header/header.component";
import { PageWrapper } from "../layout/layout.component";
import { Map } from "../map/map.component";
import { StatBlock } from "../stat-block/stat-block.component";

export function Application() {
    const {location, ip, isp, setNewIp, onSubmit} = useContext(GeolocationContext);
    
  return (
    <>
      <PageWrapper>
        <Header onValueChange={setNewIp} onSubmit={onSubmit} ip={ip} />
        <StatBlock location={location} ip={ip} isp={isp} />
        <Map location={location} />
      </PageWrapper>
    </>
  );
}
