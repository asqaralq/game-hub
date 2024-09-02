import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { px } from "framer-motion";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='60px' />
      <text>Navbar</text>
    </HStack>
  );
};

export default Navbar;
