const Lagos = () => {
    return (
      <div>
        <div className="bg-gradient-to-tr from-orange-400 via-red-300 to-blue-500 min-h-screen flex items-center justify-center md:p-20">
          <div className="bg-white rounded-lg shadow-2xl w-full lg:w-1/2 md:flex">
            <img
              src="https://images.unsplash.com/photo-1608241561423-d65165321829"
              className="md:w-1/3 rounded-t-lg md:rounded-t-none md:rounded-l-lg object-cover"
            />
            <div className="p-6 min-h-full flex flex-col">
              <h2 className="flex-none font-bold text-2xl md:text-xl text-gray-800 hover:text-gray-700 mb-2">
                <a href="">U.K. Subculture around The Clash</a>
              </h2>
              <p className="flex-none text-gray-600 mb-2">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
                eveniet! Atque mollitia voluptatum nemo ex molestiae iusto in
                quasi placeat rerum hic accusamus architecto, impedit, nobis quam
                officia odit doloribus.
              </p>
              <div className="mt-5 h-full flex flex-col justify-end items-end">
                <a
                  href=""
                  className="w-min text-blue-100	shadow-md rounded-md py-2 px-4 bg-blue-500 hover:bg-blue-400 hover:text-white transition duration-200"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Lagos;
  