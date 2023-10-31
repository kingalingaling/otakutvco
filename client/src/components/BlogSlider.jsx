import { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data.json";

import { RiAccountPinCircleLine } from "react-icons/ri";

export default class BlogSlider extends Component {
  render() {
    const blogs = data.blogs;
    const settings = {
      dots: true,
      autoplay: true,
      draggable: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="w-full">
        <h2 className="text-xl text-white md:text-2xl mb-4 lg:text-3xl text-center mx-auto font-bold">
          Articles from Our Blog
        </h2>
        <Slider {...settings} >
          {blogs.map((i) => (
            <Link key={i.id} to={i.link} target="_blank" rel="noreferrer">
              <div className="group cursor-pointer inline-block pb-4 bg-white text-black overflow-hidden rounded-2xl shadow-md shadow-black/25 transition">
                <figure className="max-h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition group-hover:scale-125"
                    src={i.image}
                  />
                </figure>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{i.title}</h3>
                  <div className="flex justify-start">
                    <RiAccountPinCircleLine className="mt-0.5" />
                    <p className="ml-1.5">{i.author}</p>
                  </div>
                  <div className="bg-black w-fit text-white text-xs p-0.5 px-3 rounded-sm">
                    {i.genre}
                  </div>
                  <p className="text-xs mt-1">Collection: {i.collection}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}
