import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "If I have questions or need assistance outside of class, can the instructor answer them?",
      answer:
        "In addition to class time, students also receive active support from Lecturers, Mentors and classmates on extremely active discussion and chat channels.",
    },
    {
      question: "What if I get into trouble and I have to drop out?",
      answer:
        "If you find yourself struggling, reach out to your instructor, mentor, or fanpage for support. We will do our best to help you stay on track and improve your learning.",
    },
    {
      question: "Can I actually get a job after completing the course?",
      answer:
        "As soon as you start studying, you will be able to participate in a learning system that helps you track your learning progress and has a clear learning path. In addition, you will also participate in a lifelong job support system. Throughout the learning process, lecturers and mentors will continuously guide and support you, helping you gain the skills and experience that employers need. Near the end of the course, you will be guided to create a CV, share interview experiences and connect with businesses on the job system.",
    },
    {
      question:
        "I don't have any experience but I really want to learn programming, how do I know if I'm suitable for it?",
      answer:
        "Don't hesitate to inbox CyberSoft's fanpage to get detailed advice on the learning path as well as career development orientation and receive unexpected incentives when registering early.",
    },
  ];
  return (
    <section>
      <div className=" mx-auto py-10 px-4 bg-[#505170] ">
        <div className="container">
          <h2 className="text-white text-[1.5rem] md:text-3xl lg:text-5xl mb-5">
            Frequently Asked Questions?
          </h2>
          {faqData.map((item, index) => (
            <div key={index} className="mb-5 bg-white rounded-xl p-5 ">
              <div
                className="flex justify-between items-center w-full text-primary  rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="font-semibold mb-3 text-black text-sm md:text-base lg:text-xl md:max-w-[630px] lg:max-w-full ">
                  {item.question}
                </h4>
                <p className="text-3xl">
                  {openIndex === index ? <BiChevronUp /> : <BiChevronDown />}
                </p>
              </div>
              {openIndex === index && <p>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
