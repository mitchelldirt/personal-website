type TechIcon = {
  image: string;
  alt: string;
  link: string;
};

export type Project = {
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  link: string;
  github: string;
  liveLink: string;
  tech: TechIcon[];
};

export const techIcons: Record<string, TechIcon> = {
  react: {
    image: "/images/react.png",
    alt: "React",
    link: "https://reactjs.org/",
  },
};

export const projects: Project[] = [
  {
    title: "City Ranker",
    shortDescription:
      "This app solves my innate desire to pit cities against each other. This was the first time I've implemented a CORS Proxy to get one of my third-party APIs to work. I love that I can use my GitHub account to login.",
    longDescription:
      "This project is a simple stocks app that fetches stock data from the Finage API. It uses the Vite build tool and the React framework. The app fetches stock data from the Finage API and displays it in a table. The app also has a search bar that allows users to search for a specific stock by symbol.",
    image: "/city-ranker.png",
    link: "/projects/city-ranker",
    github: "",
    liveLink: "https://stocks.mitchellmudd.com",
    tech: [techIcons.react],
  },
  {
    title: "Tasky",
    shortDescription:
      "My second todo list app that I've created. I wanted to try out Remix and Prisma, and build something that is truly fullstack. I'm very happy with the result!",
    longDescription:
      "My second todo list app that I've created. I wanted to try out Remix and Prisma, and build something that is truly fullstack. I'm very happy with the result!",
    image: "/tasky.png",
    link: "/projects/tasky",
    github: "https://github.com/mitchelldirt/tasky",
    liveLink: "https://tasky.mitchellmudd.dev",
    tech: [techIcons.react],
  },
  {
    title: "Windmill Weather",
    shortDescription:
      "Windmill weather was my first project that dealt with the handling of APIs. I implemented the TomTom fuzzy search and auto complete API with the search box package to improve the search.",
    longDescription:
      "This project is a simple stocks app that fetches stock data from the Finage API. It uses the Vite build tool and the React framework. The app fetches stock data from the Finage API and displays it in a table. The app also has a search bar that allows users to search for a specific stock by symbol.",
    image: "/windmill-weather.png",
    link: "/tasky/windmill-weather",
    github: "",
    liveLink: "https://stocks.mitchellmudd.com",
    tech: [techIcons.react],
  },
];
