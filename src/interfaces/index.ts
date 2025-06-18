export type ThumbSelection = "up" | "down";

export type ItemFeed = {
  id: number;
  imageUrl: string;
  title: string;
  timeAgo: string;
  nameSource: string;
  excerpt: string;
  nThumbUp: number;
  nThumbDown: number;
};

export type ItemVotes = {
  nThumbUp: number;
  nThumbDown: number;
};

export type ValsPercentange = {
  up: number;
  down: number;
};
