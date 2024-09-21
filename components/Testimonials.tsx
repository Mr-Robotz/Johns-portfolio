import Container from "@/components/ui/container";
import Stars from "@/public/assets/Stars.png";
import AvatarOne from "@/public/assets/Avatar.png";
import AvatarTwo from "@/public/assets/Avatar-1.png";
import AvatarThree from "@/public/assets/Avatar-2.png";
import Image from "next/image";

const lists = [
  {
    image: Stars,
    alt: "Rate stars images",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    avatar: AvatarOne,
    subtitle: "Dianne Russell",
    info: "Starbucks",
  },
  {
    image: Stars,
    alt: "Rate stars images",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    avatar: AvatarTwo,
    subtitle: "Kristin Watson",
    info: "Louis Vuitton",
  },
  {
    image: Stars,
    alt: "Rate stars images",
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    avatar: AvatarThree,
    subtitle: "Kathryn Murphy",
    info: "McDonald's",
  },
];
function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div>
          <div className="px-10 mb-20 text-center sm:text-left">
            <p className="text-sm text-gray-900 mb-5 font-bold">
              Clients Feedback
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold">
              Customers Testimonials
            </h1>
          </div>
          <div className="md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 items-center sm:gap-5 flex flex-col gap-16 px-10 text-gray-900">
            {lists.map((list, i) => (
              <div
                key={i}
                className=" p-5 hover:border-b-4 hover:border-blue-700 hover:shadow-lg border- transition duration-500 shadow-lg"
              >
                <div className="mb-7 rounded-lg">
                  <Image
                    src={list.image}
                    alt={list.alt}
                    width={110}
                    height={51}
                    className="py-3"
                  />
                </div>

                <p className="text-md text-gray-500 mb-5">{list.description}</p>

                <div className="flex items-center gap-5 my-7">
                  <div>
                    <Image
                      src={list.avatar}
                      alt={list.alt}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{list.subtitle}</h3>
                    <p>{list.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Testimonials;
