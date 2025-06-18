"use client";

import React from "react";

import { ThumbPercentage } from "@/components/atoms/ThumbPercentage";
import { ActionVote } from "@/components/atoms/ActionVote";

import useCardFeed from "./useCardFeed";

import styles from "./CardFeed.module.scss";
import { ButtonVote } from "../ButtonVote";

export type CardFeedProps = {
  id: number;
  imageUrl: string;
  title: string;
  timeAgo: string;
  nameSource: string;
  excerpt: string;
  nThumbUp: number;
  nThumbDown: number;
};

export const CardFeed: React.FC<CardFeedProps> = (props) => {
  const {
    id,
    imageUrl,
    title,
    timeAgo,
    nameSource,
    excerpt,
    nThumbUp,
    nThumbDown,
  } = props;

  const {
    isVoting,
    valsThumbs,
    percUp,
    percDown,
    onVoteAgain,
    setIsVoting,
    setValsThumbs,
  } = useCardFeed(nThumbUp, nThumbDown);

  return (
    <>
      <article
        className={styles.singleFeed}
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
        <div className={styles.gradient}></div>
        <div className={styles.sfContent}>
          <div className={styles.wrapTitle}>
            <span
              className={`${styles.currentRate} ${
                valsThumbs.up > valsThumbs.down
                  ? styles.thumbUp
                  : styles.thumbDown
              }`}
            >
              <i></i>
            </span>
            <h3>{title}</h3>
          </div>
          <div className={styles.wrapInformation}>
            <small>
              <b>{timeAgo}</b> in {nameSource}
            </small>
            <p>{excerpt}</p>
            <div className={`${styles.wrapVoteAction} ${styles.thankYou}`}>
              {isVoting && (
                <ActionVote
                  id={id}
                  setIsVoting={setIsVoting}
                  valsThumbs={valsThumbs}
                  setValsThumbs={setValsThumbs}
                />
              )}
              {!isVoting && (
                <>
                  <p>Thank you for voting!</p>
                  <ButtonVote onClick={onVoteAgain}>Vote again</ButtonVote>
                  <div className="clr"></div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.resultsVoting}>
          <div
            className={`${styles.barThumb} ${styles.barThumbUp}`}
            style={{
              width: percUp + "%",
            }}
          >
            <ThumbPercentage percentage={percUp} type="up" />
          </div>
          <div
            className={`${styles.barThumb} ${styles.barThumbDown}`}
            style={{
              width: percDown + "%",
            }}
          >
            <ThumbPercentage percentage={percDown} type="down" />
          </div>
        </div>
      </article>
    </>
  );
};
