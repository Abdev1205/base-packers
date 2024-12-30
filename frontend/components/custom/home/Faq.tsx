"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiMinus } from "react-icons/ti";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is Base Packer?",
    answer:
      "Base Packer is a community-driven platform that allows users to share and discover starter packages and templates for various tech stacks.",
  },
  {
    question: "How can I contribute a template to Base Packer?",
    answer:
      "You can contribute by linking your GitHub repository. We fetch details like title, description, and README automatically to make the process seamless.",
  },
  {
    question: "Can I use Base Packer templates for any tech stack?",
    answer:
      "Yes, Base Packer supports a wide range of tech stacks. You can filter templates by the tech stack you're using to easily find relevant options.",
  },
  {
    question: "Can I star templates to show my favorites?",
    answer:
      "Yes, you can star your favorite templates to quickly access them later and share them with others in the community.",
  },
  {
    question: "Is there a way to track popular templates on Base Packer?",
    answer:
      "Yes, you can filter templates by popularity and view the most starred and downloaded packages in your preferred tech stack.",
  },
  {
    question: "Will there be a blog section for learning and troubleshooting?",
    answer:
      "Yes, we plan to add a blog section where users can share experiences, error solutions, and tips related to tech stacks and templates.",
  },
  {
    question: "Can I use Base Packer for personal and team projects?",
    answer:
      "Absolutely! Base Packer is designed for both individual and collaborative projects. You can freely explore, contribute, and share with your team.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-[6rem]  flex flex-col gap-[1rem] ">
      <div className="text-center mb-12">
        <div className="text-center relative  flex flex-col">
          <span className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text leading-none tracking-tighter text-transparent text-[2.5rem]   animate-fade-in py-[1rem] [--animation-delay:200ms] font-poppins font-[600] w-full">
            FAQ
          </span>
        </div>

        <p className="text-gray-400">Got other questions? Contact us</p>
      </div>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="rounded-[.8rem] shadow-sm py-[.5rem] bg-neutral-900 "
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center px-4 py-3 text-white  focus:outline-none"
          >
            {/* Icon on the left */}
            <span
              className={`mr-4 flex h-6 w-6 items-center justify-center rounded-full border-[1px] ${
                openIndex === index
                  ? "border-[#008cff] text-[#008cff]"
                  : "border-gray-400 text-gray-400"
              }`}
            >
              {openIndex === index ? <TiMinus /> : "+"}
            </span>
            {/* Question on the right */}
            <span className="flex-1 text-white/60 font-[500] text-left">
              {item.question}
            </span>
          </button>

          {/* Animated Answer Section */}
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 py-3 text-white/40 font-[400] font-openSans text-[.97rem]  pl-[1.3rem]">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
