import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experience = [
    {
      role: "Financial Analyst Intern",
      company: "ABC Financial Services",
      duration: "Jun 2023 - Dec 2023",
      achievements: [
        "Developed comprehensive financial models for investment analysis, improving decision-making accuracy by 15%",
        "Collaborated with senior analysts on portfolio risk assessment projects",
        "Prepared detailed reports and presentations for executive stakeholders"
      ]
    },
    {
      role: "Business Development Assistant",
      company: "XYZ Consulting Group",
      duration: "Jan 2023 - May 2023",
      achievements: [
        "Conducted market research and competitive analysis for client projects",
        "Assisted in developing strategic business plans for SME clients",
        "Maintained client databases and coordinated project timelines"
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
