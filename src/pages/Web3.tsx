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
          WEB 3
        </div>
      </motion.nav>
      <TracingBeam className="">
        <div className="">
          <FirstCompo imgSrc="https://exeedcollege.com/wp-content/uploads/2023/07/web3-scaled.jpg">
            <div className="text-2xl sm:text-4xl font-bold ">
              What is Web 3?
            </div>
            <div className="text-sm mr-28 pt-12 sm: pt-12">
              The next generation of the internet, known as Web 3.0, puts a
              focus on data ownership, user privacy, and decentralization. It
              offers a new way of thinking about the internet, one where people
              are in charge of their data and gain greater privacy protection
              rather than depending on centralized organizations like tech
              companies. The development of blockchain technology, which enables
              users to store, move, and exchange their data safely and
              transparently without the need for middlemen, is what is driving
              the shift to Web 3.0.
            </div>
          </FirstCompo>

          <SecondCompo imgSrc="https://miro.medium.com/v2/resize:fit:828/format:webp/1*ZkM9izK2vWk55-NLdZ6GlQ.jpeg">
            <div className="text-2xl sm:text-4xl font-bold ">
              Impact of Blockchain on Web3
            </div>
            <div className="text-sm mr-28 pt-12 sm:pt-12">
              Blockchain technology is important to Web 3.0 since it is one of
              the fundamental components that allow for the creation of a
              decentralized and trustworthy internet. Users are able to own
              their digital identities and have total control over their data
              thanks to blockchain technology, which provides a secure and
              transparent method for the transfer of value and data.
            </div>
          </SecondCompo>

          <FirstCompo imgSrc="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/10/Web3-the-decentralized-web-of-future-1.png">
            <div className="text-2xl sm:text-4xl font-bold ">
              Advantages of Web3
            </div>
            <div className="text-sm mr-28 pt-12 sm:pt-12">
              Users have access to more security and privacy due to Web 3.0’s
              usage of blockchain technology for data management and storage.
              This technology improves users’ security and privacy over Web 2.0.
              Decentralized data storage makes it more challenging for hackers
              to access or steal data.
              <br></br>
              <br />
              Users also have more control over their personal data and can
              decide whether to share it or sell it if they so choose.
            </div>
          </FirstCompo>

          <SecondCompo imgSrc="https://fintalent.io/wp-content/uploads/2022/08/3d-metaverse-virtual-reality-futuristic-web3-internet-avatar-augmented-reality-technology-illustration-1-min.jpg">
            <div className="text-2xl sm:text-4xl font-bold ">
              Challenges in Web 3
            </div>
            <div className="text-sm mr-28 pt-12 sm:pt-12">
              The difficulties and limitations connected with the creation and
              application of the next generation of the internet, also known as
              Web 3.0, are referred to as the challenges and limitations of Web
              3.0. Among the difficulties are:
              <br></br>
              <br />
              <li>Scalability</li>
              <li>Adoption</li>
              <li>Government Interference</li>
              <li>Security</li>
              <li>Lack of standardization</li>
              <li>Easy Exchange and use of Information</li>
            </div>
          </SecondCompo>
        </div>
      </TracingBeam>
    </div>
  );
}
