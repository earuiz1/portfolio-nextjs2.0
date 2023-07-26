import HomeContent from "@/components/HomeContent";
import React from "react";

const Home = () => {
  // w-full px-4 h-screen py-20 md:px-20 lg:py-32
  return (
    <section className="w-full px-4 md:py-12 md:px-20 lg:px-28 lg:py-20">
      <HomeContent />
    </section>
  );
};

export default Home;
