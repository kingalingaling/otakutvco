import FeedbackSlider from "./FeedbackSlider";

const Feedback = () => {
  return (
    <div className="w-full bg-red-100 p-8 flex flex-col md:flex-row justify-between items-center">
      <div className="lg:max-w-[40%] mb-3 md:mb-0 md:mr-6">
        <h2 className="text-lg text-center md-text-left md:text-2xl lg:text-3xl font-bold pb-3">
          Explore the Rave Reviews for OtakuTv: Our Content Leaves Fans
          Delighted!
        </h2>
        <p className="text-sm text-justify md:text-md ">
          Delighting fans with our exceptional content and services is what we
          do best at OtakuTv. But don&apos;t just take our word for it! Read on
          to discover what our satisfied customers have to say about their
          experience with us.
        </p>
      </div>
      <FeedbackSlider />
    </div>
  );
};

export default Feedback;
