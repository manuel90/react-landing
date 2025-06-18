import React from "react";
import { Container } from "react-bootstrap";

import { CardFeed } from "@/components/atoms/CardFeed";

import { ItemFeed } from "@/interfaces";

import useStoreVotesProviderHook from "@/providers/StoreVotesProvider/hook";

import styles from "./GridVotes.module.scss";

export const GridVotes = () => {
  const { feeds } = useStoreVotesProviderHook();

  return (
    <>
      <Container>
        <section className={`${styles.marginSection}`}>
          <div className={styles.containerGrid}>
            {feeds.map((feed: ItemFeed, indexFeed: number) => {
              return (
                <div key={`col_grid_vote_${indexFeed}`}>
                  <CardFeed {...feed} />
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
};
