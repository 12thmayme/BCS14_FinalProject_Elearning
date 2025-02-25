import React from "react";

const Auto = () => {
  return (
    <section>
      <div className="container">
        <div className=" overflow-hidden whitespace-nowrap mt-3 lg:mt-8 relative">
          <div className="absolute top-0 -left-5 w-[150px] lg:w-[500px] h-full z-10 bg-gradient-to-l from-transparent to-white"></div>
          <div className="absolute top-0 -right-5 w-[150px] lg:w-[500px] h-full z-10 bg-gradient-to-r from-transparent to-white"></div>
          <div className="h-20 lg:h-80 flex space-x-8 animate-[marquee_10s_linear_infinite]">
            <img
              className="object-cover"
              src="https://cybersoft.edu.vn/wp-content/uploads/2022/11/logoIcon-2-1.png"
              alt="logo"
            />
            <img
              className="object-cover"
              src="https://cybersoft.edu.vn/wp-content/uploads/2022/11/logoIcon-2-1.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auto;
