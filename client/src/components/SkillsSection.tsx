import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Globe, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skills = {
    technical: [
      "Excel Advanced",
      "Financial Modeling",
      "Bloomberg Terminal",
      "SQL",
      "Power BI",
      "Tableau",
      "Python (Basic)"
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "Portuguese", level: "Intermediate" }
    ],
    soft: [
      "Leadership",
      "Analytical Thinking",
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Adaptability"
    ]
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-navy-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="bg-slate-50 border border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Laptop className="text-navy-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Technical Skills</h3>
              </div>
              <div className="space-y-3">
                {skills.technical.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-navy-100 text-navy-800 mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Language Skills */}
          <Card className="bg-slate-50 border border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="text-navy-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Languages</h3>
              </div>
              <div className="space-y-4">
                {skills.languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">{language.name}</span>
                    <span className="text-sm text-gray-600">{language.level}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-slate-50 border border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="text-navy-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Soft Skills</h3>
              </div>
              <div className="space-y-3">
                {skills.soft.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
