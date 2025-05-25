"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

export default function Assessment() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    education: "",
    experience: "",
    skills: [] as string[],
    interests: [] as string[],
    workPreference: "",
    location: "",
    salary: "",
    additionalInfo: "",
  })

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const handleSkillsChange = (skill: string) => {
    if (formData.skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: formData.skills.filter((s) => s !== skill),
      })
    } else {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill],
      })
    }
  }

  const handleInterestsChange = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter((i) => i !== interest),
      })
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest],
      })
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate API call to analyze skills and generate recommendations
    setTimeout(() => {
      // In a real app, you would send the data to your backend for AI analysis
      // For this demo, we'll just redirect to the results page
      setIsSubmitting(false)
      router.push("/dashboard/jobs")
    }, 3000)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Skills Assessment</h1>
        <p className="text-gray-600 mb-4">
          Complete this assessment to get personalized green job recommendations and learning paths.
        </p>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{progress.toFixed(0)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <Card className="mb-6">
        {currentStep === 1 && (
          <>
            <CardHeader>
              <CardTitle>Education & Qualifications</CardTitle>
              <CardDescription>Tell us about your educational background and qualifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="education">What is your highest level of education and field of study?</Label>
                <Textarea
                  id="education"
                  placeholder="e.g., Bachelor's degree in Environmental Science, Certificate in Sustainable Business"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="certifications">Do you have any relevant certifications or specialized training?</Label>
                <Textarea
                  id="certifications"
                  placeholder="e.g., LEED Green Associate, Renewable Energy Certificate, etc."
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </>
        )}

        {currentStep === 2 && (
          <>
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
              <CardDescription>Select the skills you possess that are relevant to green jobs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Label>Technical Skills</Label>
                  <div className="space-y-2">
                    {[
                      "Data Analysis",
                      "Renewable Energy",
                      "Waste Management",
                      "Carbon Accounting",
                      "Environmental Monitoring",
                      "GIS",
                      "Life Cycle Assessment",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={`skill-${skill}`}
                          checked={formData.skills.includes(skill)}
                          onCheckedChange={() => handleSkillsChange(skill)}
                        />
                        <label
                          htmlFor={`skill-${skill}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Soft Skills</Label>
                  <div className="space-y-2">
                    {[
                      "Project Management",
                      "Communication",
                      "Leadership",
                      "Problem Solving",
                      "Teamwork",
                      "Adaptability",
                      "Critical Thinking",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={`skill-${skill}`}
                          checked={formData.skills.includes(skill)}
                          onCheckedChange={() => handleSkillsChange(skill)}
                        />
                        <label
                          htmlFor={`skill-${skill}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="other-skills">Other skills not listed above:</Label>
                <Textarea
                  id="other-skills"
                  placeholder="List any other skills you have that might be relevant..."
                  className="mt-2"
                />
              </div>
            </CardContent>
          </>
        )}

        {currentStep === 3 && (
          <>
            <CardHeader>
              <CardTitle>Interests & Preferences</CardTitle>
              <CardDescription>Tell us about your interests in the green economy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-3 block">Which green sectors are you most interested in?</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Renewable Energy",
                    "Sustainable Agriculture",
                    "Green Building",
                    "Waste Management",
                    "Conservation",
                    "Clean Transportation",
                    "Circular Economy",
                    "Climate Policy",
                    "Corporate Sustainability",
                    "Environmental Education",
                  ].map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={`interest-${interest}`}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={() => handleInterestsChange(interest)}
                      />
                      <label
                        htmlFor={`interest-${interest}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="work-preference">What type of work arrangement do you prefer?</Label>
                <RadioGroup
                  id="work-preference"
                  value={formData.workPreference}
                  onValueChange={(value) => setFormData({ ...formData, workPreference: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="remote" id="remote" />
                    <Label htmlFor="remote">Remote</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hybrid" id="hybrid" />
                    <Label htmlFor="hybrid">Hybrid</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="on-site" id="on-site" />
                    <Label htmlFor="on-site">On-site</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible">Flexible (no preference)</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </>
        )}

        {currentStep === 4 && (
          <>
            <CardHeader>
              <CardTitle>Location & Compensation</CardTitle>
              <CardDescription>Tell us about your location preferences and salary expectations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location">Preferred location for work</Label>
                <Input
                  id="location"
                  placeholder="e.g., San Francisco, CA or 'Remote'"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary">Salary expectations (annual)</Label>
                <Input
                  id="salary"
                  placeholder="e.g., $60,000 - $80,000"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="relocation">Are you willing to relocate for the right opportunity?</Label>
                <RadioGroup id="relocation" defaultValue="maybe">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="maybe" />
                    <Label htmlFor="maybe">Depends on the location</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </>
        )}

        {currentStep === 5 && (
          <>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>
                Share any other information that might help us match you with the right green jobs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="additional-info">
                  Is there anything else you'd like to share about your career goals or preferences?
                </Label>
                <Textarea
                  id="additional-info"
                  placeholder="e.g., I'm looking to transition from the oil and gas industry to renewable energy..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="min-h-[150px]"
                />
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="font-medium text-green-800 flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Almost Done!
                </h3>
                <p className="text-green-700 text-sm">
                  After submitting this assessment, our AI will analyze your profile and generate personalized green job
                  recommendations and learning paths to help you develop the skills needed for a sustainable career.
                </p>
              </div>
            </CardContent>
          </>
        )}

        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {currentStep < totalSteps ? (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-green-600 hover:bg-green-700">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Submit Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
