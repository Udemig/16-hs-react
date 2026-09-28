import { useEffect, type FC } from "react";
import type { ICar } from "../../utils/types";
import { motion, AnimatePresence } from "motion/react";
import Images from "./images";
import Info from "./info";

interface Props {
  car: ICar;
  isOpen: boolean;
  close: () => void;
}

const Modal: FC<Props> = ({ car, isOpen, close }) => {
  // Scroll Kitleme + "ESC" ile kapatma
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black-50 backdrop-blur-sm z-20 grid place-items-center"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2, scale: 0 }}
            className="car-details-dialog-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="car-details-close-btn cursor-pointer" onClick={close}>
              X
            </button>

            <Images car={car} />

            <Info car={car} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
