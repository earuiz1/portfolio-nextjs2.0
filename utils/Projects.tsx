import {
  SiFirebase,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiCss3,
} from "react-icons/si";

export const projects = [
  {
    title: "Netflix Clone 2.0",
    description:
      "Netflix Clone 2.0 is a modern application that allows users to see the latest information about popular,recent and trending movies. Additionally, users can create and account to save favorites movies for future reference.",
    iconsList: [
      {
        icon: <SiTypescript size={25} className="text-primary" />,
        name: "TypeScript",
      },
      {
        icon: <SiReact size={25} className="text-primary" />,
        name: "React",
      },
      {
        icon: <SiTailwindcss size={25} className="text-primary" />,
        name: "Tailwindcss",
      },
      {
        icon: <SiFirebase size={25} className="text-primary" />,
        name: "Firebase",
      },
    ],
    github_url: "https://github.com/earuiz1/netflix-clone-app",
    demo_url: "https://earuiz1.github.io/netflix-clone-app/",
  },
  {
    title: "Recipy Ready",
    description:
      "Recipy Ready is modern application that allows users to search for a recipy with the ingredients they have at their pantry. Additonally, this application provides a youtuvbe video tutorial to help the user in their cooking process.",
    iconsList: [
      {
        icon: <SiTypescript size={25} className="text-primary" />,
        name: "TypeScript",
      },
      {
        icon: <SiReact size={25} className="text-primary" />,
        name: "React",
      },
      {
        icon: <SiTailwindcss size={25} className="text-primary" />,
        name: "Tailwindcss",
      },
    ],
    github_url: "https://github.com/earuiz1/recipy-ready-app",
    demo_url: "https://earuiz1.github.io/recipy-ready-app/",
  },
  {
    title: "Delicias Ruiz App",
    description:
      "Decilias Ruiz App is a modern application that replicates the same functionalities as a real restaurant website. Users are able to create an sign in/sign up as well as adding, editing, deleting items from their cart.",
    iconsList: [
      {
        icon: <SiJavascript size={25} className="text-primary" />,
        name: "Javascript",
      },
      {
        icon: <SiReact size={25} className="text-primary" />,
        name: "React",
      },
      {
        icon: <SiTailwindcss size={25} className="text-primary" />,
        name: "Tailwindcss",
      },
      {
        icon: <SiFirebase size={25} className="text-primary" />,
        name: "Firebase",
      },
    ],
    github_url: "https://earuiz1.github.io/food-order-app/",
    demo_url: "https://github.com/earuiz1/food-order-app",
  },
  {
    title: "Weather App",
    description:
      "Weather App is a modern and fully responsive application that allow users to see a 5-day forecast as well as detailed weather information about any city around the world ",
    iconsList: [
      {
        icon: <SiJavascript size={25} className="text-primary" />,
        name: "Javascript",
      },
      {
        icon: <SiReact size={25} className="text-primary" />,
        name: "React",
      },
      {
        icon: <SiTailwindcss size={25} className="text-primary" />,
        name: "Tailwindcss",
      },
    ],
    github_url: "https://github.com/earuiz1/weather-app",
    demo_url: "https://earuiz1.github.io/weather-app/",
  },
  {
    title: "Notes App",
    description:
      "Notes App is a modern and fully responsive application that allow users create personal notes. In this application, users can add, edit, search and delete notes. Additionally, all notes are stored in localstorage for future use.",
    iconsList: [
      {
        icon: <SiJavascript size={25} className="text-primary" />,
        name: "Javascript",
      },
      {
        icon: <SiReact size={25} className="text-primary" />,
        name: "React",
      },
      {
        icon: <SiCss3 size={25} className="text-primary" />,
        name: "Css",
      },
    ],
    github_url: "https://github.com/earuiz1/notes-app-demo",
    demo_url: "https://earuiz1.github.io/notes-app-demo/",
  },
];
