"use client"

import { useState, useEffect } from "react"
import { User, Briefcase, GraduationCap, MapPin, Mail, Phone, Globe, Plus, Trash2, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function Profile() {
  const [email, setEmail] = useState("")
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    title: "Sustainability Professional",
    location: "San Francisco, CA",
    phone: "",
    website: "",
    bio: "Passionate about creating a sustainable future through innovative solutions and collaborative approaches.",
    skills: ["Sustainability", "Project Management", "Data Analysis", "Communication", "Research"],
    newSkill: "",
    education: [
      {
        degree: "Bachelor of Science",
        field: "Environmental Science",
        institution: "University of California",
        year: "2020",
      },
    ],
    experience: [
      {
        title: "Sustainability Coordinator",
        company: "Green Solutions Inc.",
        location: "San Francisco, CA",
        startDate: "2020-06",
        endDate: "Present",
        description: "Led sustainability initiatives and reduced company carbon footprint by 15%.",
      },
    ],
  })

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem("ecoTalentUser")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setEmail(user.email)

      // Extract name from email for demo purposes
      const name = user.email.split("@")[0]
      const firstName = name.charAt(0).toUpperCase() + name.slice(1)
      setProfile((prev) => ({
        ...prev,
        firstName,
        lastName: "User",
      }))
    }
  }, [])

  const handleAddSkill = () => {
    if (profile.newSkill.trim() && !profile.skills.includes(profile.newSkill.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, profile.newSkill.trim()],
        newSkill: "",
      })
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((skill) => skill !== skillToRemove),
    })
  }

  const handleAddEducation = () => {
    setProfile({
      ...profile,
      education: [
        ...profile.education,
        {
          degree: "",
          field: "",
          institution: "",
          year: "",
        },
      ],
    })
  }

  const handleEducationChange = (index: number, field: string, value: string) => {
    const updatedEducation = [...profile.education]
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    }
    setProfile({
      ...profile,
      education: updatedEducation,
    })
  }

  const handleRemoveEducation = (index: number) => {
    setProfile({
      ...profile,
      education: profile.education.filter((_, i) => i !== index),
    })
  }

  const handleAddExperience = () => {
    setProfile({
      ...profile,
      experience: [
        ...profile.experience,
        {
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    })
  }

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const updatedExperience = [...profile.experience]
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    }
    setProfile({
      ...profile,
      experience: updatedExperience,
    })
  }

  const handleRemoveExperience = (index: number) => {
    setProfile({
      ...profile,
      experience: profile.experience.filter((_, i) => i !== index),
    })
  }

  const handleSaveProfile = () => {
    // In a real app, you would save to a database
    // For this demo, we'll just show an alert
    alert("Profile saved successfully!")
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Button onClick={handleSaveProfile} className="bg-green-600 hover:bg-green-700">
          <Save className="mr-2 h-4 w-4" />
          Save Profile
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="h-16 w-16 text-green-600" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profile.firstName}
                  onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profile.lastName}
                  onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input
                  id="title"
                  value={profile.title}
                  onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="flex">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <Input id="email" value={email} disabled />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="flex">
                  <Phone className="h-5 w-5 text-gray-400 mr-2" />
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="flex">
                  <Globe className="h-5 w-5 text-gray-400 mr-2" />
                  <Input
                    id="website"
                    value={profile.website}
                    onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Add your professional skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.skills.map((skill, index) => (
                  <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-200">
                    {skill}
                    <button onClick={() => handleRemoveSkill(skill)} className="ml-1 text-green-800 hover:text-red-600">
                      ×
                    </button>
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Add a skill"
                  value={profile.newSkill}
                  onChange={(e) => setProfile({ ...profile, newSkill: e.target.value })}
                  onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
                />
                <Button onClick={handleAddSkill} variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
              <CardDescription>Tell us about yourself and your career goals</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                className="min-h-[150px]"
                placeholder="Write a short bio..."
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Education
                </CardTitle>
                <CardDescription>Add your educational background</CardDescription>
              </div>
              <Button onClick={handleAddEducation} variant="outline" size="sm" className="text-green-600">
                <Plus className="h-4 w-4 mr-1" />
                Add Education
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {profile.education.map((edu, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg relative">
                  <button
                    onClick={() => handleRemoveEducation(index)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Degree</Label>
                      <Select
                        value={edu.degree}
                        onValueChange={(value) => handleEducationChange(index, "degree", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select degree" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="High School">High School</SelectItem>
                          <SelectItem value="Associate's">Associate's</SelectItem>
                          <SelectItem value="Bachelor of Arts">Bachelor of Arts</SelectItem>
                          <SelectItem value="Bachelor of Science">Bachelor of Science</SelectItem>
                          <SelectItem value="Master's">Master's</SelectItem>
                          <SelectItem value="PhD">PhD</SelectItem>
                          <SelectItem value="Certificate">Certificate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Field of Study</Label>
                      <Input
                        value={edu.field}
                        onChange={(e) => handleEducationChange(index, "field", e.target.value)}
                        placeholder="e.g. Environmental Science"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Institution</Label>
                      <Input
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                        placeholder="e.g. University of California"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Year</Label>
                      <Input
                        value={edu.year}
                        onChange={(e) => handleEducationChange(index, "year", e.target.value)}
                        placeholder="e.g. 2020"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Work Experience
                </CardTitle>
                <CardDescription>Add your professional experience</CardDescription>
              </div>
              <Button onClick={handleAddExperience} variant="outline" size="sm" className="text-green-600">
                <Plus className="h-4 w-4 mr-1" />
                Add Experience
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {profile.experience.map((exp, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg relative">
                  <button
                    onClick={() => handleRemoveExperience(index)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Job Title</Label>
                      <Input
                        value={exp.title}
                        onChange={(e) => handleExperienceChange(index, "title", e.target.value)}
                        placeholder="e.g. Sustainability Coordinator"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Company</Label>
                      <Input
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                        placeholder="e.g. Green Solutions Inc."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input
                        value={exp.location}
                        onChange={(e) => handleExperienceChange(index, "location", e.target.value)}
                        placeholder="e.g. San Francisco, CA"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                          placeholder="Present"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label>Description</Label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
                        placeholder="Describe your responsibilities and achievements..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
