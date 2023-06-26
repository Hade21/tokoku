import Image from "next/image";
import { HeroBanner, Layout } from "./components";

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      Main Content
    </Layout>
  );
}
