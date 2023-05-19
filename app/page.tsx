import Link from "next/link"
import {
  FaBrain,
  FaCode,
  FaCog,
  FaCss3Alt,
  FaDollarSign,
  FaFileCode,
  FaFilePdf,
  FaGit,
  FaGithub,
  FaHandshake,
  FaHtml5,
  FaMobileAlt,
  FaNodeJs,
  FaPencilAlt,
  FaPercent,
  FaReact,
  FaRegFilePdf,
  FaSearch,
  FaServer,
  FaShoppingCart,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { RiCustomerService2Fill } from "react-icons/ri"
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
          <h2 className="text-2xl font-bold">Services/Expertise</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 text-xs text-gray-500 dark:text-gray-300  sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="flex items-center space-x-4">
              <FaCode className="text-4xl text-blue-500" />
              <span className="text-xl font-semibold">
                Custom Website Development
              </span>
            </div>
            {/* Service 2 */}
            <div className="flex items-center space-x-4">
              <FaShoppingCart className="text-4xl text-green-500" />
              <span className="text-xl font-semibold">
                E-commerce Solutions
              </span>
            </div>
            {/* Service 3 */}
            <div className="flex items-center space-x-4">
              <FaMobileAlt className="text-4xl text-yellow-500" />
              <span className="text-xl font-semibold">
                Responsive Web Design
              </span>
            </div>
            {/* Service 4 */}
            <div className="flex items-center space-x-4">
              <FaCog className="text-4xl text-orange-500" />
              <span className="text-xl font-semibold">
                Website Maintenance and Support
              </span>
            </div>
            {/* Service 5 */}
            <div className="flex items-center space-x-4">
              <FaFileCode className="text-4xl text-purple-500" />
              <span className="text-xl font-semibold">
                Web Application Development
              </span>
            </div>
            {/* Service 6 */}
            <div className="flex items-center space-x-4">
              <RiCustomerService2Fill className="text-4xl text-pink-500" />
              <span className="text-xl font-semibold">UI/UX Design</span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Process/Approach</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 text-gray-500 dark:text-gray-300 sm:grid-cols-2">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-blue-500 p-2">
                <FaBrain className="animate-pulse text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">1. Consultation</h3>
                <p className="text-sm">
                  Initial discussion to understand your requirements and goals.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-green-500 p-2">
                <FaPencilAlt className=" animate-pulse text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  2. Planning &amp; Design
                </h3>
                <p className="text-sm">
                  Creating a project roadmap and designing user-friendly
                  interfaces.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="animate-pulse rounded-full bg-yellow-500 p-2">
                <FaCode className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">3. Development</h3>
                <p className="text-sm">
                  Implementing front-end and back-end functionality using modern
                  web technologies.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="animate-pulse rounded-full bg-orange-500 p-2">
                <FaSearch className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">4. Testing &amp; QA</h3>
                <p className="text-sm">
                  Thorough testing and debugging to ensure a seamless user
                  experience.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="animate-pulse rounded-full bg-purple-500 p-2">
                <FaServer className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">5. Deployment</h3>
                <p className="text-sm">
                  Deploying the website or web application to a production
                  environment.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-pink-500 p-2">
                <FaHandshake className="animate-pulse text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  6. Maintenance &amp; Support
                </h3>
                <p className="text-sm">
                  Providing ongoing maintenance and support services as needed.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-500 dark:text-gray-200">
            I believe in effective communication and collaboration. I&apos;m
            available for regular feedback, iterative discussions, and to
            address any concerns you may have throughout the development
            process.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center space-x-2">
            <div className="mt-12 rounded-lg bg-yellow-300 dark:bg-yellow-700 px-6 py-4">
              <div className="flex items-center">
                <FaDollarSign className="text-2xl text-yellow-500 dark:text-yellow-200" />
                <span className="ml-2 text-xl font-semibold">
                  Pricing starts as low as $100 USD!
                </span>
                <span className="ml-4 text-xl font-semibold">
                  Bring a client and get a{" "}
                  <FaPercent className="inline-block" />
                  10 commission!
                </span>
              </div>
            </div>
          </div>
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
