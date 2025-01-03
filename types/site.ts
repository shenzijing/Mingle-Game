export interface SiteConfig {
  site: {
    name: string;
    title: string;
    description: string;
    keywords: string;
    logo: string;
    social: {
      twitter: string;
      github: string;
    };
    contact: {
      email: string;
      twitter: string;
    };
  };
  game: {
    name: string;
    iframe: string;
    features: { title: string }[];
    howToPlay: string[];
  };
  navigation: {
    title: string;
    path: string;
  }[];
  footer: {
    columns: {
      title: string;
      content?: string;
      links?: { title: string; path: string }[];
      social?: boolean;
    }[];
  };
}