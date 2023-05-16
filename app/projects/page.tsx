import Link from "next/link"
import { Terminal, Waves } from "lucide-react"
import { FaInfoCircle } from "react-icons/fa"

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
  // {
  //   title: "ClassCritique",
  //   description:
  //     "Developed and implemented a user-friendly feature for students to rate and review their lecturers, increasing transparency and accountability in academia.",
  //   image: "/classcritique.jpg",
  //   demoLink: "https://class-critique-client-2.vercel.app/",
  //   codeLink: "https://github.com/farajabien/class-critique-client-2",
  // },
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
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="mr-2">
                    Demo
                  </Button>
                </Link>
                <Link
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Code</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </main>
  )
}
