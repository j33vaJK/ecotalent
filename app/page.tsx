import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight, Briefcase, GraduationCap, LineChart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="text-2xl font-bold text-green-800">EcoTalent</span>
        </div>
        <div className="flex gap-4">
          <Link href="/sign-in">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
          </Link>
        </div>
      </header>

      <main>
        <section className="container mx-auto py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 leading-tight">
              Discover Your Green Career Path
            </h1>
            <p className="text-xl text-gray-600">
              Connect your skills to sustainable jobs and build a career that makes a difference for our planet.
            </p>
            <div className="pt-4">
              <Link href="/sign-up">
                <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white rounded-lg shadow-xl p-6 md:p-8 border border-green-100">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Green career illustration"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-green-200 rounded-lg"></div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">How EcoTalent Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Share Your Skills</h3>
                <p className="text-gray-600">Enter your qualifications and skills to create your green profile.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LineChart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">AI Analysis</h3>
                <p className="text-gray-600">Our AI analyzes your profile to identify green career opportunities.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Get Recommendations</h3>
                <p className="text-gray-600">Receive personalized green job matches and learning paths.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-20">
          <div className="bg-green-50 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Ready to start your green career journey?</h2>
              <p className="text-gray-600 mb-6">
                Join thousands of professionals transitioning to sustainable careers.
              </p>
              <Link href="/sign-up">
                <Button className="bg-green-600 hover:bg-green-700">Create Your Account</Button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 bg-green-100 rounded w-3/4"></div>
                    <div className="h-6 bg-green-100 rounded"></div>
                    <div className="h-6 bg-green-100 rounded w-1/2"></div>
                    <div className="h-20 bg-green-200 rounded mt-4"></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-100 w-20 h-20 rounded-full flex items-center justify-center">
                  <Leaf className="h-10 w-10 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-300" />
                <span className="text-xl font-bold">EcoTalent</span>
              </div>
              <p className="text-green-200 max-w-md">
                Connecting talent with sustainable careers for a greener future.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-green-300">Platform</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-green-100 hover:text-white">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white">
                      Green jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white">
                      Learning paths
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-green-300">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-green-100 hover:text-white">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-green-300">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-green-100 hover:text-white">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
            <p>© {new Date().getFullYear()} EcoTalent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
