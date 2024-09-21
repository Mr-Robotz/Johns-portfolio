import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
function logo() {
  return (
    <div>
      <Image src={Logo} width={150} height={150} alt="logo" />
    </div>
  );
}
export default logo;
