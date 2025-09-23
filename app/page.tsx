import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Herosection></Herosection>
    <Services></Services>
    <CTA></CTA>
    <Footer></Footer>
    </>
  );
}
