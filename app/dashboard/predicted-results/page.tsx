"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { useSearchParams } from "next/navigation"
import jobsData from "@/data/jobsData"



export default function PredictedResults() {
  const [searchTerm, setSearchTerm] = useState("")
const searchParams = useSearchParams()
const idsParam = searchParams.get("ids")
const jobIds = idsParam ? idsParam.split(",").map(Number) : []

const predictedData = jobsData.filter(job => jobIds.includes(job.id))

  const filteredResults = predictedData.filter((result) =>
    result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Model Predicted Roles</h1>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          className="pl-10"
          placeholder="Search by role or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredResults.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>{item.title}</CardTitle>
    
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <Badge key={idx}>{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
        {filteredResults.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No matching results found.</p>
        )}
      </div>
    </div>
  )
}
