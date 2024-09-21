import Logo from "@/components/ui/logo";
import NavLinks from "@/components/ui/nav-links";
import ActionButtons from "@/components/ui/action-buttons";
import Container from "@/components/ui/container";
function Navbar() {
  return (
    <div className="border-b shadow-xl">
      <Container>
        <nav className="flex items-center justify-between px-10 py-2 ">
          <Logo />
          <NavLinks />
          <ActionButtons />
        </nav>
      </Container>
    </div>
  );
}
export default Navbar;
