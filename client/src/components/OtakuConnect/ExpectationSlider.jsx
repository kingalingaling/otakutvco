import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data.json";

export default class ExpectationSlider extends Component {
  render() {
    const expectations = data.expectations;
    const settings = {
      dots: true,
      autoplay: true,
      draggable: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
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
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="w-full">
        <h2 className="w-full mx-auto text-2xl lg:text-4xl font-black text-center mb-4">
          What to Expect
        </h2>
        <Slider {...settings}>
          {expectations.map((i) => (
            <div
              key={i.id}
              className="group inline-block overflow-hidden rounded-2xl shadow-md shadow-black/25 transition"
            >
              <figure className="h-40 md:h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition group-hover:scale-105"
                  src={i.image}
                />
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
