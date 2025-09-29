import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import jaggeryImg from "@/product/jaggery.jpg";
import makhanaImg from "@/product/makhana.jpg";
import nonBasmatiRiceImg from "@/product/non basmati rice.jpg";
import redChilliImg from "@/product/red chilli.jpg";
import wheatFlourImg from "@/product/wheat and wheat flour.jpg";
import garlicImg from "@/product/garlic.jpg";
import onionImg from "@/product/onion.jpg";
import paperBagsImg from "@/product/paper-bags.jpg";
import potteryProductsImg from "@/product/pottery products.jpg";

const HomePage = () => {
  const productItems = [
    {
      title: "Jaggery Cubes",
      description: "Natural sweetener, minimally processed with rich minerals.",
      image: jaggeryImg,
    },
    {
      title: "Non-Basmati Rice",
      description: "Premium grains, well-polished and hygienically packed.",
      image: nonBasmatiRiceImg,
    },
    {
      title: "Wheat & Wheat Flour",
      description: "High-quality wheat kernels and finely milled flour.",
      image: wheatFlourImg,
    },
    {
      title: "Makhana (Fox Nuts)",
      description: "Crisp, nutritious snacks sourced from reliable producers.",
      image: makhanaImg,
    },
    {
      title: "Red Chilli Powder",
      description: "Vibrant color and heat, stone-ground for maximum flavor.",
      image: redChilliImg,
    },
    {
      title: "Garlic",
      description: "Fresh garlic bulbs, sorted and export-grade quality.",
      image: garlicImg,
    },
    {
      title: "Onion",
      description: "Firm, well-cured onions suitable for long-distance shipping.",
      image: onionImg,
    },
    {
      title: "Paper Bags",
      description: "Eco-friendly kraft paper bags for retail and packaging.",
      image: paperBagsImg,
    },
    {
      title: "Pottery Products",
      description: "Handcrafted pottery with traditional designs and durable finish.",
      image: potteryProductsImg,
    },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection items={productItems} />
      </main>
    </div>
  );
};

export default HomePage;