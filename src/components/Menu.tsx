import { motion } from "framer-motion";
import { MenuIcons } from "./Icons/IconsMenu";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });

    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 }}}
      className="bg-neutrals-900 w-full left-0 top-0 right-0 h-screen fixed flex flex-col justify-center px-5 py-3"
    >
      <MenuIcons.Close
        size={30}
        style={{
          color: "white",
          position: "absolute",
          top: "30px",
          right: "20px",
          cursor: "pointer",
        }}
        onClick={onClose}
      />
      <ul className="flex flex-col items-center gap-10 text-4xl uppercase font-extrabold">
        <li>
          <button onClick={() => scrollTo("contact")} className="">
            Contact
          </button>
        </li>
      </ul>
    </motion.div>
  );
};
