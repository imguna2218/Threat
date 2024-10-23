"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {motion , AnimatePresence} from 'framer-motion';
const items = [
  {
    question: "What tools does your platform provide for cybersecurity professionals?",
    answer:
      "Our platform offers information gathering tools that identify potential areas of cyber attacks, empowering professionals to proactively safeguard systems.",
  },
  {
    question: "How can I get support for security issues?",
    answer:
      "We provide 24/7 contact support to assist you with any security concerns or bugs, ensuring you have help whenever you need it.",
  },
  {
    question: "What is the process for manual testing of code?",
    answer:
      "We conduct in-depth manual testing of your code to identify vulnerabilities and security flaws, enhancing your overall security posture.",
  },
  {
    question: "Do you have automated tools for bug bounty hunting?",
    answer:
      "Yes, we are developing tools to automate the bug bounty hunting process, streamlining vulnerability identification and reporting.",
  },
];




const AccordinationItem = ({question, answer}) => {
  const[isOpen, setIsOpen] = useState(false);
  return(
   
    <div className=" py-7 cursor-pointer border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
    <div className="flex items-center ">
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <Minus /> :<Plus />}
      
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
         {items.map(({question, answer}) => (
            <AccordinationItem question={question} answer={answer} key={question}/>
         ))}
        </div>
      </div>
    </div>
  )
};
