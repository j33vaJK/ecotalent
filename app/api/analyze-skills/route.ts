import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: Request) {
  try {
    const { skills, qualifications } = await request.json()

    // Use AI SDK to analyze skills and qualifications
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `
        Analyze the following skills and qualifications for green job recommendations:
        
        Skills: ${skills.join(", ")}
        Qualifications: ${qualifications}
        
        Provide a JSON response with:
        1. Top 3 recommended green jobs based on the skills and qualifications
        2. Skills gap analysis - what skills are missing for each job
        3. Recommended learning path to fill those gaps
        
        Format the response as valid JSON with the following structure:
        {
          "recommendedJobs": [
            {
              "title": "Job Title",
              "match": 85, // percentage match
              "description": "Brief job description",
              "requiredSkills": ["skill1", "skill2"],
              "missingSkills": ["skill3", "skill4"]
            }
          ],
          "learningPath": [
            {
              "course": "Course Name",
              "skills": ["skill1", "skill2"],
              "duration": "4 weeks"
            }
          ]
        }
      `,
    })

    // Parse the AI response as JSON
    const analysisResult = JSON.parse(text)

    return NextResponse.json(analysisResult)
  } catch (error) {
    console.error("Error analyzing skills:", error)
    return NextResponse.json({ error: "Failed to analyze skills" }, { status: 500 })
  }
}
