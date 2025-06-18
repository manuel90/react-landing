import { useState } from "react";

import { ThumbSelection, ValsPercentange } from "@/interfaces";

import useStoreVotesProviderHook from "@/providers/StoreVotesProvider/hook";

export default function useActionVote(
  id: number,
  setIsVoting: (isVoting: boolean) => void,
  valsThumbs: ValsPercentange,
  setValsThumbs: (itemVals: ValsPercentange) => void
) {
  const [selection, setSelection] = useState<ThumbSelection>("up");

  const { storeVoteFeed } = useStoreVotesProviderHook();

  const selectThumb = (valSelection: ThumbSelection) => {
    setSelection(valSelection);
  };

  const onVote = (e: React.MouseEvent) => {
    e.preventDefault();
    const newVals = {
      ...valsThumbs,
      ...{ [selection]: valsThumbs[selection] + 1 },
    };
    setValsThumbs(newVals);
    storeVoteFeed(id, {
      nThumbUp: newVals.up,
      nThumbDown: newVals.down,
    });
    setIsVoting(false);
  };

  return {
    selection,
    onVote,
    selectThumb,
  };
}
