import { FaArrowRight } from "react-icons/fa";
import highlightImage1 from "/assets/images/img1.webp";
import highlightImage2 from "/assets/images/img2.webp";
import highlightImage3 from "/assets/images/img3.webp";
import highlightImage4 from "/assets/images/img4.webp";
import highlightImage5 from "/assets/images/img5.webp";
import { Link } from "react-router-dom";

const Highlights = () => {
  return (
    <div className="p-4 md:max-w-[85%] mx-auto mt-4 flex flex-col justify-between">
      <h2 className="text-xl md:text-2xl lg:text-4xl w-full text-center my-10 font-bold">
        Highlights From Our Previous Events
      </h2>
      <div
        id="carouselExampleControls"
        className="relative"
        data-te-carousel-init
        data-te-ride="carousel"
      >
        {/* Carousel items */}
        <div className="relative w-full max-h-[450px] overflow-hidden after:clear-both after:block after:content-['']">
          {/* First item */}
          <div
            className="relative float-left -mr-[100%] max-h-[450px] w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src={highlightImage1}
              className="block w-full h-[200px] lg:h-[450px] object-cover"
              alt="highlight-1"
            />
          </div>
          {/* Second item */}
          <div
            className="relative float-left -mr-[100%] max-h-[450px] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src={highlightImage2}
              className="block w-full h-[200px] lg:h-[450px] object-cover"
              alt="highlight-2"
            />
          </div>
          {/* Third item */}
          <div
            className="relative float-left -mr-[100%] max-h-[450px] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src={highlightImage3}
              className="block w-full h-[200px] lg:h-[450px] object-cover"
              alt="highlight-3"
            />
          </div>
          {/* Fourth item */}
          <div
            className="relative float-left -mr-[100%] max-h-[450px] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src={highlightImage4}
              className="block w-full h-[200px] lg:h-[450px] object-cover"
              alt="highlight-3"
            />
          </div>
          {/* Fifth item */}
          <div
            className="relative float-left -mr-[100%] max-h-[450px] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src={highlightImage5}
              className="block w-full h-[200px] lg:h-[450px] object-cover"
              alt="highlight-3"
            />
          </div>
        </div>

        {/* Carousel controls - prev item */}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/* Carousel controls - next item */}
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
      <Link to={"https://instagram.com/otakufestivalng"} target="_blank" rel="noreferrer">
        <button
          className="bg-red-500 mt-4 flex mx-auto py-3 px-5 rounded-md text-lg font-bold duration-500 border text-white hover:text-red-500 hover:border-red-500 hover:bg-white"
        >
          View More <FaArrowRight className="ml-4 mt-1.5" />
        </button>
      </Link>
    </div>
  );
};

export default Highlights;
