import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Finance & Business Management",
      institution: "Universidad Panamericana - Mexico City",
      duration: "Aug 2022 - Dec 2026",
      description: "GPA: 3.76. Member of the Student Society. Comprehensive program covering financial analysis, corporate finance, investment management, and business strategy."
    },
    {
      degree: "Bachelor's Exchange Abroad",
      institution: "UC Berkeley - California, United States",
      duration: "Summer 2025",
      description: "Specialized studies in Economics, Politics, AI, and Data at one of the world's leading universities."
    },
    {
      degree: "Pre-collegiate Studies",
      institution: "Gustavson School of Business, University of Victoria - Canada",
      duration: "Summer 2022",
      description: "International Summer for Business Management program focusing on global business perspectives and management principles."
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-navy-500 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((item, index) => (
            <Card key={index} className="bg-slate-50 border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">
                    {item.degree}
                  </h3>
                  <span className="text-navy-600 font-medium">{item.duration}</span>
                </div>
                <p className="text-lg text-gray-700 mb-3">{item.institution}</p>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
