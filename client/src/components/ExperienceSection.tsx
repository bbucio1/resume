import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experience = [
    {
      role: "Junior Financial Analyst (Winter Internship)",
      company: "Alta Real Estate Fund",
      duration: "Nov 2024 - Feb 2025",
      achievements: [
        "Built detailed financial models for mid-market debt deals ($30M+), supporting investment committees in structuring and credit analysis",
        "Created professional investor presentations, increasing pitch quality and team productivity by 20%",
        "Streamlined approval workflows for debt structures by coordinating with cross-functional teams, improving deal turnaround time",
        "Joined meetings with partners and key clients, gaining exposure to live deal execution and investor strategy",
        "Implemented Notion to centralize processes, increasing task tracking and internal communication efficiency by 25%"
      ]
    },
    {
      role: "Project Management Intern",
      company: "XBD Orthodontics",
      duration: "Aug 2023 - Sep 2024",
      achievements: [
        "Negotiated with Chinese suppliers, securing favorable pricing and quality, reducing procurement costs by 10%",
        "Led pricing strategy and monthly promotion planning through product and market analysis, increasing sales and engagement",
        "Deployed chatbot automation, improving client service productivity by 40% and drastically cutting response times",
        "Managed cross-functional teams and executed data-driven pricing strategies"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-navy-500 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experience.map((item, index) => (
            <Card key={index} className="bg-white shadow-sm border border-gray-200">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.role}</h3>
                    <p className="text-lg text-navy-600 font-medium">{item.company}</p>
                  </div>
                  <span className="text-gray-600 font-medium flex-shrink-0">{item.duration}</span>
                </div>
                <ul className="text-gray-700 space-y-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <CheckCircle className="text-green-500 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
