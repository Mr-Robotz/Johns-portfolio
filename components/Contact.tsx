import { Button } from "./ui/button";
import Container from "./ui/container";

function Contact() {
  return (
    <section className="py-24">
      <Container>
        <div className="p-10">
          <div className="text-center text-gray-900">
            <p className="text-sm mb-5 font-bold">Get In Touch</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Contact Me
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <form action="" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="text-sm font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="rounded-md border border-blue-500 p-3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="text-sm font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="rounded-md border border-blue-500 p-3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="rounded-md border border-blue-500 p-3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="rounded-md border border-blue-500 p-3 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="topic" className="text-sm font-semibold mb-2">
                Choose a Topic
              </label>
              <input
                list="topics"
                id="topic"
                name="topic"
                placeholder="Select a topic"
                className="rounded-md border border-blue-500 p-3 focus:outline-none"
              />
              <datalist id="topics">
                <option value="Graphic Design" />
                <option value="Web Development" />
                <option value="Consultation" />
                <option value="Other" />
              </datalist>
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-semibold mb-2">Message</label>
                <textarea name="message" id="" rows={10} cols={30} className="rounded-md border border-blue-500 p-3 focus:outline-none" placeholder="Type your message here"></textarea>
            </div>
            <div className="flex items-center mt-5">
                <input type="checkbox" name="" id=""  className="mr-3 mt-1"/>
                <label htmlFor="">I accept the terms</label>
            </div>
            <div className="text-center mt-10">
                <Button className="px-10 bg-blue-700 text-blue-100 hover:bg-white hover:text-blue-700 hover:border-2 hover:border-blue-700 transition duration-500">Submit</Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
export default Contact;
