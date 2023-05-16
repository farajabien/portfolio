import Link from "next/link"
import { Mail } from "lucide-react"
import { FaFilePdf, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FiPhone } from "react-icons/fi"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="container grid items-center">
      <div className="mx-auto max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mt-4">
          <Link href="resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="mb-2 flex items-center space-x-2"
            >
              <span>View Resume</span>
              <FaFilePdf size={20} />
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Contact Me
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-500">
          If you have any inquiries or would like to collaborate on a freelance
          project or contract work, feel free to get in touch with me.
        </p>

        <div className="mt-12 space-y-4">
          <Link
            href="mailto:faraja.bien@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="
            ml-2 md:ml-5"
            >
              <Mail className="mr-2 h-4 w-4" /> faraja.bien@gmail.com
            </Button>
          </Link>

          <Link href="tel:+254793643308">
            <Button variant="secondary" className="ml-2 mt-2 md:ml-5">
              <FiPhone className="mr-2 h-4 w-4" />
              +254 793 643 308
            </Button>
          </Link>
        </div>

        <p className="mt-12 text-lg text-gray-500">
          I&apos;m currently open to freelance projects and contract work. If
          you have any opportunities or would like to discuss a potential
          collaboration, please reach out to me. I look forward to hearing from
          you!
        </p>
      </div>
    </main>
  )
}
