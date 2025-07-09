import { Mail, Phone, Linkedin, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "bruno.bucio@email.com",
      link: "mailto:bruno.bucio@email.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+52 55 1234 5678",
      link: "tel:+525512345678"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "linkedin.com/in/brunobucio",
      link: "https://linkedin.com/in/brunobucio"
    },
    {
      icon: Globe,
      title: "Website",
      content: "brunobucio.com",
      link: "https://brunobucio.com"
    }
  ];

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/bruno-bucio-cv.pdf";
    link.download = "Bruno_Bucio_CV.pdf";
    link.click();
  };

  return (
    <section id="contact" className="section-padding bg-navy-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="text-xl text-navy-100 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's connect!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-navy-200 hover:text-white transition-colors"
                >
                  {item.content}
                </a>
              </div>
            );
          })}
        </div>
        
        {/* CV Download */}
        <div className="text-center mt-12">
          <Button
            onClick={downloadCV}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-navy-600 px-8 py-4 text-lg font-medium"
          >
            <Download className="mr-3 h-5 w-5" />
            Download My CV
          </Button>
        </div>
      </div>
    </section>
  );
}
