export type SiteConfig = typeof siteConfig;

const enum Skills {
  "TypeScript",
}

export const siteConfig = {
  name: "Sebastian Rodriguez",
  sections: [
    {
      title: "ABOUT",
      id: "aboutSection",
    },
    {
      title: "EXPERIENCE",
      id: "experienceSection",
    },
    {
      title: "PROJECTS",
      id: "projectSection",
    },
  ],
  copyright: "© 2023 Sebatian Rodriguez. All rights reserved.",
  links: {
    twitter: "",
    mail: "",
    github: "https://github.com/sebastianrdz",
    linkedin: "https://www.linkedin.com/in/sebastian-rodriguez123/",
    docs: "https://ui.shadcn.com",
  },
};

export const experience: IExperience[] = [
  {
    title: "Associate Crafter (Full-stack Software Engineer)",
    company: "Umbrage",
    startDate: new Date("Jan 2022"),
    endDate: undefined,
    description:
      "Work with clients to propose and develop new features according to their needs. Includes implementing new data models on the database, creating new and secure endpoints, creating user friendly interfaces, among other responsibilities.",
    bulletPoints: undefined,
    tags: [
      "React",
      "Node",
      "Nest",
      "TypeScript",
      "Haskell",
      "DAML",
      "GraphQL",
      "MongoDB",
      "AWS",
    ],
    link: undefined,
  },
  {
    title: "Local Committee Marketing Director",
    company: "AIESEC",
    startDate: new Date("Jun 2020"),
    endDate: new Date("Jun 2022"),
    description:
      "Led marketing team through research of tendencies, creation of publicity content, and implementation of campaigns resulting on a 20% increase of sales on 2020, and 50% increase of sales in 2021.",
    bulletPoints: undefined,
    tags: ["Excel", "Microsoft Office", "EXPA", "Podium", "Tableu"],
    link: undefined,
  },
];

export const projects: IProject[] = [
  {
    title: "Fitness App",
    company: "Personal",
    startDate: new Date("Aug 2023"),
    endDate: undefined,
    description:
      "App created out of my own interest in React Native. Personally love the fitness and bodybuilding culture. This app is meant to simplify tracking workouts, sharing the love for the sport with other people, and getting in contact with fitness experts to help reach each individual’s fitness goals.",
    bulletPoints: undefined,
    tags: ["ReactNative", "Node", "TypeScript", "Firebase"],
    link: undefined,
  },
  {
    title: "Movie Review Sentiment Analysis",
    company: "Personal",
    startDate: new Date("Feb 2023"),
    endDate: new Date("Jun 2023"),
    description:
      "Created a machine learning model to analyse sentiment from move reviews. I took a public database from imdb that contained 50,000 movie reviews and trained a model to predict the users sentiment according to the review. Cleaned, parsed, and tokenized each review to feed on to the model with the help of the Pandas and Scikit-learn libraries. ",
    bulletPoints: undefined,
    tags: ["Python", "Machine Learning"],
    link: undefined,
  },
  {
    title: "Personal Portfolio Website (V1)",
    company: "Personal",
    startDate: new Date("Jun 2023"),
    endDate: new Date("Jun 2023"),
    description:
      "Web App created with NextJS and Tailwind. Created this static website to showcase my skills when it comes to frontend web development. Continually updating and improving my portfolio. Currently on V2.",
    bulletPoints: undefined,
    tags: ["Next", "Tailwind", "shadcn/ui", "TypeScript"],
    link: "https://sebastianrdz.netlify.app/",
  },
  {
    title: "NLP Chatbot",
    company: "INEGI",
    startDate: new Date("Jun 2022"),
    endDate: new Date("Dec 2022"),
    description:
      "Natural Language Processing chatbot created with React and Python can do accurate attribute extraction and intention classification based on our data provided. The chatbot delivers personalized responses and guides users through their queries seamlessly. An impressive feature is its ability to capture and process text fields to map locations on a map, providing tailored directions.",
    bulletPoints: undefined,
    tags: [
      "React",
      "Python",
      "FastAPI",
      "JavaScript",
      "AWS Lex",
      "AWS Lambdas",
    ],
    link: undefined,
  },
  {
    title: "WhatsApp Clone",
    company: "Personal",
    startDate: new Date("May 2022"),
    endDate: new Date("Aug 2022"),
    description:
      "Developed a responsive mobile app with features similar to WhatsApp. Integrating Firebase for authentication and database functionalities, ensured secure user access and efficient data storage. The project highlights my expertise in mobile app development and showcases my ability to utilize Flutter and Firebase for building robust applications.",
    bulletPoints: undefined,
    tags: ["Dart", "Flutter", "Firebase"],
    link: undefined,
  },
  {
    title: "Internal Web Forum",
    company: "Wizeline",
    startDate: new Date("Jan 2022"),
    endDate: new Date("May 2022"),
    description:
      "Working with a team of 5, we redesigned any existing app to enhance usability and user experience. The project involved developing a React front-end with 27 components deployed on AWS S3. The back-end was built using NodeJS, ExpressJS, JWT, and Sequelize, with 14 secure REST API endpoints. Testing included 27 Jest unit tests, and a PostgreSQL database was set up with 4 relational data models. Comprehensive API documentation was provided using Swagger.",
    bulletPoints: undefined,
    tags: [
      "React",
      "Tailwind",
      "Node",
      "Express",
      "AWS S3",
      "AWS Lightsail",
      "Postgress",
    ],
    link: undefined,
  },
  {
    title: "Crypto Wallet",
    company: "FONBNK",
    startDate: new Date("Mar 2022"),
    endDate: new Date("Mar 2022"),
    description:
      "Web app was developed to enable users to visualize and manage their Ethereum crypto wallet, allowing them to buy, sell, and transfer funds. The app caters to over 450k users on the blockchain. It comprises 14 React components that connect to 4 Express endpoints and a MongoDB database, facilitating seamless interactions and data management.",
    bulletPoints: undefined,
    tags: ["React", "Node", "Express", "Firebase", "MongoDB"],
    link: undefined,
  },
  {
    title: "IT Web App Activation",
    company: "CEMEX",
    startDate: new Date("Jun 2021"),
    endDate: new Date("Dec 2021"),
    description:
      "Created an on-boarding training web application for CEMEX GO IT, catering to over 50 local employees. The application utilized gamification techniques through Unity & C#, resulting in a 27% increase in productivity. To facilitate monitoring, administrators could track employees' performance in the app. Used SQL, Node, Express, and React technologies. The app effectively streamlined the onboarding process and enhanced overall productivity within the IT area.",
    bulletPoints: undefined,
    tags: ["React", "Express", "Unity", "SQL"],
    link: undefined,
  },
];
