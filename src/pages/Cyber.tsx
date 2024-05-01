import { motion } from "framer-motion";
import { TracingBeam } from "../components/ui/traceBeam";
import FirstCompo from "../components/FirstCompo";
import SecondCompo from "../components/SecondCompo";

export default function () {
  return (
    <div className="bg-[url('https://repository-images.githubusercontent.com/214671270/23f88b80-ed18-11e9-8a21-0a636b193f08')] overflow-hidden w-full">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
      >
        <div className=" text-3xl sm:text-5xl font-bold text-center text-white p-12">
          CYBER SECURITY
        </div>
      </motion.nav>
      <TracingBeam className="">
        <div className="">
          <FirstCompo imgSrc="https://miro.medium.com/v2/resize:fit:828/format:webp/0*IA486V_rw1I8kjwX.jpg">
            <div className="text-2xl sm:text-4xl font-bold ">
              What is Cyber Security?
            </div>
            <div className="text-sm mr-28 pt-12 sm: pt-12">
              Cybersecurity is the practice of defending computers, servers,
              mobile devices, electronic systems, networks, and data from
              malicious attacks. It’s also known as information technology
              security or electronic information security. This is used by
              individuals and enterprises to protect against unauthorized access
              to data centers and other computerized systems.
              <br></br>
              <br />
              Cybersecurity is a continuously changing field, with the
              development of technologies that open up new avenues for
              cyber-attacks. To protect organizations, employees and
              individuals, organizations and services should implement
              cybersecurity tools, training, risk management approaches and
              continually update systems as technologies change and evolve.
            </div>
          </FirstCompo>

          <SecondCompo imgSrc="https://miro.medium.com/v2/resize:fit:828/format:webp/0*uIYO5iuLJRcKcZ2O.png">
            <div className="text-2xl sm:text-4xl font-bold ">
              Elements of cybersecurity
            </div>
            <div className="text-sm mr-28 pt-12 sm:pt-12">
              Ensuring cybersecurity requires the coordination of security
              efforts made throughout an information system.
              <br></br>
              <br />
              <li>Network Security</li>
              <li>ApplicationSecurity</li>
              <li>Operational Security</li>
              <li>Information Security</li>
              <li>Disaster Recovery</li>
              <li>Buisness Continuity</li>
              <li>End-User Education</li>
            </div>
          </SecondCompo>

          <FirstCompo imgSrc="https://globalcybersecuritynetwork.com/wp-content/uploads/2023/02/benefits-of-using-ai-for-cybersecurity.jpg">
            <div className="text-2xl sm:text-4xl font-bold ">
              Benefits of Cyber Security
            </div>
            <div className="text-sm mr-28 pt-12 sm:pt-12">
              Many of us benefit from Cyber Security in our daily lives without even
              realising it.
              <br></br>
              <br />
              Benefits of utilizing cybersecurity includes:
              <br />
              <br />
              <li>
                Business protection against malware, ransomware, phishing and
                social engineering. Protection for data and networks.
              </li>
              <li> Prevention of unauthorized users. </li>
              <li>Improves recovery time after a breach. </li>
              <li>Protection for end-users.</li>
              <li>
                Improved confidence in the product for both developers and
                customers.
              </li>
            </div>
          </FirstCompo>

          <SecondCompo imgSrc="https://assets-global.website-files.com/609be0ad60f16c3928f5d185/63fe02742ab46856523dd3d2_Organizational%20AppSec%20Challenges%20(1).jpg">
            <div className="text-2xl sm:text-4xl font-bold ">
              Challenges in Cyber-Security
            </div>
            <div className="text-sm mr-28 pt-12 sm:pt-12">
              Cybersecurity is continually challenged by hackers, data loss,
              privacy, risk management, and changing cybersecurity strategies.
              Nothing currently indicates that cyber-attacks will decrease.
              Moreover, with the more entry points, there are for attacks, the
              more cybersecurity is needed to secure networks and devices.
              <br></br>
              <br />
              One of the most problematic elements of cybersecurity is the
              continually evolving nature of security risks. As new technologies
              emerge, and technology is used in new or different ways, new
              avenues of attack are developed as well. 
            </div>
          </SecondCompo>
        </div>
      </TracingBeam>
    </div>
  );
}
