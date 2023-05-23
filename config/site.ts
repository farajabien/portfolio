export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "My Portfolio",
  description:
    "Welcome to my portfolio website! I'm Bienvenu Faraja, a passionate full-stack web developer with expertise in front-end and back-end technologies. Explore my projects, which showcase my skills in ReactJS, NodeJS, and NextJS. Get in touch with me to discuss freelance opportunities or collaborate on exciting projects. Don't forget to check out my resume for more details about my experience and qualifications. Let's build amazing web applications together!",
  mainNav: [
    {
      title: "Projects",
      href: "projects",
    },
    {
      title: "Contact",
      href: "contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/farajabien",
    github: "https://github.com/farajabien",
    linkedIn: "https://www.linkedin.com/in/bienvenufaraja",
    buyCoffee: 
      "https://bmc.link/farajabien",
  },
}
