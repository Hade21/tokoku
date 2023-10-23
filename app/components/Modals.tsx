import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

interface ModalsProps {
  title: string;
  desc: string;
  button?: string;
}
const Modals: React.FC<ModalsProps> = ({ title, desc, button }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          ></Transition.Child>
          <Dialog.Panel>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>{desc}</Dialog.Description>
            {button && (
              <Button type="button" variant="primary" onClick={closeModal}>
                {button}
              </Button>
            )}
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modals;
