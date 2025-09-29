import { useEffect, useRef, useState } from "react";
import { TrendingUp, Globe, Users, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  number: number;
  suffix: string;
  label: string;
  delay?: number;
}

const StatItem = ({ icon, number, suffix, label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          setTimeout(() => {
            const duration = 2000;
            const increment = number / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= number) {
                setCount(number);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 16);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [number, delay, hasAnimated]);

  return (
    <div 
      ref={elementRef}
      className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover-scale group"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">Global Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Join hundreds of satisfied clients 
            who trust us with their international trade needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            icon={<TrendingUp className="h-8 w-8 text-white" />}
            number={15}
            suffix="+"
            label="Years Experience"
            delay={0}
          />
          
          <StatItem
            icon={<Globe className="h-8 w-8 text-white" />}
            number={50}
            suffix="+"
            label="Countries Served"
            delay={200}
          />
          
          <StatItem
            icon={<Users className="h-8 w-8 text-white" />}
            number={500}
            suffix="+"
            label="Happy Clients"
            delay={400}
          />
          
          <StatItem
            icon={<Award className="h-8 w-8 text-white" />}
            number={98}
            suffix="%"
            label="Success Rate"
            delay={600}
          />
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 shadow-lg border border-border/50">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="text-foreground font-medium">Currently serving clients in 50+ countries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;