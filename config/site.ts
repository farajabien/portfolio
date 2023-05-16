export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "My Portfolio",
  description:
    "My starter nextjs tailwind with shadcn ui",
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
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
