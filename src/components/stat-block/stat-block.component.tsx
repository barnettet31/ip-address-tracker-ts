import { DetailsContainer, StatContainer, StatContent, StatTitle } from "./stat-block.styles"

export function StatBlock() {
    const stats = [
      {
        name:'IP Address',
        content:'1.92.212.174.101'
      },
      {
        name:'Location',
        content:'Brooklyn, NY 10001'
      },
      {
        name:'Timezone',
        content:'UTC - 05:00'
      },
      {
        name:'ISP',
        content:'SpaceX Starlink'
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