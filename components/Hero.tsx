import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import HeroImage from "@/public/assets/Group-img.png";

function HeroSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="lg:flex lg:justify-between px-10 py-2 text-center lg:text-left">
          <div className="sm:py-5 lg:py-10 mb-20">
            <p className="text-sm font-bold pb-8">Hey, I am John</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight lg:pr-10 text-gray-800">
              I create <span className="text-blue-700">product design</span> and
              brand experience
            </h1>
            <p className="text-sm text-gray-600 mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <br className="hidden sm:block" /> Suspendisse varius enim in eros
              elementum tristique.
            </p>
            <Button className="bg-blue-700 text-blue-100 hover:bg-white hover:text-blue-700 hover:border-2 hover:border-blue-700 transition duration-500">
              Get In Touch
            </Button>
          </div>
          <div>
            <Image src={HeroImage} width={918} height={731} alt="heroImage" />
          </div>
        </div>
      </Container>
    </section>
  );
}
export default HeroSection;
