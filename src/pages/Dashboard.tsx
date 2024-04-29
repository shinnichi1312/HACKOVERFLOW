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
        "public/pictures/1 (1).jpg",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "public/pictures/1 (2).JPG",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "public/pictures/1 (3).JPG",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "public/pictures/1 (4).JPG",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "public/pictures/1 (5).JPG",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "public/pictures/1 (6).JPG",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "public/pictures/1 (7).JPG",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "public/pictures/1 (8).JPG",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "public/pictures/1 (14).JPG",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "public/pictures/1 (9).JPG",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "public/pictures/1 (10).JPG",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "public/pictures/1 (11).JPG",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "public/pictures/1 (12).JPG",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "public/pictures/1 (15).JPG",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "public/pictures/1 (13).JPG",
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