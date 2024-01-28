import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowsDimension() {
  const [windowsDimension, setWindowsDimension] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowsDimension(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowsDimension;
}
