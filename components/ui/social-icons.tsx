import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter, FaLinkedin  } from "react-icons/fa";




function SocialIcons() {
  return (
    <div className="flex space-x-5 text-xl text-gray-900">
        <FaFacebookF />
        <RiInstagramLine />
        <FaTwitter />
        <FaLinkedin />
    </div>
  )
}
export default SocialIcons