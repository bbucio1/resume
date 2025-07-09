import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Globe, Users, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skills = {
    technical: [
      "Financial Modeling",
      "Business Analysis",
      "Market Research",
      "Strategic Planning",
      "CRM Tools",
      "Macabacus",
      "Notion",
      "Chatbot Automation",
      "Google Workspace",
      "Microsoft Office",
      "Canva",
      "Meta Business Suite",
      "Python",
      "VSB"
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "C1" },
      { name: "French", level: "DELF B1" }
    ],
    soft: [
      "Analytical Thinking",
      "Strategic Problem Solving",
      "Attention to Detail",
      "Effective Communication",
      "Client Relationship Management",
      "Time Management",
      "Adaptability",
      "Team Collaboration",
      "Initiative",
      "Data-driven Decision Making"
    ]
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-navy-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        {/* Interests Section */}
        <div className="mt-12">
          <Card className="bg-slate-50 border border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Heart className="text-navy-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Interests & Hobbies</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Professional</h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-navy-100 text-navy-800 mr-2 mb-2">
                      Financial Podcasts
                    </Badge>
                    <Badge variant="secondary" className="bg-navy-100 text-navy-800 mr-2 mb-2">
                      Business Podcasts
                    </Badge>
                    <Badge variant="secondary" className="bg-navy-100 text-navy-800 mr-2 mb-2">
                      Entrepreneurship
                    </Badge>
                    <Badge variant="secondary" className="bg-navy-100 text-navy-800 mr-2 mb-2">
                      Technology Trends
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Sports</h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 mr-2 mb-2">
                      Tennis
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 mr-2 mb-2">
                      Padel
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 mr-2 mb-2">
                      Soccer
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Learning</h4>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">
                      Continuously exploring new financial markets, business strategies, and emerging technologies 
                      to stay ahead in the dynamic world of finance and business.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
