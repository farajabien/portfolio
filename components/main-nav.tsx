"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Icons } from "./icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="flex items-center justify-between gap-6 md:gap-10">
      <div className="flex items-center space-x-2">
        <Menubar className="block md:hidden">
          <MenubarMenu>
            <MenubarTrigger>
              <button onClick={handleMenuToggle}>
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  />
                </svg>
              </button>
            </MenubarTrigger>
            <MenubarContent>
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link href={item.href}>
                      <MenubarItem key={index}>{item.title}</MenubarItem>
                    </Link>
                  )
              )}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <Link href="/" className=" items-center space-x-2 md:flex">
          <Image
            src={"/pacman/96.png"}
            width={32}
            height={32}
            alt="Pacman"
            className="rounded-full"
          />
          <span className="font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>
        {items?.map(
          (item, index) =>
            item.href && (
              <Link
                href={item.href}
                key={index}
                className={cn("hidden items-center space-x-2 md:flex")}
              >
                {item.title}
              </Link>
            )
        )}
      </div>
    </div>
  )
}
