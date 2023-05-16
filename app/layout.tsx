import "@/styles/globals.css"
import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <footer>
                <div className="container flex flex-col items-center justify-center space-y-4 py-8 text-center text-sm text-muted-foreground">
                  <div>
                    <span className="font-bold">{siteConfig.name}</span> &copy;{" "}
                    {new Date().getFullYear()}
                  </div>
                  <div>
                    <span className="font-bold">Made with ❤️</span> by{" "}
                    <Link
                      href={siteConfig.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Faraja
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
