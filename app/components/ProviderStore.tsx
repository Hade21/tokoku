"use client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import QueryProvider from "./QueryProvider";

const ProviderStore = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <Provider store={store}>{children}</Provider>
    </QueryProvider>
  );
};

export default ProviderStore;
