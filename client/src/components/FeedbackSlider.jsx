import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data.json";

export default class FeedbackSlider extends Component {
  render() {
    const feedbacks = data.feedback;
    const settings = {
      dots: false,
      autoplay: true,
      draggable: true,
      infinite: true,
      arrows:false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} className="w-full md:w-[60%]">
        {feedbacks.map((feedback) => (
          <div className="" key={feedback.id}>
            <div className="bg-white rounded-lg shadow shadow-black/20 w-full max-h-48 flex flex-col md:flex-row">
              <img
                src={feedback.image}
                className="w-0 md:w-1/3 rounded-l-lg object-cover"
              />
              <div className="p-6 min-h-full flex flex-col">
                <h2 className="flex-none font-bold md:text-lg text-gray-800 hover:text-gray-700 mb-2">
                  <a href="">{feedback.heading}</a>
                </h2>
                <p className="flex-none text-gray-600 mb-2 text-sm md:text-md">
                  {feedback.subheading}
                </p>
                <p className="font-black text-red-500 text-xs md:text-md">- {feedback.author}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}
