import Image from "next/image";
import { HeartIcon } from "lucide-react";
import { LogoImage } from "@/public/assetsManager";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

export default function Footer() {
  const SocialMediaData = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhay-mishra-9669711b5/",
      icon: <FaLinkedin className="h-5 w-5 " />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Abdev1205",
      icon: <FaGithub className="h-5 w-5 " />,
    },

    {
      name: "email",
      url: "mailto:abhaym1205@gmail.com",
      icon: <MdMail className="h-[1.4rem] w-[1.4rem] " />,
    },
    {
      name: "portfolio",
      url: "https://abhaymishra.in",
      icon: <FaGlobe className="h-[1.2rem] w-[1.2rem] " />,
    },
  ];

  return (
    <footer className=" border-t border-neutral-800 bg-black text-white py-8 px-[5rem] mt-[6rem] flex flex-col ">
      <div className="flex justify-between items-center">
        {/* Left Section - Logo and Tagline */}
        <div className="flex flex-col gap-[.5rem] w-[30rem]  ">
          <div className="  flex items-center gap-[.5rem] ">
            <Image src={LogoImage} alt="logo" className=" w-[2.5rem] " />
            <h2 className=" text-white/80 font-poppins font-[400] text-[1.4rem] ">
              Base Packers
            </h2>
          </div>
          <p className="text-sm text-white/50 text-center md:text-left">
            A community-driven platform to explore, share, and discover starter
            packages and templates tailored for various tech stacks. Empowering
            developers to kickstart projects effortlessly with curated
            resources.
          </p>

          {/* Social Media Icons  */}
          <div>
            <div className="flex items-center gap-[.5rem] ">
              {SocialMediaData.map((data, index) => (
                <Link
                  key={index}
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition duration-200"
                >
                  {data.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* right - Navigation Links */}
        <div className="flex justify-center gap-[4rem] ">
          <div className=" flex flex-col gap-[.8rem] ">
            <h3 className="text-md text-white/80 hover:text-white transition duration-200">
              Links
            </h3>

            <Link
              href="/"
              className="  text-sm text-white/50 hover:text-white transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/templates"
              className="  text-sm text-white/50 hover:text-white transition duration-200"
            >
              Templates
            </Link>

            <Link
              href="/contribute"
              className="  text-sm text-white/50 hover:text-white transition duration-200"
            >
              Contribute
            </Link>

            <Link
              href="/blogs"
              className="  text-sm text-white/50 hover:text-white transition duration-200"
            >
              Blogs
            </Link>
          </div>

          <div className=" flex flex-col gap-[.8rem] ">
            <h3 className="text-md text-white/80 hover:text-white transition duration-200">
              Connect us
            </h3>

            <Link
              href="/about"
              className="  text-sm text-white/50 hover:text-white transition duration-200"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="  text-sm text-white/50 hover:text-white transition duration-200"
            >
              Contact
            </Link>

            <Link
              href="/privacy"
              className="  text-sm text-white/50 hover:text-white transition duration-200"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="  text-sm text-white/50 hover:text-white transition duration-200"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-fit mx-auto ">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-1 text-[.88rem] text-white/50">
            <span>Developed by</span>
            <Link
              href={"https://abhaymishra.in"}
              target="_blank"
              className="font-[500] font-poppins text-white"
            >
              Abhay Mishra
            </Link>
            <FaHeart
              className=" text-[1.2rem] text-red-500 animate-glow"
              style={{
                color: "red",
              }}
            />
          </div>
          <Link href={"/"} className="text-[.8rem] text-white/30 ">
            © {new Date().getFullYear()} Base Packer. All rights reserved.
          </Link>
        </div>
      </div>
    </footer>
  );
}
