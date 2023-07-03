import { HeroBanner, Layout, Products } from "./components";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <div className="flex items-center justify-center overflow-visible bg-slate-200 py-2 dark:bg-oxford-blue">
        <SearchBar />
      </div>
      <Products title="New Arrivals" />
      <Products title="Top Selling" />
      <Products title="Recently Search" />
    </Layout>
  );
}
