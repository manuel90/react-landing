"use client";

//Context
import React from "react";
import StoreVotesProviderContext from "./context";

//Hooks
import useStoreVotesProvider from "./useStoreVotesProvider";

//Interfaces and types
export type StoreVotesProviderProps = {
  children?: React.ReactNode;
};
export const StoreVotesProvider = ({ children }: StoreVotesProviderProps) => {
  const values = useStoreVotesProvider();
  return (
    <StoreVotesProviderContext.Provider value={values}>
      {children}
    </StoreVotesProviderContext.Provider>
  );
};
