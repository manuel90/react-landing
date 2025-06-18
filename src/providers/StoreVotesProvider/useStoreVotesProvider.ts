"use client";

//Interfaces and types
import { ItemFeed, ItemVotes } from "@/interfaces";

import { useArrayState } from "@/hooks/useArrayState";

import initialFeeds from "./feeds.json";

const loadFeeds = (): ItemFeed[] => {
  if (typeof window === "undefined" || !window.localStorage) {
    return initialFeeds;
  }

  const storeVal = localStorage.getItem("allFeeds");
  if (storeVal) {
    return JSON.parse(storeVal) as ItemFeed[];
  }
  return initialFeeds;
};

export default function useStoreVotesProvider() {
  const allFeeds = loadFeeds();

  const [feeds, fnFeeds] = useArrayState<ItemFeed>([...allFeeds]);

  const storeVoteFeed = (id: number, votes: ItemVotes): void => {
    const feed = feeds.find((feed) => feed.id === id);
    if (feed) {
      feed.nThumbUp = votes.nThumbUp;
      feed.nThumbDown = votes.nThumbDown;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("allFeeds", JSON.stringify(feeds));
      }
    }
  };

  return {
    storeVoteFeed,
    feeds,
    fnFeeds,
  };
}
