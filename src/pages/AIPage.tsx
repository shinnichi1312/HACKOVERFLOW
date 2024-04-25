import { motion } from "framer-motion";
import { TracingBeam } from "../components/ui/traceBeam";
import FirstCompo from "../components/FirstCompo";
import SecondCompo from "../components/SecondCompo";



export default function () {
    return <div className="bg-[url('https://repository-images.githubusercontent.com/214671270/23f88b80-ed18-11e9-8a21-0a636b193f08')] w-fi">
        <motion.nav
            initial={{ opacity:0}}
            animate={{ opacity:1 }}
            transition={{ ease: "easeOut", duration: 3 }}
        >

            <div className=" text-3xl sm:text-5xl font-bold text-center text-white p-12">
                ARTIFICIAL INTELLIGENCE
            </div>
        </motion.nav>
        <TracingBeam className="">
            <div className="">
            <FirstCompo imgSrc="https://wallpapercave.com/wp/wp2316798.jpg">
            <div className="text-3xl sm:text-4xl font-bold ">
                    What is AI?
                </div>
                <div className="text-sm mr-28 pt-12 sm: pt-12">
                    Artificial intelligence, or AI, is technology that enables computers and machines to simulate human intelligence and problem-solving capabilities.
                    <br></br>
                    <br />
                    Artificial intelligence has gone through many cycles of hype, but even to skeptics, the release of ChatGPT seems to mark a turning point. The last time generative AI loomed this large, the breakthroughs were in computer vision, but now the leap forward is in natural language processing (NLP). Today, generative AI can learn and synthesize not just human language but other data types including images, video, software code, and even molecular structures.
                </div>
            </FirstCompo>

            <SecondCompo imgSrc="https://static01.nyt.com/images/2023/04/02/business/02Altman-cover-illo/02Altman-cover-illo-videoSixteenByNine3000.jpg">
            <div className="text-3xl sm:text-4xl font-bold ">
                    Who invented AI? 
                </div>
                <div className="text-sm mr-28 pt-12 sm:pt-12">
                    One of the first ever AI programs was created by American Arthur Samuel, who created a draughts playing computer AI program which was taught how to play the game in 1952. His work came off the back of decades of theories and ideas, perhaps the most prominent coming from iconic British mathematician Alan Turing and his leading paper ‘Computing Machinery and Intelligence’ which offered the famous Turing Test as a philosophical concept on the use of AI.
                </div>
            </SecondCompo>

            <FirstCompo imgSrc="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/11/10/Pictures/ai-artificial-intelligence-and-financial-technology_405769b0-e4e3-11e8-b876-ee7dab6cad6d.jpg">
            <div className="text-3xl sm:text-4xl font-bold ">
                    Importance of AI
                </div>
                <div className="text-sm mr-28 pt-12 sm:pt-12">
                    Many of us benefit from AI in our daily lives without even realising it.
                    <br></br>
                    <br />
                    Artificial intelligence has gone through many cycles of hype, but even to skeptics, the release of ChatGPT seems to mark a turning point. The last time generative AI loomed this large, the breakthroughs were in computer vision, but now the leap forward is in natural language processing (NLP). Today, generative AI can learn and synthesize not just human language but other data types including images, video, software code, and even molecular structures.
                </div>
            </FirstCompo>

            <SecondCompo imgSrc="https://itchronicles.com/wp-content/uploads/2020/11/AI-subpage-4-Feature.png">
            <div className="text-3xl sm:text-4xl font-bold ">
                    How can I use AI?
                </div>
                <div className="text-sm mr-28 pt-12 sm:pt-12">
                    AI comes in different forms and has become widely available in everyday life. The smart speakers on your mantle with Alexa or Google voice assistant built-in are two great examples of AI. Other good examples include popular AI chatbots, such as ChatGPT, the new Bing Chat, and Google Bard.
                    <br></br>
                    <br />
                    When you ask ChatGPT for the capital of a country, or you ask Alexa to give you an update on the weather, the responses come from machine-learning asmorithms.
                </div>
            </SecondCompo>
            </div>
            
        </TracingBeam>

    </div>

}