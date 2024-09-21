import { Button } from "@/components/ui/button";
import { LuAlignJustify } from "react-icons/lu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

function ActionButtons() {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <LuAlignJustify size={30} />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-10 text-lg items-start w-1/2 text-black mt-10">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Portfolio</Link>
              <Link href={"/"}>About Me</Link>
              <Link href={"/"}>Testimonials</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:block">
        <Button variant="outline" className="p-5 text-blue-700 hover:bg-blue-700 border-2 border-blue-700 hover:text-blue-100 transition duration-500">
          Contact Me
        </Button>
      </div>
    </div>
  );
}
export default ActionButtons;
