import Logo from "@/components/ui/logo";
import NavLinks from "@/components/ui/nav-links";
import SocialMediaLinks from "@/components/ui/social-icons";
import Container from "@/components/ui/container";
import Link from "next/link";
function Footer() {
  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <footer className="px-10">
          <div className="flex items-center justify-between py-2 mb-20">
            <Logo />
            <NavLinks />
            <SocialMediaLinks />
          </div>
          <div className="flex items-center justify-between py-10 text-gray-500 border-t-2 border-gray-300 mt-3 text-sm">
            <p >Developed with &#x1F496; by Abdul Wadood</p>
            <div className="flex space-x-5">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms & Services</Link>
              <Link href="/">Cookies Settings</Link>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}
export default Footer;
