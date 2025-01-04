import React from "react";

const Benefit = () => {
  const data = [
    {
      desc: "Guide to effective learning skills",
    },
    {
      desc: "Weekly learning progress report",
    },
    {
      desc: "Instructor support throughout the course",
    },
    {
      desc: "Do projects to practice practical skills",
    },
  ];
  return (
    <section className=" bg-[url('./public/homeCyber/animou4.jpeg')] relative bg-cover bg-center min-h-[40vh] lg:min-h-[42vh] xl:min-h-[60vh] mb-20">
      <div className="absolute inset-0 bg-black/60 "></div>
      <div className="container">
        <div className="w-full relative mx-auto text-white px-4 py-12 text-center z-10 lg:px-10">
          <h2 className="text-white mb-8 lg:mt-10">
            STUDY PROGRAMMING AT <span>CYBERSOFT</span> YOU WILL GET
          </h2>
          <div className="w-full lg:absolute  flex justify-center mb-8 lg:bottom-[-500px] xl:bottom-[-570px] lg:mt-20">
            <img
              src="./public/homeCyber/animou.png"
              alt="Animou"
              className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center max-w-4xl">
            {data.map((item, index) => (
              <div
                key={index}
                className={`bg-black/60 col-span-1 p-4 md:p-0 md:py-4 lg:p-5 lg:max-w-[300px] border-b-4 border-primary shadow-md lg:absolute 
                    ${index === 0 ? "top-[195px] left-[70px]" : ""}
                    ${index === 1 ? "top-[195px] right-[50px]" : ""}
                    ${index === 2 ? "lg:bottom-[-300px] left-[70px]" : ""}
                    ${index === 3 ? "lg:bottom-[-300px] right-[50px]" : ""}
                    
                    `}
              >
                <p className="text-sm md:text-base  lg:text-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;