"use client"

import { useState } from "react"
import {
  GraduationCap,
  BookOpen,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  ExternalLink,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample courses data
const coursesData = [
  {
    id: 1,
    title: "Introduction to Sustainability",
    provider: "Green Academy",
    duration: "4 weeks",
    level: "Beginner",
    rating: 4.8,
    reviews: 245,
    relevance: 95,
    status: "completed",
    progress: 100,
    description: "Learn the fundamentals of sustainability and how it applies to various industries and personal life.",
    skills: ["Sustainability Basics", "Environmental Science", "Systems Thinking"],
    free: true,
  },
  {
    id: 2,
    title: "Renewable Energy Fundamentals",
    provider: "Energy Institute",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.6,
    reviews: 189,
    relevance: 90,
    status: "in-progress",
    progress: 60,
    description:
      "Understand the core concepts of renewable energy technologies including solar, wind, and hydroelectric power.",
    skills: ["Renewable Energy", "Energy Systems", "Technical Knowledge"],
    free: false,
  },
  {
    id: 3,
    title: "Sustainable Business Practices",
    provider: "Business School Online",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.5,
    reviews: 156,
    relevance: 85,
    status: "recommended",
    progress: 0,
    description: "Learn how to implement sustainable practices in business operations and strategy.",
    skills: ["Business Strategy", "Corporate Sustainability", "ESG Reporting"],
    free: false,
  },
  {
    id: 4,
    title: "Carbon Accounting and Management",
    provider: "Climate Education Hub",
    duration: "5 weeks",
    level: "Advanced",
    rating: 4.7,
    reviews: 112,
    relevance: 80,
    status: "recommended",
    progress: 0,
    description: "Master the methods for measuring, reporting, and managing carbon emissions in organizations.",
    skills: ["Carbon Accounting", "GHG Protocol", "Data Analysis"],
    free: true,
  },
  {
    id: 5,
    title: "Green Building Design",
    provider: "Sustainable Architecture Academy",
    duration: "10 weeks",
    level: "Advanced",
    rating: 4.9,
    reviews: 78,
    relevance: 75,
    status: "recommended",
    progress: 0,
    description: "Explore sustainable architecture principles and LEED certification requirements.",
    skills: ["Green Building", "LEED", "Sustainable Design"],
    free: false,
  },
]

export default function LearningPath() {
  const [searchTerm, setSearchTerm] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")
  const [freeOnly, setFreeOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  // Filter courses based on search and filters
  const filterCourses = (courses: typeof coursesData) => {
    return courses.filter((course) => {
      // Search term filter
      const searchMatch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())

      // Level filter
      const levelMatch = levelFilter === "all" || course.level.toLowerCase() === levelFilter.toLowerCase()

      // Free filter
      const freeMatch = freeOnly ? course.free : true

      return searchMatch && levelMatch && freeMatch
    })
  }

  const completedCourses = coursesData.filter((course) => course.status === "completed")
  const inProgressCourses = coursesData.filter((course) => course.status === "in-progress")
  const recommendedCourses = coursesData.filter((course) => course.status === "recommended")

  const filteredCompletedCourses = filterCourses(completedCourses)
  const filteredInProgressCourses = filterCourses(inProgressCourses)
  const filteredRecommendedCourses = filterCourses(recommendedCourses)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Learning Path</h1>
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-green-800 mb-2">Your Green Skills Journey</h2>
              <p className="text-green-700 mb-4">
                Based on your profile and job interests, we've created a personalized learning path to help you develop
                the skills needed for a sustainable career.
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-green-800">Overall Progress</span>
                    <span className="text-sm text-green-800">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-green-700">1 Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm text-green-700">1 In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <span className="text-sm text-green-700">3 Recommended</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="bg-white rounded-full p-6 shadow-md">
                <GraduationCap className="h-16 w-16 text-green-600" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters - Mobile */}
        <div className="md:hidden w-full">
          <Button
            variant="outline"
            className="w-full flex justify-between items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <div className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </div>
            {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>

          {showFilters && (
            <Card className="mt-4">
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label>Level</Label>
                  <Select value={levelFilter} onValueChange={setLevelFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="free-mobile"
                    checked={freeOnly}
                    onCheckedChange={(checked) => setFreeOnly(checked === true)}
                  />
                  <label
                    htmlFor="free-mobile"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Free courses only
                  </label>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses"
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Level</Label>
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="free" checked={freeOnly} onCheckedChange={(checked) => setFreeOnly(checked === true)} />
                <label
                  htmlFor="free"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Free courses only
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Listings */}
        <div className="flex-1">
          <div className="md:hidden relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search courses"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {[...filteredInProgressCourses, ...filteredCompletedCourses, ...filteredRecommendedCourses].length > 0 ? (
                [...filteredInProgressCourses, ...filteredCompletedCourses, ...filteredRecommendedCourses].map(
                  (course) => <CourseCard key={course.id} course={course} />,
                )
              ) : (
                <EmptyState />
              )}
            </TabsContent>

            <TabsContent value="in-progress" className="space-y-4">
              {filteredInProgressCourses.length > 0 ? (
                filteredInProgressCourses.map((course) => <CourseCard key={course.id} course={course} />)
              ) : (
                <EmptyState />
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {filteredCompletedCourses.length > 0 ? (
                filteredCompletedCourses.map((course) => <CourseCard key={course.id} course={course} />)
              ) : (
                <EmptyState />
              )}
            </TabsContent>

            <TabsContent value="recommended" className="space-y-4">
              {filteredRecommendedCourses.length > 0 ? (
                filteredRecommendedCourses.map((course) => <CourseCard key={course.id} course={course} />)
              ) : (
                <EmptyState />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function CourseCard({ course }: { course: (typeof coursesData)[0] }) {
  return (
    <Card
      className={`overflow-hidden ${
        course.status === "completed"
          ? "border-l-4 border-green-500"
          : course.status === "in-progress"
            ? "border-l-4 border-yellow-500"
            : ""
      }`}
    >
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg">{course.title}</h3>
                <div className="flex items-center gap-1 text-gray-600 mt-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.provider}</span>
                </div>
              </div>
              <Badge
                className={`
                ${
                  course.relevance >= 90
                    ? "bg-green-100 text-green-800"
                    : course.relevance >= 80
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-800"
                }
              `}
              >
                {course.relevance}% Relevant
              </Badge>
            </div>

            <p className="text-gray-700 mt-3 mb-4">{course.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {course.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <GraduationCap className="h-4 w-4" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>
                  {course.rating} ({course.reviews} reviews)
                </span>
              </div>
              {course.free && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Free
                </Badge>
              )}
            </div>

            {course.status === "in-progress" && (
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center gap-3">
            {course.status === "completed" && (
              <div className="flex items-center justify-center bg-green-50 text-green-700 p-3 rounded-lg mb-2">
                <CheckCircle2 className="h-5 w-5 mr-2" />
                <span>Completed</span>
              </div>
            )}

            <Button
              className={`${
                course.status === "in-progress"
                  ? "bg-yellow-600 hover:bg-yellow-700"
                  : course.status === "recommended"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-600 hover:bg-gray-700"
              }`}
            >
              {course.status === "in-progress"
                ? "Continue"
                : course.status === "recommended"
                  ? "Start Course"
                  : "View Certificate"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline">
              Course Details
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function EmptyState() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-12">
        <div className="bg-gray-100 rounded-full p-4 mb-4">
          <BookOpen className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-medium mb-2">No courses found</h3>
        <p className="text-gray-500 text-center mb-4">Try adjusting your search or filters to find more courses</p>
        <Button variant="outline">Browse All Courses</Button>
      </CardContent>
    </Card>
  )
}
