"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Briefcase, GraduationCap, ArrowRight, CheckCircle2, Clock, Award, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  const [userName, setUserName] = useState("")
  const [profileCompletion, setProfileCompletion] = useState(30)
  

  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-green-600 to-green-700 -mx-6 px-6 py-8 text-white rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {userName || "User"}!</h1>
        <p className="text-green-100 mb-6">Track your green career journey and discover new opportunities.</p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Profile Completion</h3>
            <span className="text-sm">{profileCompletion}%</span>
          </div>
          <Progress value={profileCompletion} className="h-2 bg-white/20" indicatorClassName="bg-white" />

          <div className="mt-4">
            <Link href="/dashboard/profile">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-green-700"
              >
                Complete Your Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-green-600" />
              Job Matches
            </CardTitle>
            <CardDescription>Green jobs that match your skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-4">
                <div className="bg-white p-2 rounded-md">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Sustainability Coordinator</h3>
                  <p className="text-sm text-gray-500">EcoSolutions Inc.</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">90% Match</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Remote</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-4">
                <div className="bg-white p-2 rounded-md">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Environmental Analyst</h3>
                  <p className="text-sm text-gray-500">Green Future Ltd.</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">75% Match</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Hybrid</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/jobs" className="w-full">
              <Button variant="outline" className="w-full">
                View All Job Matches
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-green-600" />
              Learning Path
            </CardTitle>
            <CardDescription>Recommended courses to enhance your green skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Introduction to Sustainability</h3>
                  <p className="text-sm text-gray-500">Completed on May 5, 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-lg">
                <Clock className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Renewable Energy Fundamentals</h3>
                  <p className="text-sm text-gray-500">In progress - 60% complete</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 border-l-4 border-gray-300 bg-gray-50 rounded-r-lg">
                <Award className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Sustainable Business Practices</h3>
                  <p className="text-sm text-gray-500">Recommended next course</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/learning" className="w-full">
              <Button variant="outline" className="w-full">
                View Learning Path
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
            <CardDescription>Complete your skills assessment to get personalized job recommendations</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="mb-4">
                Our AI-powered assessment will analyze your skills and qualifications to match you with sustainable
                career opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Takes only 10-15 minutes to complete</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Identifies your transferable green skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Suggests personalized learning paths</span>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <Link href="/dashboard/assessment">
                <Button className="bg-green-600 hover:bg-green-700">
                  Start Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
