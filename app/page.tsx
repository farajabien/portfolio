import Link from "next/link"
import {
  FaCss3Alt,
  FaFilePdf,
  FaGit,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaRegFilePdf,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiTailwindcss } from "react-icons/si"

import { Button } from "@/components/ui/button"

import "react-circular-progressbar/dist/styles.css"

export default function IndexPage() {
  return (
    <main className="container grid items-center">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Hi, I&apos;m Bienvenu!
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-500 dark:text-gray-300">
          I&apos;m a full stack web developer with experience in both front-end
          and back-end development. I specialize in developing web applications
          using modern web technologies such as ReactJS, NodeJS, and NextJS.
        </p>
        <div className="mt-6 flex flex-row space-x-4">
          <FaReact size={32} className="text-blue-500" />
          <FaNodeJs size={32} className="text-green-500" />
          <IoLogoJavascript size={32} className="text-yellow-500" />
          <FaHtml5 size={32} className="text-orange-500" />
          <FaCss3Alt size={32} className="text-purple-500" />
          <SiTailwindcss size={32} className="text-blue-400" />
          <FaGit
            size={32}
            className="text-gray-500  transition duration-300  hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
          />
        </div>

        <div className="mt-12">
          <Link href="/projects">
            <Button>View Portfolio</Button>
          </Link>

          <Link href="/contact">
            <Button variant="secondary" className="ml-4">
              Contact Me
            </Button>
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Resume</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-200">
            Want to know more about my skills, experience, and qualifications?
            Check out my resume!
          </p>
          <div className="mt-4">
            <Link href="resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="flex items-center space-x-2 "
              >
                <span>View Resume</span>
                <FaFilePdf size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
