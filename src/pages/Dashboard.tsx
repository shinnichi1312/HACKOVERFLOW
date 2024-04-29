import Contact from "../components/ui/Contact";
import Footer from "../components/ui/Footer";
import { HeroParallax } from "../components/ui/HeroParallax";
import Navbar1 from "../components/ui/Navbar1";
import Timeline from "../components/ui/Timeline";




export default function () {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "pictures/1 (1).jpg",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "pictures/1 (2).jpg",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "pictures/1 (3).jpg",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "pictures/1 (4).jpg",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "pictures/1 (5).jpg",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "pictures/1 (6).jpg",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "pictures/1 (7).jpg",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "pictures/1 (8).jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "pictures/1 (14).jpg",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "pictures/1 (9).jpg",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "pictures/1 (10).jpg",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "pictures/1 (11).jpg",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "pictures/1 (12).jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "pictures/1 (15).jpg",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "pictures/1 (13).jpg",
    },
  ];
  return <div className="bg-black h-full">

    <Navbar1 />
    <div className="bg-black ">
      <HeroParallax products={products} />
      <div className="md:h-[20rem] mt-5 m-2">

        <Timeline />
      </div>
    </div>
    <div className="mt-10">
      <Footer />
    </div>
    <div className="h-[25rem]">

    <Contact/>
    </div>

  </div>

}