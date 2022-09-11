import { ILocationWithIP } from "../../interfaces"
import { DetailsContainer, StatContainer, StatContent, StatTitle } from "./stat-block.styles"

export function StatBlock({location, ip, isp}:ILocationWithIP) {
    const stats = [
      {
        name:'IP Address',
        content:ip
      },
      {
        name:'Location',
        content:`${location.city}, ${location.region} ${location.postalCode}`
      },
      {
        name:'Timezone',
        content:`UTC ${location.timezone}`
      },
      {
        name:'ISP',
        content:isp
      },
    ]
    return (
    <DetailsContainer>
      {stats.map(stat=><StatContainer key={stat.name}>
        <StatTitle>{stat.name}</StatTitle>
        <StatContent>{stat.content}</StatContent>
      </StatContainer>)}
    </DetailsContainer>)
  }