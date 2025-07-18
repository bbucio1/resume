import { Mail, Download, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HeroSection() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const downloadCV = () => {
    // Link to CV download - replace with actual CV file path
    const link = document.createElement("a");
    link.href = "/cv/bruno-bucio-cv.pdf";
    link.download = "Bruno_Bucio_CV.pdf";
    link.click();
  };

  const openChatbot = () => {
    setIsChatbotOpen(true);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <section id="home" className="section-padding pt-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Bruno Bucio Chávez
            </h1>
            <p className="text-xl md:text-2xl text-navy-500 mb-6 font-medium">
              Finance & Business Management Professional
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Business Management and Finance student at Universidad Panamericana with experience in corporate finance, 
              financial modeling, and strategic sales. Experienced in private debt fund operations, digital business development, 
              and cross-functional team leadership in fast-paced, high-performance environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 text-base font-medium"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                onClick={downloadCV}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 text-base font-medium"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button
                onClick={openChatbot}
                variant="outline"
                className="border-navy-500 text-navy-600 hover:bg-navy-50 px-6 py-3 text-base font-medium"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat with AI
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            {/* Professional headshot */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/bruno-profile.jpg" 
                alt="Bruno Bucio Chávez - Professional headshot" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Modal */}
      {isChatbotOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Chat with Bruno's AI Assistant
              </h3>
              <Button
                onClick={closeChatbot}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/cfk-35IMMQuae23x63K7M"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Bruno's AI Assistant"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
