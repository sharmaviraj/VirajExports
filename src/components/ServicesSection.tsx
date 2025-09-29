import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Product = {
  title: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    title: "Jaggery Cubes",
    description: "Natural sweetener, minimally processed with rich minerals.",
    image: "/placeholder.svg",
  },
  {
    title: "Non-Basmati Rice",
    description: "Premium grains, well-polished and hygienically packed.",
    image: "/placeholder.svg",
  },
  {
    title: "Wheat & Wheat Flour",
    description: "High-quality wheat kernels and finely milled flour.",
    image: "/placeholder.svg",
  },
  {
    title: "Makhana (Fox Nuts)",
    description: "Crisp, nutritious snacks sourced from reliable producers.",
    image: "/placeholder.svg",
  },
  {
    title: "Red Chilli Powder",
    description: "Vibrant color and heat, stone-ground for maximum flavor.",
    image: "/placeholder.svg",
  },
];

type ServicesSectionProps = {
  items?: Product[];
};

const ServicesSection = ({ items }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-3">Products & Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Export Products</h2>
          <p className="text-muted-foreground mt-2">Carefully sourced and quality-assured for global markets.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(items ?? products).map((item) => (
            <Card key={item.title} className="group overflow-hidden animate-fade-in">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


