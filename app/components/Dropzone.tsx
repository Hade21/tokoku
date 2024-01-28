"use client";
import Image from "next/image";
import React from "react";
import { useDropzone } from "react-dropzone";
import useWindowsDimension from "@/utils/setWidth";
import Button from "./Button";
import ImageSlider from "./ImageSlider";

const Dropzone = () => {
  const [files, setFiles] = React.useState<Array<{ preview: string }>>([]);
  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );
    },
  });
  const windowsDimension = useWindowsDimension();

  return (
    <>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-md border-4 border-dotted border-slate-600 p-3"
      >
        <input className="input-zone" {...getInputProps()} />
        <div className="img">
          <Image
            width={windowsDimension.width / 3}
            height={
              windowsDimension.width > 768
                ? windowsDimension.width / 4
                : windowsDimension.width / 3
            }
            loading="lazy"
            className="rounded-md"
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="placeholder"
          />
        </div>
        {isDragActive ? (
          <p className="mt-2 text-sm font-semibold">
            Release to drop files here
          </p>
        ) : (
          <p className="mt-2 text-sm font-semibold">Drop some files here, or</p>
        )}
        <Button type="button" variant="primary">
          Click to select files
        </Button>
        {files && <ImageSlider img={files} />}
      </div>
    </>
  );
};

export default Dropzone;
