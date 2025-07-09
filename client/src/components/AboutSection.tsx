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
                With a strong foundation in finance and business management, I bring an analytical mindset and strategic approach to every challenge. 
                My academic background has equipped me with comprehensive knowledge of financial principles, market analysis, and organizational behavior.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Throughout my studies and professional experiences, I have developed expertise in financial modeling, risk assessment, and business strategy development. 
                I am particularly passionate about leveraging data-driven insights to inform decision-making and drive sustainable business growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I thrive in collaborative environments and am committed to continuous learning and professional development. 
                My goal is to contribute to organizations that value innovation, integrity, and excellence in their pursuit of business objectives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
