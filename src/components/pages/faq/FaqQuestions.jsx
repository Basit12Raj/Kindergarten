import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Apple,
  PlayCircle,
  Users,
  DollarSign,
  Book,
} from "lucide-react";
import Road from "../../../assets/road.png";

const FAQItem = ({ icon: Icon, question, answer, isOpen, onClick, color }) => (
  <div
    className={`rounded-lg overflow-hidden mb-4 border ${color} ${
      isOpen ? "bg-white" : "bg-white bg-opacity-50"
    }`}
  >
    <div
      className={`flex items-center justify-between p-4 cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <Icon
          className={`mr-3 ${
            isOpen ? "text-gray-600" : color.replace("border-", "text-")
          }`}
          size={20}
        />
        <span
          className={`font-semibold ${
            isOpen ? "text-gray-800" : color.replace("border-", "text-")
          }`}
        >
          {question}
        </span>
      </div>
      {isOpen ? (
        <ChevronUp className="text-gray-600" size={20} />
      ) : (
        <ChevronDown className={color.replace("border-", "text-")} size={20} />
      )}
    </div>
    {isOpen && (
      <div className="px-4 pb-4 text-gray-600 text-sm">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

function FaqQuestions() {
  const [openIndex, setOpenIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const faqData = [
    {
      icon: GraduationCap,
      question: "What kind of curriculum do you follow?",
      answer:
        "Color categories and physical specifications of color are also associated with objects or materials based on their physical properties such as light absorption, reflection, or emission spectra. And a properties such as light absorption, reflection. Aliquam sodales justo sit amet scelerisque. Aliqua sodales justo sit amet urna auctor scelerisque. Fusce interdum leo ante, sit amet tempus enim aliquam quis. Praesent eget cursus nisi. Cras feslin is hendrerit vel nibh vitae ornar",
      color: "border-pink-400",
    },
    {
      icon: Apple,
      question: "Is there a sleep or rest time?",
      answer:
        "Yes, we provide a designated rest period for children to recharge.",
      color: "border-green-400",
    },
    {
      icon: PlayCircle,
      question: "Is outdoor play supervised?",
      answer:
        "All outdoor activities are closely supervised by our trained staff.",
      color: "border-purple-400",
    },
    {
      icon: Users,
      question: "What are the staff qualifications?",
      answer:
        "Our staff members are highly qualified with relevant degrees and certifications.",
      color: "border-orange-400",
    },
    {
      icon: DollarSign,
      question: "How are tuition and fees determined?",
      answer:
        "Tuition is based on program type and attendance frequency. We offer various payment plans.",
      color: "border-blue-400",
    },
    {
      icon: Book,
      question: "What kind of curriculum do you follow?",
      answer:
        "We follow a comprehensive curriculum that focuses on holistic child development.",
      color: "border-red-400",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 px-2 pt-24">
        <div className="col-span-2">
          <h1 className="flex justify-center text-center text-4xl text-[#56509f] font-medium pb-7">
            Generat Questions
          </h1>

          <div className="max-w-full mx-auto p-6 bg-white rounded-xl">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                {...item}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md pt-10">
            <h1 className="text-3xl font-bold text-[#56509f] text-center mb-2">
              Ask a Question
            </h1>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-red-300"></div>
            </div>
            <p className="text-center text-gray-600 mb-6">
              If you do not find the answer for your question you can submitting
              it using form below
            </p>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <textarea
                  name="question"
                  placeholder="Question *"
                  value={formData.question}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
                  required
                ></textarea>
              </div>
              <div className="mt-6 flex justify-start">
                <button
                  type="submit"
                  className="px-9 py-3 ml-3 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* gaddi */}
      <div className="relative flex mt-9">
        <img
          src={Road}
          alt="Road"
          className="w-full h-16 lg:h-24  bg-[#f1f5f9]"
        />
      </div>
    </>
  );
}

export default FaqQuestions;
