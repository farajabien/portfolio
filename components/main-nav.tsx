"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

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
        <button className="block md:hidden" onClick={handleMenuToggle}>
          <svg
            className="h-6 w-6 fill-current text-gray-600"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            )}
          </svg>
        </button>
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>

      <div
        className={cn("md:flex md:flex-row md:space-x-4", {
          hidden: !menuOpen || !items || items.length === 0,
        })}
      >
        {items?.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className="
                  px-4
                  py-2
                  text-sm
                  font-medium
                "
              >
                {item.title}
              </Link>
            )
        )}
      </div>
    </div>
  )
}
