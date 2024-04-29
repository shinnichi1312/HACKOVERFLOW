import Timer from "./Timer";
import { TypewriterEffect } from "./Typewriter";


export default function () {

    const words = [
        {
            text: "Register",
            className: "text-white"
        },
        {
            text: "Here",
            className: "text-white"

        },
        {
            text: "For",
            className: "text-white"

        },
        {
            text: "HackOverflow 2.0",
            className: "text-purple-500 dark:text-purple-500",
        },
    ];
    return (
        <div className="flex flex-col items-center h-[25rem] ">
            <p className="text-neutral-300 dark:text-neutral-200 text-base text-xl mb-5">
                <div className="flex justify-center text-2xl md:text-5xl font-bold">
                    Registration closes in 

                </div>
                <div className="flex justify-center text-2xl md:text-2xl font-bold m-4">
                    <Timer/>
                </div>
            </p>
            <TypewriterEffect className="text-white" words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                <a href="https://rns-hackoverflow-2.devfolio.co/" target="_blank"> <button className="w-48 h-20 rounded-xl bg-purple-400 border dark:border-white border-transparent text-white font-bold text-xl">
                    Here!
                </button></a>

            </div>
        </div>
    );
}