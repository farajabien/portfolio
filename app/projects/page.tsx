import Image from "next/image"
import Link from "next/link"
import { Terminal, Waves } from "lucide-react"
import {
  FaCss3Alt,
  FaHtml5,
  FaInfoCircle,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiTailwindcss } from "react-icons/si"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projects: any[] = [
  {
    title: "ClassCritique",
    description:
      "In this project, I developed and implemented a user-friendly feature that allows students to rate and review their lecturers. By increasing transparency and accountability in academia, ClassCritique has contributed to creating a more informed and fair learning environment.",
    tech: (
      <div className="mt-6 flex flex-row space-x-4">
        <FaReact size={32} className="text-blue-500" />
        <FaNodeJs size={32} className="text-green-500" />
        <IoLogoJavascript size={32} className="text-yellow-500" />
        <FaHtml5 size={32} className="text-orange-500" />
        <FaCss3Alt size={32} className="text-purple-500" />
        <SiTailwindcss size={32} className="text-blue-400" />
      </div>
    ),
    image: "/classcritique.png",
    demoLink: "https://class-critique-client-2.vercel.app/",
    codeLink: "https://github.com/farajabien/class-critique-client-2",
  },
  {
    title: "My Portfolio",
    description:
      "In the 'My Portfolio' project, I have developed and implemented a user-friendly portfolio website to showcase my work, skills, and achievements. The portfolio features a clean and modern design, highlighting my projects, experiences, and contact information.",
    tech: (
      <div className="mt-6 flex flex-row space-x-4">
        <FaReact size={32} className="text-blue-500" />
        <IoLogoJavascript size={32} className="text-yellow-500" />
        <FaHtml5 size={32} className="text-orange-500" />
        <SiTailwindcss size={32} className="text-blue-400" />
      </div>
    ),
    image: "/portfolio.png",
    demoLink: "https://farajabien.vercel.app/",
    codeLink: "https://github.com/farajabien/portfolio",
  },
  {
    title: "KingRafiki",
    description:
      "KingRafiki is an ecommerce store built with React.js and Django. It features integration with Stripe for secure payment processing and utilizes PostgreSQL for data storage. The website was previously hosted on Heroku, but due to changes in their pricing model, it is no longer available on the free tier.",
    tech: (
      <div className="mt-6 flex flex-row space-x-4">
        <FaReact size={32} className="text-blue-500" />
        <IoLogoJavascript size={32} className="text-yellow-500" />
        <FaHtml5 size={32} className="text-orange-500" />
        <SiTailwindcss size={32} className="text-blue-400" />
        <FaPython size={32} className="text-blue-500" />
      </div>
    ),
    // image: "",
    demoLink: "",
    codeLink: "https://github.com/farajabien/kingrafiki",
  },
  {
    title: "Diego's Blog",
    description:
      "Diego's Blog is a blog website built with React.js. It features a clean and modern design, providing a visually pleasing reading experience for visitors. The blog showcases a collection of articles and posts covering various topics such as technology, lifestyle, and personal experiences. With user-friendly navigation and engaging content, Diego's Blog aims to inform and inspire readers with valuable insights and perspectives.",
    tech: (
      <div className="mt-6 flex flex-row space-x-4">
        <FaReact size={32} className="text-blue-500" />
        <IoLogoJavascript size={32} className="text-yellow-500" />
        <FaHtml5 size={32} className="text-orange-500" />
        <SiTailwindcss size={32} className="text-blue-400" />
      </div>
    ),
    image: "/diegoblog.png",
    demoLink: "https://farajabien.github.io/my-blog-react/",
    codeLink: "https://github.com/farajabien/my-blog-react/tree/master",
  },
]

export default function ProjectsPage() {
  return (
    <main className="container mx-auto py-12 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-extrabold sm:text-5xl md:text-6xl">
        Projects ({projects.length})
      </h1>
      {projects.length === 0 && (
        <div className="px-4 py-5 sm:p-6">
          <p className="text-center text-lg font-medium text-gray-900 dark:text-white">
            <FaInfoCircle className="mr-2 inline-block h-4 w-4" />
            No projects yet
          </p>
          <Alert className="mx-auto mt-4 w-full md:w-1/2">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Oops! No projects yet</AlertTitle>
            <AlertDescription>
              I am currently working on some projects. Check back later!
            </AlertDescription>
          </Alert>
        </div>
      )}
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.length > 0 &&
          projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={200}
                    className="max-h-48"
                  />
                ) : (
                  <div className="h-48 w-full animate-pulse bg-gray-100 dark:bg-gray-800"></div>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
                {project.tech}
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="mr-2"
                  disabled={project.demoLink === ""}
                >
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Link>
                </Button>
                <Button variant="outline" disabled={project.codeLink === ""}>
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </main>
  )
}
