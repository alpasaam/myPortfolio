/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saam Naeini",
  title: "Hi all, I'm Saam",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 specializing in building web applications with Java, Python, React, Angular, and cloud technologies. Currently working on innovative solutions at BYU and co-founding AI-driven learning platforms."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alpasaam",
  linkedin: "https://www.linkedin.com/in/saam-naeini/",
  gmail: "naeinisaam@gmail.com",
  // Instagram, Twitter, gitlab, medium, stackoverflow and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web applications using React and Angular"
    ),
    emoji("⚡ Build scalable backend systems with Java, Python, and C++"),
    emoji(
      "⚡ Design and implement databases with SQL and deploy applications on AWS cloud infrastructure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brigham Young University",
      logo: require("./assets/images/BYULogo.png"), // TODO: Change the logo to BYU's
      subHeader:
        "Bachelor of Science in Computer Science, Emphasis in Software Engineering",
      duration: "Graduation April 2027",
      desc: "GPA 3.81 while working 20 hr/week",
      descBullets: [
        "BYU President's Leadership Council Full Scholarship",
        "V.P. of BYU Developers Academic Association & Association for Computing Machinery Officer",
        "Software Construction, Algorithm Design, Web Programming, Computer Systems, Discrete Structure"
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "FHSS Web Developer",
      company: "FHSS Computing Services",
      companylogo: require("./assets/images/BYULogo.png"), // TODO: Add FHSS logo
      date: "Feb 2025 – Present",
      desc: "Redesigned the BYU MRI Facility website, adding secure online forms and an event scheduling calendar used by over 300 monthly users. Implemented role-based access control and FERPA-compliant safeguards to protect sensitive data.",
      descBullets: [
        "Increased form and scheduling speed by 70%, significantly reducing admin time",
        "Developed a scholarship management platform enabling 2000+ students to submit 7+ applications each and faculty to review and award scholarships efficiently",
        "Built and maintained applications using Mendix, PostgreSQL, APIs, and Git, while performing full-stack development including comprehensive testing"
      ]
    },
    {
      role: "Cofounder & Technical Lead",
      company: "GRAID",
      companylogo: require("./assets/images/graidLogo.png"),
      date: "Aug 2025 – Present",
      desc: "Cofounded Graid, an AI-driven learning platform that personalizes education and provides instructor analytics.",
      descBullets: [
        "Designed core system architecture and built prototypes integrating machine learning with scalable web apps",
        "Collaborated on product vision, early customer outreach, and cloud-based deployment"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SIGNIFICANT PROJECTS AND STARTUPS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/graidLogo.png"),
      projectName: "GRAID",
      projectDesc:
        "AI-driven learning platform that personalizes education and provides instructor analytics. Cofounded as Technical Lead, designing core system architecture and building prototypes integrating machine learning with scalable web apps.",
      footerLink: [
        // Add links when available
      ]
    },
    {
      image: require("./assets/images/BYULogo.png"), // TODO: Add chess project image
      projectName: "Multiplayer Chess Console Application",
      projectDesc:
        "Built a real-time multiplayer chess game with both player and spectator modes. Utilized WebSockets to synchronize game states seamlessly, integrated SQL to store match history and player data, and designed APIs to handle move validation and manage sessions.",
      footerLink: [
        // Add GitHub or demo links when available
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Leadership 🏆 "),
  subtitle:
    "Academic achievements, leadership roles, and notable accomplishments during my time at BYU",

  achievementsCards: [
    {
      title: "BYU President's Leadership Council Full Scholarship",
      subtitle:
        "Awarded full scholarship through BYU President's Leadership Council for academic excellence and leadership potential.",
      image: require("./assets/images/BYULogo.png"),
      imageAlt: "BYU Logo",
      footerLink: []
    },
    {
      title: "V.P. of BYU Developers & ACM Officer",
      subtitle:
        "Serving as Vice President of BYU Developers Academic Association and Officer of the Association for Computing Machinery, promoting tech education and community engagement.",
      image: require("./assets/images/BYULogo.png"),
      imageAlt: "BYU Developers Logo",
      footerLink: []
    },
    {
      title: "President of BYU Esports Club",
      subtitle:
        "Leading 1000 students as President of BYU Esports Club, organizing events and fostering competitive gaming community.",
      image: require("./assets/images/BYULogo.png"),
      imageAlt: "BYU Esports Logo",
      footerLink: []
    },
    {
      title: "Multilingual Proficiency",
      subtitle:
        "Native fluency in Mandarin Chinese, Cantonese Chinese, and English, enabling effective cross-cultural communication.",
      image: require("./assets/images/BYULogo.png"),
      imageAlt: "Languages",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://example.com/blog-post-1",
      title: "Example Blog Post Title",
      description:
        "This is a placeholder blog post description. Replace with your actual blog content when ready."
    },
    {
      url: "https://example.com/blog-post-2",
      title: "Another Example Blog Post",
      description:
        "Another placeholder blog post description. Update with your real blog content."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Example Talk Title",
      subtitle: "Example Event Name - Location, Year",
      slides_url: "https://example.com/slides",
      event_url: "https://example.com/event"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/example-podcast/embed/episodes/Example-Episode-Title/episode-id"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(385) 831-9970",
  email_address: "naeinisaam@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "your-twitter-username", //Replace "your-twitter-username" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
