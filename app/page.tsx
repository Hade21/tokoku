import { HeroBanner, Layout, Products } from "./components";
import SearchBar from "./components/SearchBar";

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
