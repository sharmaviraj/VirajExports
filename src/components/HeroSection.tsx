import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Globe, Users } from "lucide-react";
import heroImage from "@/assets/hero-business-meeting.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Global Trade{" "}
                <span className="block text-primary-foreground/90">
                  Excellence in
                </span>
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Export Services
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
                Connect your business to global markets with our comprehensive export services.
                From sourcing to shipping, we handle every detail of your international trade journey.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-success hover:bg-success/90 text-success-foreground hover-glow group"
              >
                <span>Explore Services</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover-scale"
              >
                View Affiliations
              </Button>
            </div>

            {/* Stats Preview */}
            <div className={`grid grid-cols-3 gap-6 pt-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">50+</div>
                <div className="text-sm text-primary-foreground/80">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">500+</div>
                <div className="text-sm text-primary-foreground/80">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional business meeting - Global export services"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-lg animate-bounce">
                <div className="text-sm font-medium">Trusted by</div>
                <div className="text-lg font-bold">Global Partners</div>
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Growth Rate</div>
                    <div className="text-xl font-bold text-card-foreground">25% YoY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;