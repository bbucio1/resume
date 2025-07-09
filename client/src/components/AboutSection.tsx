import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-navy-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-sm border border-gray-200">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am a Business Management and Finance student at Universidad Panamericana with hands-on experience in corporate finance, 
                financial modeling, client relationship management, and strategic sales. I have worked at a private debt fund supporting 
                deal structuring, preparing investor presentations, and participating in meetings with company owners and key stakeholders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Additionally, I have led the development of a new digital business line, managed cross-functional teams, and executed 
                pricing strategies based on market analysis. My experience includes building detailed financial models for mid-market 
                debt deals ($30M+), supporting investment committees, and streamlining operational processes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I bring a combination of analytical rigor, commercial awareness, and execution focus. I am passionate about finance, 
                technology, and contributing to meaningful projects that drive growth and success in fast-paced, high-performance environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
