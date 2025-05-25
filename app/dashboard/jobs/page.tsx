"use client"

import { useState } from "react"
import {
  MapPin,
  Building,
  Clock,
  DollarSign,
  Briefcase,
  Search,
  Filter,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample job data
const jobsData = [
  {
    id: 1,
    title: "Sustainability Coordinator",
    company: "EcoSolutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    match: 95,
    description:
      "Lead sustainability initiatives and help reduce our company's environmental footprint. Develop and implement green strategies across departments.",
    skills: ["Project Management", "Sustainability", "Data Analysis", "Communication"],
    posted: "2 days ago",
    remote: false,
  },
  {
    id: 2,
    title: "Renewable Energy Analyst",
    company: "Green Power Co.",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    match: 88,
    description:
      "Analyze renewable energy projects and provide insights on efficiency and implementation. Work with solar and wind energy data.",
    skills: ["Data Analysis", "Renewable Energy", "Research", "Technical Writing"],
    posted: "1 week ago",
    remote: true,
  },
  {
    id: 3,
    title: "Environmental Consultant",
    company: "Sustainable Future Ltd.",
    location: "Boston, MA",
    type: "Contract",
    salary: "$50 - $70 per hour",
    match: 82,
    description:
      "Provide expert advice on environmental regulations and sustainability practices. Help clients reduce their environmental impact.",
    skills: ["Consulting", "Environmental Science", "Regulatory Knowledge", "Problem Solving"],
    posted: "3 days ago",
    remote: false,
  },
  {
    id: 4,
    title: "Green Building Specialist",
    company: "EcoArchitects",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    match: 79,
    description:
      "Oversee LEED certification processes and sustainable building practices. Collaborate with architects and construction teams.",
    skills: ["LEED", "Green Building", "Project Management", "Technical Knowledge"],
    posted: "5 days ago",
    remote: false,
  },
  {
    id: 5,
    title: "Sustainable Supply Chain Manager",
    company: "GreenLogistics",
    location: "Remote",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    match: 76,
    description:
      "Optimize supply chain operations with a focus on sustainability and reduced environmental impact. Implement green logistics solutions.",
    skills: ["Supply Chain", "Logistics", "Sustainability", "Leadership"],
    posted: "2 weeks ago",
    remote: true,
  },
]

export default function JobMatches() {
  const [searchTerm, setSearchTerm] = useState("")
  const [matchFilter, setMatchFilter] = useState([0, 100])
  const [remoteOnly, setRemoteOnly] = useState(false)
  const [jobType, setJobType] = useState("all")
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  // Filter jobs based on search and filters
  const filteredJobs = jobsData.filter((job) => {
    // Search term filter
    const searchMatch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    // Match percentage filter
    const matchPercentageMatch = job.match >= matchFilter[0] && job.match <= matchFilter[1]

    // Remote filter
    const remoteMatch = remoteOnly ? job.remote : true

    // Job type filter
    const jobTypeMatch = jobType === "all" || job.type.toLowerCase().includes(jobType.toLowerCase())

    return searchMatch && matchPercentageMatch && remoteMatch && jobTypeMatch
  })

  const toggleJobExpand = (jobId: number) => {
    if (expandedJob === jobId) {
      setExpandedJob(null)
    } else {
      setExpandedJob(jobId)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Green Job Matches</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{filteredJobs.length} jobs found</span>
        </div>
      </div>

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
                  <Label>Match Percentage</Label>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{matchFilter[0]}%</span>
                    <span>{matchFilter[1]}%</span>
                  </div>
                  <Slider
                    defaultValue={matchFilter}
                    min={0}
                    max={100}
                    step={5}
                    onValueChange={(value) => setMatchFilter(value as [number, number])}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Job Type</Label>
                  <Select value={jobType} onValueChange={setJobType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remote-mobile"
                    checked={remoteOnly}
                    onCheckedChange={(checked) => setRemoteOnly(checked === true)}
                  />
                  <label
                    htmlFor="remote-mobile"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remote jobs only
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
              <div className="space-y-2">
                <Label>Match Percentage</Label>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{matchFilter[0]}%</span>
                  <span>{matchFilter[1]}%</span>
                </div>
                <Slider
                  defaultValue={matchFilter}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={(value) => setMatchFilter(value as [number, number])}
                />
              </div>

              <div className="space-y-2">
                <Label>Job Type</Label>
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remote"
                  checked={remoteOnly}
                  onCheckedChange={(checked) => setRemoteOnly(checked === true)}
                />
                <label
                  htmlFor="remote"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remote jobs only
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="flex-1">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search jobs by title, company, or keyword"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden">
                  <div
                    className={`p-4 cursor-pointer hover:bg-gray-50 ${job.match >= 90 ? "border-l-4 border-green-500" : ""}`}
                    onClick={() => toggleJobExpand(job.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{job.title}</h3>
                        <div className="flex items-center gap-1 text-gray-600 mt-1">
                          <Building className="h-4 w-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-2">
                          <Badge
                            className={`${job.match >= 90 ? "bg-green-100 text-green-800" : job.match >= 80 ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-800"}`}
                          >
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            {job.match}% Match
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <Clock className="h-3 w-3" />
                          <span>{job.posted}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="bg-gray-50">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="bg-gray-50">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {job.salary}
                      </Badge>
                      {job.remote && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Remote
                        </Badge>
                      )}
                    </div>

                    {expandedJob === job.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-gray-700 mb-4">{job.description}</p>

                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Required Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <Button variant="outline">Save Job</Button>
                          <Button className="bg-green-600 hover:bg-green-700">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="bg-gray-100 rounded-full p-4 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium mb-2">No jobs found</h3>
                <p className="text-gray-500 text-center mb-4">
                  Try adjusting your search or filters to find more opportunities
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setMatchFilter([0, 100])
                    setRemoteOnly(false)
                    setJobType("all")
                  }}
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
