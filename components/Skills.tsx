import Container from "@/components/ui/container";
import Image from "next/image";
import ProductChain from "@/public/assets/product-chain.png";
import CodeClose from "@/public/assets/code-close.png";
import FeatherPen from "@/public/assets/feather-pen.png";
import Tag from "@/public/assets/tag.png";


const lists = [
  {
    icon: ProductChain,
    alt: "ProductChain image",
    title: "Strategiy & Direction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: Tag,
    alt: "Tag image",
    title: "Branding & Logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: FeatherPen,
    alt: "FeatherPen image",
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: CodeClose,
    alt: "CodeClose image",
    title: "Webflow Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];
function Skills() {
  return (
    <section className="py-24">
      <Container>
        <div className="px-10 mb-20 text-center sm:text-left">
          <p className="text-sm text-gray-900 mb-5 font-bold">My Skills</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold">My Expertise</h1>
        </div>
        <div className="md:grid md:grid-cols-2 xl:grid xl:grid-cols-4 items-center gap-5 px-10">
          {lists.map((list, i) => (
            <div
              key={i}
              className="p-5 hover:border-b-4 hover:border-blue-700 hover:shadow-lg border- transition duration-500 bg-gray-50"
            >
              <div className="mb-7 shadow-md inline-block p-2 rounded-lg">
                <Image src={list.icon} alt={list.alt} width={40} height={40} />
              </div>
              <h1 className="text-xl font-bold mb-4 text-gray-900">
                {list.title}
              </h1>
              <p className="text-sm text-gray-500 mb-8">{list.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export default Skills;
