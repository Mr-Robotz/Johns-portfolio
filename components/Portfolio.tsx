import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import ImageOne from "@/public/assets/Image.png";
import ImageTwo from "@/public/assets/Image-1.png";
import ImageThree from "@/public/assets/Image-2.png";
import Image from "next/image";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

const lists = [
  {
    image: ImageOne,
    alt: "Card image",
    title: "Ahus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "View In Dribble",
    icon: RxArrowTopRight,
  },
  {
    image: ImageTwo,
    alt: "Card image",
    title: "App Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "View In Dribble",
    icon: RxArrowTopRight,
  },
  {
    image: ImageThree,
    alt: "Card image",
    title: "Easy Rent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "View In Dribble",
    icon: RxArrowTopRight,
  },
];
function Porfolio() {
  return (
    <section className="py-24">
      <Container>
        <div>
          <div>
            <div className="px-10 mb-20 text-center sm:text-left flex justify-between">
              <div>
                <p className="text-sm text-gray-900 mb-5 font-bold">
                  My Skills
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold">
                  My Expertise
                </h1>
              </div>
              <Button
                size={"lg"}
                className="bg-red-400 text-red-100 hover:bg-white hover:text-red-700 hover:border-2 hover:border-red-700 transition duration-500 "
              >
                Visit My Dribble
              </Button>
            </div>
            <div className="md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 items-center sm:gap-5 flex flex-col gap-16 px-10">
              {lists.map((list, i) => (
                <div
                  key={i}
                  className=" hover:shadow-lg  transition duration-500 shadow-lg"
                >
                  <div className="mb-7 rounded-lg">
                    <Image
                      src={list.image}
                      alt={list.alt}
                      width={1110}
                      height={800}
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-900 my-3">
                      {list.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-5">
                      {list.description}
                    </p>
                    <Link href="/" className="border-b-2 border-b-blue-700 pb-2 ">
                      <span className="text-sm">{list.link}</span>
                      <list.icon size={25} className="inline-block ml-2"/>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Porfolio;
