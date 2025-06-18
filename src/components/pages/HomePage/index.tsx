"use client";

import { Header } from "@/components/organisms/Header";
import { GridVotes } from "@/components/organisms/GridVotes";
import { Footer } from "@/components/organisms/Footer";

import { StoreVotesProvider } from "@/providers/StoreVotesProvider";
import { VanishBanner } from "@/components/molecules/VanishBanner";

export function HomePage() {
  return (
    <>
      <StoreVotesProvider>
        <Header />
        <VanishBanner />
        <GridVotes />
        <Footer />
      </StoreVotesProvider>
    </>
  );
}
