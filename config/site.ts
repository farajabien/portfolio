export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Dear Boy",
  description:
    "My starter nextjs tailwind with shadcn ui",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
