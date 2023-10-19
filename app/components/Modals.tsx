import React from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalsProps {
  title: string;
  desc: string;
  open: boolean;
}
const Modals: React.FC<ModalsProps> = ({ title, desc, open = false }) => {
  const [isOpen, setIsOpen] = React.useState(open);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Dialog onClose={closeModal}>
        <Dialog.Panel>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{desc}</Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Modals;
