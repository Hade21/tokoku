"use client";
import React, { Fragment } from "react";
import { Button, CartProduct, CartProductLoading } from "@/app/components";
import { useGetCart } from "@/hooks/queryUserHooks";
import { redirect } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const CartListWrapper = () => {
  const { data, isSuccess, isLoading } = useGetCart();
  const [payment, setPayment] = React.useState("");
  console.log(data);

  if (isLoading) {
    console.log(isLoading);
    return <CartProductLoading />;
  }

  if (isSuccess && !data) {
    return redirect("/user/login");
  }

  if (data?.data.products.lenght === 0)
    return (
      <div className="flex flex-col gap-4 bg-slate-300 p-6">Cart Empty</div>
    );

  return (
    <div className="bg-slate-300 p-6">
      <div className="space-y-2">
        {data?.data.products.map((product: any) => {
          return (
            <div
              key={product._id}
              className="cursor-pointer rounded-md bg-white"
            >
              <CartProduct
                _id={product._id}
                title={product.product.title}
                color={product.color}
                img={product.product.images}
                price={product.price}
                quantity={product.count}
                variant={product.variant}
              />
            </div>
          );
        })}
        <div className="rounded-md bg-white p-2">
          <div className="mb-6 flex items-center justify-between text-penn-blue">
            <h3 className="text-xl font-bold">Metode Pembayaran</h3>
            <Listbox value={payment} onChange={setPayment}>
              <div className="relative w-1/4">
                <Listbox.Button className="relative flex w-full items-center justify-between rounded-md bg-slate-200 px-4 py-2 font-bold shadow-lg">
                  <span className="truncate">{payment}</span>
                  <span>
                    <IoIosArrowDown size={15} />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-md ring-1 ring-black/5">
                    <Listbox.Option
                      key="COD"
                      value="COD"
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-non-photo-blue text-oxford-blue"
                            : "text-oxford-blue"
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-bold" : "font-normal"
                            }`}
                          >
                            COD
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <FaCheck size={20} className="text-oxford-blue" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className="checkout flex items-center justify-between gap-6 border-t-2 border-oxford-blue pt-2">
            <h3 className="flex flex-grow justify-between text-2xl font-semibold text-royal-blue">
              <span>Total:</span>
              <span className="font-bold text-red-500">
                Rp.{data?.data.cartTotal}
              </span>
            </h3>
            <Button type="button" variant="primary" className="self-end">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListWrapper;
