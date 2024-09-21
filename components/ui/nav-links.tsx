import { Button } from "@/components/ui/button";
import Link from "next/link";


const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/",
    label: "Portfolio",
  },
  {
    href: "/",
    label: "About me",
  },
  {
    href: "/",
    label: "Testimonials",
  },
];


function NavLinks() {
  return (
    <div className="hidden sm:block">
      <nav className="mx-6 md:flex items-center space-x-4 lg:space-x-6 hidden text-gray-900">
              {routes.map((route, i) => (
                <Button asChild variant="ghost">
                  <Link
                    key={i}
                    href={route.href}
                    className="text-sm font-medium transition duration-300 hover:text-blue-700"
                  >
                    {route.label}
                  </Link>
                </Button>
              ))}
      </nav>
    </div>
  );
}
export default NavLinks;
