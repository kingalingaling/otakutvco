import BlogSlider from "./BlogSlider";
import { Link } from "react-router-dom";

const BlogPosts = () => {
  return (
    <div className="bg-black/70 p-8">
      <div className="md:w-[90%] mx-auto">
        <BlogSlider />
        <Link to={"https://otakutv.co/blog/"}>
        <button className="bg-white mt-7 flex mx-auto py-3 px-5 rounded-xl text-lg font-bold duration-300 text-black hover:text-white hover:bg-black">
          View More
        </button>
      </Link>
      </div>
    </div>
  );
};

export default BlogPosts;
