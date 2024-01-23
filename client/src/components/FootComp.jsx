import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FootComp = () => {
  return (
    <Footer container className="border border-t-4 border-teal-500">
      <div className="w-full max-w-7xl mx-auto md:mx-10">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* Logo :: Reapeted */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              {/* todo: Customize gradient */}
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Shiro's
              </span>
              StoryBook
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Portfolio Site
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Project 2 Link
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/iParth08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/shwet-prakash-spd007/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* One more column */}
            <div>
              <Footer.Title title="Best Blogs" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/iParth08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/shwet-prakash-spd007/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Shiro's StoryBook"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://github.com/iParth08"
              icon={FaGithub}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/shwet-prakash-spd007/"
              icon={FaLinkedin}
              target="_blank"
            />
            <Footer.Icon href="#" icon={FaInstagram} target="_blank" />
            <Footer.Icon href="#" icon={FaTwitter} target="_blank" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FootComp;
