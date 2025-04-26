import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Projects", link: "#projects" },
  { name: "About Me", link: "#about-me" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I am passionate about coding and committed to delivering results on time",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-auto h-full",
    titleClassName: "justify-end text-black",
    img: "/coder-1.gif",
    spareImg: "",
  },
  {
    id: 2,
    title: "Timeliness is my habit; discipline is my strength",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start -mt-2",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Always learning something new",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Don't forget to take a look at my Resume",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName:
      "justify-center md:max-w-full max-w-60 text-center space-between",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SignaScribe - A Real Time Sign Language Recogniser",
    des: "An application that uses object detection to help deaf and hard of hearing people to communicate with others.",
    img: "/work-1.png",
    iconLists: [
      "/python-icon.svg",
      "/html5-icon.svg",
      "/css-icon.svg",
      "/opencv-icon.svg",
      "/tensorflow-icon.svg",
    ],
    link: "https://github.com/DevanshAg1151",
  },
  {
    id: 2,
    title: "Online Proctoring System",
    des: "An online proctoring system that helps reduce potential cheating risks in online examination.",
    img: "/online-proc-logo-new.png",
    iconLists: [
      "/python-icon.svg",
      "/opencv-icon.svg",
      "/tensorflow-icon.svg",
      "/flask-icon.svg",
      "/yolo-icon.svg",
    ],
    link: "https://github.com/DevanshAg1151",
  },
  {
    id: 3,
    title:
      "BlindViz - An Intelligent Navigation & Environmental Awareness for the Visually Impaired",
    des: "A mobile application specially designed to aid the visually impaired by providing real-time object detection and scene description using the latest advancements in the AI technology.",
    img: "/blindviz-logo.png",
    iconLists: [
      "/flutter-icon.svg",
      "/gpt-icon.svg",
      "/yolo-icon.svg",
      "/android-studio-icon.svg",
    ],
    link: "https://github.com/DevanshAg1151",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/DevanshAg1151/Apple-Clone-Website.git",
  },
  {
    id: 5,
    title: "Briefly.",
    des: "News, Simplified. Briefly is the to-go application for the people on the move to read the currrent affairs.",
    img: "/briefly-logo.png",
    iconLists: ["/pyhton-icon.svg", "/css-icon.svg", "/html5-icon.svg"],
    link: "https://github.com/DevanshAg1151/Briefly-News-Simplified.git",
  },
];

export const testimonials = [
  {
    quote:
      "Currently pursuing a B.Tech degree in Computer Science, I have built a solid foundation in key subjects such as DBMS, OS, Computer Networking, Data Structures and Algorithms (DSA), and Artificial Intelligence/Machine Learning (AI/ML).",
    name: "Amity University Noida",
    title: "CGPA: 9.15",
    img: "/amity-logo.svg",
  },

  {
    quote:
      "Thank you for taking the time to visit my site—I hope you find it worthwhile! I'm a music enthusiast who loves playing the guitar and unwinding with video games. Coding and creating are my ways of turning ideas into reality.",
    name: "Hi!! This is Me.",
    title: "A Curious Mind, A Creative Soul",
    img: "/deva-pic.svg",
  },
  {
    quote:
      "Completed my 12th standard education here, specializing in Physics, Chemistry, and Mathematics, along with an enriching elective in Hindustani Classical Music.",
    name: "Delhi Public School Jaipur",
    title: "Percentage: 93.4%",
    img: "/dps-logo.svg",
  },
  {
    quote:
      "Did my schooling for 10th standard here for the general subjects of Mathematics, English Comm., Science, Social Science and French.",
    name: "Delhi Public School Jaipur",
    title: "Percentage: 87%",
    img: "/dps-logo.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "VS Code",
    img: "/code-icon.svg",
    // nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "CSS3",
    img: "/css-icon.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HTML",
    img: "/html5-icon.svg",
    // nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Flask",
    img: "/flask-icon.svg",
    // nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Flutter",
    img: "/flutter-icon.svg",
    // nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "TensorFlow",
    img: "/tensorflow-icon.svg",
    // nameImg: "/dockerName.svg",
  },
  {
    id: 7,
    name: "Git",
    img: "/git-scm-icon.svg",
  },
  {
    id: 8,
    name: "GitHub",
    img: "/github-icon.svg",
  },
  {
    id: 9,
    name: "ChatGPT",
    img: "/gpt-icon.svg",
  },
  {
    id: 10,
    name: "JavaScript",
    img: "/javascript-icon.svg",
  },
  {
    id: 11,
    name: "Microsoft Office",
    img: "/microsoft-icon.svg",
  },
  {
    id: 12,
    name: "NextJS",
    img: "/nextjs-icon.svg",
  },
  {
    id: 13,
    name: "NumPy",
    img: "/numpy-icon.svg",
  },
  {
    id: 14,
    name: "OpenCV",
    img: "/opencv-icon.svg",
  },
  {
    id: 15,
    name: "Python",
    img: "/python-icon.svg",
  },
  {
    id: 16,
    name: "TailWind",
    img: "/tailwindcss-icon.svg",
  },
  {
    id: 17,
    name: "TypeScript",
    img: "/typescript-icon.svg",
  },
  {
    id: 18,
    name: "Yolo",
    img: "/yolo-icon.svg",
  },
  {
    id: 19,
    name: "C",
    img: "/c-icon.svg",
  },
  {
    id: 20,
    name: "Cpp",
    img: "/cpp-icon.svg",
  },
  {
    id: 21,
    name: "Bootstrap",
    img: "/bootstrap-icon.svg",
  },
  {
    id: 22,
    name: "Android Studio",
    img: "/android-studio-icon.svg",
  },
  {
    id: 23,
    name: "Jupyter Notebook",
    img: "/jupyter-icon.svg",
  },
  {
    id: 24,
    name: "Kaggle",
    img: "/kaggle-icon.svg",
  },
  {
    id: 25,
    name: "Canva",
    img: "/canva-icon.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "SE Trainee - Brillanz",
    desc: "Assisted in the development of an online proctoring platform to reduce potential cheating risks in online examination.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Office Assistant - Izzy Metals",
    desc: "Helped and managed daily office tasks and administration including documentation.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web Dev Intern - CodSoft",
    desc: "Collaborated and developed some on some projects to create attractive frontend.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/devanshag/",
  },
  {
    id: 2,
    img: "/wha.svg",
    link: "https://wa.me/917014641422?text=Hi!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
  },

  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/ig_danger_dj/",
  },
  {
    id: 4,
    img: "/git.svg",
    link: "https://github.com/DevanshAg1151",
  },
];

export const edu = [
  {
    quote: "Did my 12th here.",
    name: "Delhi Public School Jaipur",
    title: "Percentage: 93.4%",
    img: "/css-icon.svg",
  },
  {
    quote: "Did my 10th here.",
    name: "Delhi Public School Jaipur",
    title: "Percentage: 87%",
    img: "/dock.svg",
  },
  {
    quote: "Pursuing B.Tech in CSE here. Currently in the final year.",
    name: "Amity University Noida",
    title: "CGPA: 9.10",
    img: "/git.svg",
  },
];
