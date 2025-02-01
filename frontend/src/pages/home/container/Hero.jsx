import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../../components/Search";
import { images } from "../../../constants";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearchKeyword = ({ searchKeyword }) => {
    navigate(`/blog?search=${searchKeyword}`);
  };

  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-7xl lg:text-left lg:max-w-[540px]">
          Create a blog worth sharing
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Discover a wide range of articles designed to inform, inspire, and
          keep you ahead of the curve in today’s ever-evolving world.
        </p>
        <Search
          className="mt-10 lg:mt-6 xl:mt-10"
          onSearchKeyword={handleSearchKeyword}
        />
      </div>
      <div className="hidden lg:block lg:1/2">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
