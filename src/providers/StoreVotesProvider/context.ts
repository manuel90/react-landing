"use client";

//React and modules
import { createContext } from "react";

import { ArrayActionsType } from "@/hooks/useArrayState";
import { ItemFeed, ItemVotes } from "@/interfaces";

type StoreVotesProviderContextType = {
  storeVoteFeed: (id: number, votes: ItemVotes) => void;
  feeds: ItemFeed[];
  fnFeeds: ArrayActionsType<ItemFeed>;
};

const StoreVotesProviderContext =
  createContext<StoreVotesProviderContextType | null>(null);
export default StoreVotesProviderContext;
