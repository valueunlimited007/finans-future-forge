// Content Clusters for Related Pages Navigation
// Används för att visa relaterade sidor inom samma ämnesområde

export interface ClusterLink {
  title: string;
  url: string;
  description: string;
}

export interface ContentCluster {
  id: string;
  name: string;
  description: string;
  links: ClusterLink[];
}

export const contentClusters: Record<string, ContentCluster> = {
  privatlan: {
    id: "privatlan",
    name: "Privatlån",
    description: "Allt om privatlån, jämförelser och ränteinformation",
    links: [
      {
        title: "Bästa privatlån",
        url: "/privatlan/basta",
        description: "Topplista med de bästa privatlånen 2025"
      },
      {
        title: "Jämför privatlån",
        url: "/privatlan/jamfor",
        description: "Interaktiv jämförelse av räntor och villkor"
      },
      {
        title: "Räntejämförelse",
        url: "/privatlan/rantejamforelse",
        description: "Aktuella räntor och ränteutveckling"
      },
      {
        title: "Lån med betalningsanmärkning",
        url: "/privatlan/lan-med-betalningsanmarkning",
        description: "Alternativ när du har betalningsanmärkning"
      },
      {
        title: "Privatlån översikt",
        url: "/privatlan",
        description: "Komplett guide till privatlån"
      }
    ]
  },
  "lan-utan-uc": {
    id: "lan-utan-uc",
    name: "Lån utan UC",
    description: "Information om lån utan kreditupplysning",
    links: [
      {
        title: "Lån utan UC",
        url: "/lan-utan-uc",
        description: "Hitta lån utan kreditupplysning"
      },
      {
        title: "Bästa privatlån",
        url: "/privatlan/basta",
        description: "Jämför privatlån med UC"
      },
      {
        title: "Lån med betalningsanmärkning",
        url: "/privatlan/lan-med-betalningsanmarkning",
        description: "Alternativ vid betalningsanmärkning"
      }
    ]
  },
  kreditkort: {
    id: "kreditkort",
    name: "Kreditkort",
    description: "Jämför kreditkort och hitta bästa kortet",
    links: [
      {
        title: "Kreditkort",
        url: "/kreditkort",
        description: "Jämför kreditkort och hitta bäst kort"
      },
      {
        title: "Privatlån",
        url: "/privatlan",
        description: "Jämför med privatlån som alternativ"
      }
    ]
  },
  foretagslan: {
    id: "foretagslan",
    name: "Företagslån",
    description: "Finansiering för företag",
    links: [
      {
        title: "Företagslån",
        url: "/foretagslan",
        description: "Jämför företagslån och finansiering"
      }
    ]
  }
};

export function getClusterLinks(clusterId: string, currentUrl?: string): ClusterLink[] {
  const cluster = contentClusters[clusterId];
  if (!cluster) return [];
  
  // Filter out current page
  return cluster.links.filter(link => link.url !== currentUrl);
}
