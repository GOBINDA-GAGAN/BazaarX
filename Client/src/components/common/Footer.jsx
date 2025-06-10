import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

// Define icon map
const icons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram,
};

// Social data
const socialLinks = [
  { name: "facebook", url: "https://facebook.com" },
  { name: "twitter", url: "https://twitter.com" },
  { name: "linkedin", url: "https://linkedin.com" },
  { name: "github", url: "https://github.com" },
  { name: "instagram", url: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className=" fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-950 via-gray-800 to-gray-700 text-white shadow-2xl flex flex-col">
      <div className="flex justify-center mb-3 gap-6">
        {socialLinks.map(({ name, url }, index) => {
          const IconComponent = icons[name];
          return (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-blue-500 transform hover:scale-110 transition duration-300"
            >
              <IconComponent size={25} />
            </a>
          );
        })}
      </div>
      <p className="text-sm text-center pt-2">
        &copy; {new Date().getFullYear()} BazaarX || All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
