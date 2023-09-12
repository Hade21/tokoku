"use client";
import { HeroBanner, Layout, Products } from "./components";

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <Products title="New Arrivals" />
      <Products title="Top Selling" />
      <Products title="Popular" />
    </Layout>
  );
}
