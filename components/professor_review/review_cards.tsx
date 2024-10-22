// ReviewCards.js
"use client";
import React, { useState, useEffect, useTransition } from "react";
import FiltersReviewPage from "./filters_review_page";
import { ReviewType } from "./reviews";
import { Star, ThumbsDown, ThumbsUp, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { submitVoteAction } from "@/app/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Badge } from "../ui/badge";
import { formatTagName } from "@/app/helping_functions";
import { AddReviewButton } from "./add_review_button";

export default function ReviewCards({
  reviews,
  student_email,
  prof_id,
}: {
  reviews: ReviewType[];
  student_email: string | undefined;
  prof_id: number;
}) {
  const [filteredReviews, setFilteredReviews] = useState<ReviewType[]>(reviews);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();
  const [pendingVoteId, setPendingVoteId] = useState<number | null>(null);
  const [pendingVoteType, setPendingVoteType] = useState<
    "upvote" | "downvote" | null
  >(null);
  const router = useRouter();

  // Get distinct tags from reviews
  const distinctTags = Array.from(
    new Set(reviews.flatMap((review) => review.tag_names))
  );

  useEffect(() => {
    let filtered = reviews;

    if (selectedTag) {
      filtered = filtered.filter((review) =>
        review.tag_names.includes(selectedTag)
      );
    }

    if (selectedRating !== null) {
      filtered = filtered.filter((review) => review.rating === selectedRating);
    }

    setFilteredReviews(filtered);
  }, [selectedTag, selectedRating, reviews]);

  async function handleVote(
    review_id: number,
    vote_type: "upvote" | "downvote"
  ) {
    setPendingVoteId(review_id);
    setPendingVoteType(vote_type);

    startTransition(async () => {
      const { success, message } = await submitVoteAction(review_id, vote_type);

      if (success) {
        router.refresh();
      } else {
        toast.error(message);
      }
      setPendingVoteId(null);
      setPendingVoteType(null);
    });
  }

  return (
    <div className="bg-card text-card-foreground rounded-3xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        Reviews{" "}
        <span className="text-muted-foreground">
          ({filteredReviews.length})
        </span>
      </h2>
      <FiltersReviewPage
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        distinctTags={distinctTags} // Pass distinct tags
      />
      {filteredReviews.map((review) => (
        <div key={review.review_id} className="bg-muted rounded-3xl p-4 mb-4">
          <div className="flex items-center space-x-2 mb-2 justify-between">
            <p className="text-sm text-muted-foreground">
              {review.student_email}{" "}
              <Badge className="ml-3">{review.review_status}</Badge>
            </p>
            {review.is_user_review && (
              <AddReviewButton
                prof_id={prof_id}
                p_rating={review.rating}
                p_comment={review.comment}
                p_string={review.tag_names}
              />
            )}
          </div>
          <div className="flex mb-2">
            {(
              Array.from({ length: Math.floor(review.rating) }) as number[]
            ).map((star, index) => (
              <Star key={index} className="w-4 h-4 fill-current text-primary" />
            ))}
            {(
              Array.from({ length: 5 - Math.floor(review.rating) }) as number[]
            ).map((star, index) => (
              <Star key={index} className="w-4 h-4 text-muted" />
            ))}
          </div>
          <p className="text-sm mb-2">{review.comment}</p>

          <div className="flex flex-col  sm:justify-between sm:items-center sm:flex-row">
            <div className="flex space-x-2 mt-2 mb-2">
              <Button
                variant={review.user_vote === "upvote" ? "outline" : "default"}
                size="sm"
                className="flex items-center space-x-1"
                onClick={() => handleVote(review.review_id, "upvote")}
                disabled={
                  isPending &&
                  pendingVoteId === review.review_id &&
                  pendingVoteType === "upvote"
                }
              >
                <ThumbsUp className="w-3 h-3" />
                {isPending &&
                pendingVoteId === review.review_id &&
                pendingVoteType === "upvote" ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <span>{review.upvotes}</span>
                )}
              </Button>
              <Button
                variant={
                  review.user_vote === "downvote" ? "outline" : "default"
                }
                size="sm"
                className={`flex items-center space-x-1`}
                onClick={() => handleVote(review.review_id, "downvote")}
                disabled={
                  isPending &&
                  pendingVoteId === review.review_id &&
                  pendingVoteType === "downvote"
                }
              >
                <ThumbsDown className="w-3 h-3" />
                {isPending &&
                pendingVoteId === review.review_id &&
                pendingVoteType === "downvote" ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <span>{review.downvotes}</span>
                )}
              </Button>
            </div>
            <div className="flex space-x-2">
              {review.tag_names &&
                review.tag_names.map((tag, index) => {
                  return (
                    <Badge
                      key={tag}
                      className="ml-2 h-6 hover:pointer cursor-pointer"
                    >
                      <p>{tag}</p>
                    </Badge>
                  );
                })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
