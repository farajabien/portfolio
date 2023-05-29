import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"

const BlogsPage = () => {
  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
      <h2 className="mb-6 text-4xl font-bold text-teal-800 dark:text-teal-400">
        <span role="img" aria-label="Party Popper" className="mr-2">
          🎉
        </span>
        Coming Soon
      </h2>
      <p className="mb-8 text-lg text-gray-800 dark:text-gray-200">
        This blog section is currently under development. Please check back
        later for exciting new articles and updates on various topics. 🚀
      </p>
      <p className="mb-8 text-lg text-gray-800 dark:text-gray-200">
        In the meantime, feel free to explore our other pages:
      </p>
      <ul className="mb-8">
        {siteConfig.mainNav.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="rounded-full px-2 py-1 text-teal-800 hover:bg-teal-50 hover:text-teal-700 dark:text-teal-400 dark:hover:bg-gray-700"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogsPage
