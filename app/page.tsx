import HomeContent from "@/components/HomeContent";
import React from "react";

const Home = () => {
  // w-full px-4 h-screen py-20 md:px-20 lg:py-32
  return (
    <section className="h-screen w-full px-4 md:px-20">
      <HomeContent />
    </section>
  );
};

export default Home;
