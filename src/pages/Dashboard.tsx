import { HeroParallax } from "../components/ui/HeroParallax";
import Navbar from "../components/ui/Navbar";
import Navbar1 from "../components/ui/Navbar1";




export default function(){
    const products = [
        {
          title: "Moonbeam",
          link: "https://gomoonbeam.com",
          thumbnail:
            "src/pictures/1 (1).jpg",
        },
        {
          title: "Cursor",
          link: "https://cursor.so",
          thumbnail:
            "src/pictures/1 (2).JPG",
        },
        {
          title: "Rogue",
          link: "https://userogue.com",
          thumbnail:
            "src/pictures/1 (3).JPG",
        },
       
        {
          title: "Editorially",
          link: "https://editorially.org",
          thumbnail:
            "src/pictures/1 (4).JPG",
        },
        {
          title: "Editrix AI",
          link: "https://editrix.ai",
          thumbnail:
            "src/pictures/1 (5).JPG",
        },
        {
          title: "Pixel Perfect",
          link: "https://app.pixelperfect.quest",
          thumbnail:
            "src/pictures/1 (6).JPG",
        },
       
        {
          title: "Algochurn",
          link: "https://algochurn.com",
          thumbnail:
            "src/pictures/1 (7).JPG",
        },
        {
          title: "Aceternity UI",
          link: "https://ui.aceternity.com",
          thumbnail:
            "src/pictures/1 (8).JPG",
        },
        {
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail:
            "src/pictures/1 (14).JPG",
        },
        {
          title: "SmartBridge",
          link: "https://smartbridgetech.com",
          thumbnail:
            "src/pictures/1 (9).JPG",
        },
        {
          title: "Renderwork Studio",
          link: "https://renderwork.studio",
          thumbnail:
            "src/pictures/1 (10).JPG",
        },
       
        {
          title: "Creme Digital",
          link: "https://cremedigital.com",
          thumbnail:
            "src/pictures/1 (11).JPG",
        },
        {
          title: "Golden Bells Academy",
          link: "https://goldenbellsacademy.com",
          thumbnail:
            "src/pictures/1 (12).JPG",
        },
        {
          title: "Invoker Labs",
          link: "https://invoker.lol",
          thumbnail:
            "src/pictures/1 (15).JPG",
        },
        {
          title: "E Free Invoice",
          link: "https://efreeinvoice.com",
          thumbnail:
            "src/pictures/1 (13).JPG",
        },
      ];
    return <div className="bg-black h-screen">
            {/* <Navbar/> */}
            <Navbar1/>
            <div className="h-min-screen">
            <HeroParallax products={products}/>
             </div>
             <div>
                
             </div>
    </div>
    
}