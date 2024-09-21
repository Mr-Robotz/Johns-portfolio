import Container from "@/components/ui/container";
import AboutMe from "@/public/assets/Aboutme.png";
import Image from "next/image";
function About() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex items-center gap-10 px-10">
          <div>
            <Image src={AboutMe} width={1627} height={1992} alt="My Photo" />
          </div>
          <div className="pl-10 mb-20 text-center sm:text-left">
            <div className="mb-10 mt-20">
              <p className="text-sm text-gray-900 mb-5 font-bold">About</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold">
                About Me
              </h1>
            </div>
            <div className="space-y-7 text-gray-500 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                varius faucibus massa sollicitudin amet augue. Nibh metus a
                semper purus mauris duis. Lorem eu neque, tristique quis duis.
                Nibh scelerisque ac adipiscing velit non nulla in amet
                pellentesque.
              </p>
              <p>
                Sit turpis pretium eget maecenas. Vestibulum dolor mattis
                consectetur eget commodo vitae. Amet pellentesque sit pulvinar
                lorem mi a, euismod risus r.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default About;
