import { useContext } from "react";

//Providers
import StoreVotesProviderContext from "./context";

export default function useStoreVotesProviderHook() {
  const context = useContext(StoreVotesProviderContext);
  if (!context) {
    throw new Error(
      "useStoreVotesProviderHook must be used within an StoreVotesProvider"
    );
  }
  return context;
}
