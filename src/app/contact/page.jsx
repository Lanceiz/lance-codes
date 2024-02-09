"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const ContactPage = () => {

  const text = "Say Hello";

  const form = useRef();

  function sendEmail() {
    var email = 'atuls.90601@gmail.com';
    var subject = 'Message Subject';
    var body = 'Message Body';
    var mailtoLink = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    window.location.href = mailtoLink;
  }


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              😊 
          </div>

              <iframe
                style={{ border: "none" }}
                width="65%"
                height="65%"
                src="https://rive.app/s/0J_t-NMwDUCc6ONJ7kShFw/embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Atul,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message" placeholder="Enter your message here"
          />
          <span>From:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
            placeholder="Enter your mail here"
          />
          <span>Regards</span>
          <Link href="mailto:atuls.90601@gmail.com">
            <button className="bg-purple-300 hover:bg-purple-200 hover:text-gray-600 rounded font-semibold text-gray-800 p-4 transition duration-300 ease-in-out">
              Send Email
            </button>
          </Link>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
