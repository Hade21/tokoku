"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  reset,
  setBrand,
  setCategory,
  setColor,
  setDescription,
  setPrice,
  setStocks,
  setTitle,
  setVariant,
} from "@/store/newProductSlice";
import {
  useAddNewProduct,
  useUpdateProduct,
  useUploadImages,
} from "@/hooks/queryProductHooks";

import { Button, Dropzone, Input } from "../components";
import Modals from "../components/Modals";

const FormProduct = ({ id, type }: { id?: string; type: "add" | "update" }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [modal, setModal] = React.useState<boolean>(false);
  const [files, setFiles] = React.useState<File[]>([]);
  console.log("🚀 ~ FormProduct ~ files:", files);
  const [modalTitle, setModalTitle] = React.useState<string>("");
  const [modalDesc, setModalDesc] = React.useState<string>("");
  const name = useAppSelector((state) => state.newProduct.title);
  const desc = useAppSelector((state) => state.newProduct.description);
  const price = useAppSelector((state) => state.newProduct.price);
  const stocks = useAppSelector((state) => state.newProduct.stocks);
  const colors = useAppSelector((state) => state.newProduct.color);
  const variant = useAppSelector((state) => state.newProduct.variant);
  const category = useAppSelector((state) => state.newProduct.category);
  const brand = useAppSelector((state) => state.newProduct.brand);
  const {
    data: newProduct,
    mutate: addProduct,
    isLoading: loadingAddProduct,
    error: errorAddProduct,
    status: statusAddProduct,
  } = useAddNewProduct();
  const {
    data: updateProduct,
    mutate: update,
    isLoading: loadingUpdate,
    error: errorUpdate,
    status: statusUpdate,
  } = useUpdateProduct();
  const {
    data: imageData,
    mutate: uploadImage,
    isLoading: imageLoading,
    error: errorImage,
    status: imageStatus,
  } = useUploadImages();

  const body = {
    title: name,
    description: desc,
    price,
    category,
    brand,
    stocks,
    color: colors,
    variant,
  };

  const handleImages = () => {
    if (!id) {
      setModal(true);
      setModalTitle("Product ID not found!");
      setModalDesc("Please retry again!");
      setTimeout(() => {
        router.back();
      }, 500);
      return;
    }
    if (!files.length) {
      setModal(true);
      setModalTitle("Invalid Entry!");
      setModalDesc("Please add product images!");
      return;
    }
    console.log(files);
    const body = new FormData();
    files.forEach((image, i) => {
      body.append(image.name, image);
    });
    console.log("🚀 ~ handleImages ~ data:", body);
    uploadImage({ id, body });
  };
  const handleUpdate = () => {
    if (!id) {
      setModal(true);
      setModalTitle("Product ID not found!");
      setModalDesc("Please retry again!");
      setTimeout(() => {
        router.back();
      }, 500);
      return;
    }
    update({ id, body });
  };
  const handleAddProduct = () => {
    addProduct(body);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !desc || !price || !stocks || !colors || !variant) {
      setModal(true);
      setModalTitle("Invalid Entry!");
      setModalDesc("Please fill all the fields!");
      return;
    }
    handleImages();
    type === "add" ? handleAddProduct() : handleUpdate();
  };

  React.useEffect(() => {
    if (errorImage) {
      setModal(true);
      setTitle("Error upload image");
      console.log(errorImage);
    }
    if (errorAddProduct) {
      setModal(true);
      //  setModalTitle(errorAddProduct)
      console.log(errorAddProduct);
    }
    if (errorUpdate) {
      setModal(true);
      //  setModalTitle(errorAddProduct)
      console.log(errorUpdate);
    }
    if (imageData) {
      setModal(true);
      setModalTitle("Success!");
      setModalDesc("Images uploaded successfully!");
      console.log(imageData);
      console.log(imageStatus);
    }
    if (imageLoading) {
      setModal(true);
      setModalTitle("Uploading images");
      setModalDesc("Please wait while uploading images");
    }
    if (!imageLoading) {
      setModal(false);
    }
    if (newProduct) {
      setModal(true);
      setModalTitle("Success!");
      setModalDesc("Product added successfully!");
      dispatch(reset);
      console.log(newProduct);
      setTimeout(() => {
        router.push("/");
      }, 500);
    }
    if (updateProduct) {
      setModal(true);
      setModalTitle("Success!");
      setModalDesc("Product updated successfully!");
      dispatch(reset());
      console.log(updateProduct);
      setTimeout(() => {
        router.push(`/product/${id}`);
      }, 500);
    }
  }, [
    errorAddProduct,
    errorUpdate,
    errorImage,
    newProduct,
    updateProduct,
    imageData,
    imageStatus,
    imageLoading,
    dispatch,
    id,
    router,
  ]);

  return (
    <>
      <form
        className="flex flex-col justify-between gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-1"
        onSubmit={handleSubmit}
      >
        <Dropzone files={files} setFiles={setFiles} />
        <div className="product-detail flex flex-col gap-3 rounded-md p-4 shadow-lg">
          <h3 className="mt-2 text-lg font-bold">Basic Information</h3>
          <div className="basic-info rounded-md border border-non-photo-blue p-4">
            <div className="inputs">
              <Input
                type="text"
                name="Product Name"
                id="name"
                placeholder="Name"
                className="peer w-full rounded-md border border-non-photo-blue p-2 text-base transition-all duration-200 [appearance:textfield] placeholder:text-white focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                value={name}
                onChange={(e) => dispatch(setTitle(e.target.value))}
              />
              <label htmlFor="desc" className="relative block w-full p-2">
                <textarea
                  name="desc"
                  id="desc"
                  placeholder="Price"
                  rows={5}
                  className="peer w-full rounded-md border border-non-photo-blue p-2 text-base outline-none transition-all duration-200 [appearance:textfield] placeholder:text-transparent focus:border-2 focus:border-royal-blue [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  onChange={(e) => dispatch(setDescription(e.target.value))}
                  value={desc}
                ></textarea>
                <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
                  Description
                </p>
              </label>
            </div>
          </div>
          <h3 className="mt-2 text-lg font-bold">Price</h3>
          <div className="price-stocks rounded-md border border-non-photo-blue p-4">
            <Input
              type="number"
              name="Price"
              id="price"
              placeholder="Price"
              className="peer w-full rounded-md border border-non-photo-blue p-2 text-base transition-all duration-200 [appearance:textfield] placeholder:text-white focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={price === 0 ? "" : price}
              onChange={(e) => dispatch(setPrice(Number(e.target.value)))}
            />
            <Input
              type="number"
              name="Stocks"
              id="stocks"
              placeholder="Stocks"
              className="peer w-full rounded-md border border-non-photo-blue p-2 text-base transition-all duration-200 [appearance:textfield] placeholder:text-white focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={stocks === 0 ? "" : stocks}
              onChange={(e) => dispatch(setStocks(Number(e.target.value)))}
            />
          </div>
          <h3 className="mt-2 text-lg font-bold">Detail Product</h3>
          <div className="detail-product rounded-md border border-non-photo-blue p-4">
            <label htmlFor="category" className="relative block w-full p-2">
              <select
                name="category"
                id="category"
                className="peer w-full rounded-md border border-non-photo-blue bg-transparent p-3 text-base outline-none transition-all duration-200 [appearance:textfield] placeholder:text-transparent focus:border-2 focus:border-royal-blue [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                value={category}
                onChange={(e) => dispatch(setCategory(e.target.value))}
              >
                <option value="" disabled hidden></option>
                <option value="fashion">Fashion</option>
                <option value="electronic">Electronic</option>
                <option value="automitive">Automitive</option>
                <option value="food">Food</option>
                <option value="education">Education</option>
                <option value="gadget">Gadget</option>
                <option value="wearable">Wearable</option>
                <option value="accessories">Accessories</option>
              </select>
              <p className="absolute left-5 top-0 bg-white px-2 text-sm font-normal text-slate-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:p-0 peer-placeholder-shown:text-base ">
                Category
              </p>
            </label>
            <Input
              type="text"
              name="Brand"
              id="brand"
              placeholder="Brand"
              className="peer w-full rounded-md border border-non-photo-blue bg-transparent p-3 text-base transition-all duration-200 [appearance:textfield] placeholder:text-white focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={brand}
              onChange={(e) => dispatch(setBrand(e.target.value))}
            />
            <Input
              type="text"
              name="Variants (separate with comma)"
              id="variant"
              placeholder='Variants, e.g. "s, m, l, xl"'
              className="peer w-full rounded-md border border-non-photo-blue bg-transparent p-3 text-base transition-all duration-200 [appearance:textfield] placeholder:text-slate-500 focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={variant.join(",")}
              onChange={(e) => dispatch(setVariant(e.target.value))}
            />
            <Input
              type="text"
              name="colors (separate with comma)"
              id="colors"
              placeholder='Colors, e.g. "red, blue, green"'
              className="peer w-full rounded-md border border-non-photo-blue bg-transparent p-3 text-base transition-all duration-200 [appearance:textfield] placeholder:text-slate-500 focus:border-2 focus:border-royal-blue focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={colors.join(",")}
              onChange={(e) => dispatch(setColor(e.target.value))}
            />
          </div>
          <div className="buttons mt-4 flex w-full justify-center gap-4">
            <Button
              type="submit"
              variant="primary"
              loading={loadingAddProduct || loadingUpdate}
            >
              {type === "add" ? "Add Product" : "Save Product"}
            </Button>
            <Button type="reset" variant="danger">
              Cancel
            </Button>
          </div>
        </div>
      </form>
      <Modals
        isOpen={modal}
        setIsOpen={setModal}
        title={modalTitle}
        desc={modalDesc}
      />
    </>
  );
};

export default FormProduct;
