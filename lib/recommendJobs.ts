import { GoogleGenerativeAI } from "@google/generative-ai";
import jobsData from "@/data/jobsData";


export const getJobRecommendations = async (
  assessmentData: any,
)=> {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const chat =  model.startChat({
    generationConfig: {
      maxOutputTokens: 400,
    },
  });

  const prompt = `
Given the candidate's profile:

Interests: ${assessmentData.interests.join(', ')}
Skills: ${assessmentData.skills.join(', ')}
Location Preference: ${assessmentData.preferences.location}
Salary Preference: ${assessmentData.preferences.salaryRange}

And the following list of jobs:
${jobsData
  .map(
    (job:any) => `
Job ID: ${job.id}
Title: ${job.title}
Company: ${job.company}
Location: ${job.location}
Type: ${job.type}
Salary: ${job.salary}
Remote: ${job.remote ? "Yes" : "No"}
Required Skills: ${job.skills.join(', ')}
Description: ${job.description}`
  )
  .join("\n")}

Please return ONLY the Job IDs of the top 3 most suitable jobs for this candidate. Format like: 1, 5, 7
`;

  const result = await chat.sendMessage(prompt);
  const response =  result.response;
  const text = response.text();

  const jobIds = text.match(/\d+/g)?.map(Number) || [];

  return jobsData.filter((job:any) => jobIds.includes(job.id));
};
