import { motion } from "framer-motion";
import { TracingBeam } from "../components/ui/traceBeam";
import FirstCompo from "../components/FirstCompo";
import SecondCompo from "../components/SecondCompo";

export default function () {
  return (
    <div className="bg-[url('https://repository-images.githubusercontent.com/214671270/23f88b80-ed18-11e9-8a21-0a636b193f08')] overflow-x-hidden w-full">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
      >
        <div className="text-3xl sm:text-5xl font-bold text-center text-white p-12">
          FULLSTACK DEVELOPMENT
        </div>
      </motion.nav>
      <TracingBeam>
        <FirstCompo imgSrc="https://www.careerguide.com/career/wp-content/uploads/2020/03/full-stack-development.gif">
          <div className="text-3xl sm:text-4xl font-bold ">
            Who Is a Full-Stack Developer?
          </div>
          <div className="text-sm mr-28 pt-12 sm:pt-12">
            A full-stack developer is a developer or engineer who can build both
            the front end and the back end of a website. The front end (the
            parts of a website a user sees and interacts with) and the back end
            (the behind-the-scenes data storage and processing) require
            different skill sets. Since full-stack developers are involved with
            all aspects of the development process, they must have expertise in
            both.
            <br></br>
            <br />A full-stack developer can work in-house or at a computer
            development company that engineers websites, software, and other
            components for other businesses.
          </div>
        </FirstCompo>

        <SecondCompo imgSrc="https://www.aceinfoway.com/blog/wp-content/uploads/2020/07/front-end-developer.jpg">
          <div className="text-3xl sm:text-4xl font-bold ">
            Front-End Development
          </div>
          <div className="text-sm mr-28 pt-12 sm:pt-12">
            In software, the user interface is what visible to the
            users/customers. This want called as front-end of the software. An
            front-end developer is responsible for the creation of visual
            elements like how the software or an app will look, interact and
            operate with the user.
          </div>
        </SecondCompo>

        <FirstCompo imgSrc="https://assets-global.website-files.com/606a802fcaa89bc357508cad/611432b386bb6d5c574f91f3_1.png">
          <div className="text-3xl sm:text-4xl font-bold ">
            Back-End Development
          </div>
          <div className="text-sm mr-28 pt-12 sm:pt-12">
            On the other hand, back-end what makes the software function well.
            The developers who work at the back-end spend a lot of time creating
            and working with databases. To develop a user-driven software, you
            need both. The full-stack developer is the one who is a pro in both
            the technical domains. It is also their responsibility to know every
            aspect of development including front-end, back-end, database
            queries, and various operating systems.
          </div>
        </FirstCompo>

        <SecondCompo imgSrc="public/pictures/1.jpg">
          <div className="text-3xl sm:text-4xl font-bold ">
            Popular Stacks for Full Stack Development
          </div>
          <div className="text-sm mr-28 pt-12 sm:pt-12">
            <li>
              <b>LAMP stack:</b> JavaScript - Linux - Apache - MySQL - PHP
            </li>
            <li>
              <b>LEMP stack:</b> JavaScript - Linux - Nginx - MySQL - PHP
            </li>
            <li>
              <b>MEAN stack:</b> JavaScript - MongoDB - Express - AngularJS -
              Node.js
            </li>
            <li>
              <b>MERN stack:</b> JavaScript - MongoDB - Express - ReactJS -
              Node.js
            </li>
            <li>
              <b>Django stack:</b> JavaScript - Python - Django - MySQL
            </li>
            <li>
              <b>Ruby on Rails:</b> JavaScript - Ruby - SQLite - Rails
            </li>
          </div>
        </SecondCompo>
      </TracingBeam>
    </div>
  );
}
