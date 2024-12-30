"use client";

import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";

interface Feedback {
  name: string;
  username: string;
  feedback: string;
  avatar: string;
}

const feedbacks: Feedback[] = [
  {
    name: "Alex Johnson",
    username: "@alexdev",
    feedback:
      "Base Packer solves every issue I had with sharing templates. This is a game-changer! Highly recommend it to anyone working on shared starter projects.",
    avatar:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  },
  {
    name: "Taylor Smith",
    username: "@taycodes",
    feedback:
      "Amazing tool! Perfect for bootstrapping projects and discovering starter packages. Love how simple it is to use. It speeds up development time drastically!",
    avatar:
      "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  },
  {
    name: "Chris Doe",
    username: "@chrisdev",
    feedback:
      "Loved the filtering feature! Makes finding the right templates super quick. However, it could use more customization options.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Sophia Rivera",
    username: "@sophiadev",
    feedback:
      "Effortless and intuitive! GitHub integration makes template sharing so smooth. It has simplified my workflow significantly.",
    avatar:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Michael Brown",
    username: "@mikebrown",
    feedback:
      "A lifesaver for teams managing starter templates and shared resources. The interface is clean, and it's very easy to collaborate with my team.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
  },
  {
    name: "Jordan Lee",
    username: "@jordanlee",
    feedback:
      "This is my favorite way to share starter templates with my dev team! It's quick, efficient, and very well integrated into GitHub. Great work!",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Emma Wilson",
    username: "@emmaw",
    feedback:
      "Base Packer has been an essential tool for us. It really helps to organize resources and get them in a shareable format for our project team.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHByb2ZpbGUlMjBwaWN0dXJlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "David Moore",
    username: "@davidm",
    feedback:
      "Great tool! Highly recommend. It's so easy to use and has saved me a lot of time.",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689531953275-a5cfcc458931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
  },
];

const UserFeedback = () => {
  return (
    <section className="px-[5rem] bg-black text-white">
      <div className="text-center mb-12">
        <div className="text-center relative  flex flex-col">
          <span className="bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text leading-none tracking-tighter text-transparent text-[2.5rem]   animate-fade-in py-[1rem] [--animation-delay:200ms] font-poppins font-[600] w-full">
            What people are saying
          </span>
        </div>

        <p className="text-gray-400">
          Thousands of developers and teams love Base Packer.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {feedbacks.map((feedback, index) => (
          <MagicCard
            key={index}
            className="cursor-pointer flex-col w-[20rem]  p-6 bg-black text-white shadow-2xl rounded-lg  transition-transform duration-300"
          >
            {/* Feedback Text with Line Clamping */}
            <p className="text-[1.04rem]  text-white/60 line-clamp-3 ">
              {feedback.feedback}
            </p>

            <div className="flex items-center space-x-4 mt-4">
              {/* Avatar */}
              <Image
                width={100}
                height={100}
                src={feedback.avatar}
                alt={feedback.name}
                className="object-cover !m-0 !p-0 object-top rounded-full h-[2.5rem] w-[2.5rem] border-2  group-hover:z-30 border-white/40 shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] relative transition duration-500  "
              />

              <div className="text-center sm:text-left">
                {/* User Name */}
                <h3 className=" text-[.98rem] text-white/50">
                  {feedback.name}
                </h3>

                {/* Username with opacity */}
                <p className="text-gray-400 text-[.8rem] opacity-70">
                  {feedback.username}
                </p>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </section>
  );
};

export default UserFeedback;
