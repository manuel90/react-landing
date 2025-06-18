import { useState } from "react";

import { ValsPercentange } from "@/interfaces";

export default function useCardFeed(nThumbUp: number, nThumbDown: number) {
  const [isVoting, setIsVoting] = useState(true);

  const [valsThumbs, setValsThumbs] = useState<ValsPercentange>({
    up: nThumbUp,
    down: nThumbDown,
  });

  const onVoteAgain = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVoting(true);
  };

  const getPercentage = (val: number) => {
    return (val * 100) / (valsThumbs.up + valsThumbs.down);
  };

  const percUp = Math.ceil(getPercentage(valsThumbs.up));
  const percDown = Math.floor(getPercentage(valsThumbs.down));

  return {
    isVoting,
    valsThumbs,
    percUp,
    percDown,
    onVoteAgain,
    setIsVoting,
    setValsThumbs,
  };
}
