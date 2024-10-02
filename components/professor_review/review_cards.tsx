'use client';
import React, { useState, useEffect, useTransition } from 'react';
import FiltersReviewPage from "./filters_review_page";
import { ReviewType } from "./reviews";
import { Star, ThumbsDown, ThumbsUp, Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { submitVoteAction } from '@/app/actions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ReviewCards({ reviews }: { reviews: ReviewType[] }) {
    const [filteredReviews, setFilteredReviews] = useState<ReviewType[]>(reviews);
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [isPending, startTransition] = useTransition();
    const [pendingVoteId, setPendingVoteId] = useState<number | null>(null);
    const [pendingVoteType, setPendingVoteType] = useState<'upvote' | 'downvote' | null>(null);
    const router = useRouter();

    const distinctCourses = Array.from(new Set(reviews.map(review => review.course_name)));

    useEffect(() => {
        let filtered = reviews;

        if (selectedCourse) {
            filtered = filtered.filter(review => review.course_name === selectedCourse);
        }

        if (selectedRating !== null) {
            filtered = filtered.filter(review => review.rating === selectedRating);
        }

        setFilteredReviews(filtered);
    }, [selectedCourse, selectedRating, reviews]);

    async function handleVote(review_id: number, vote_type: 'upvote' | 'downvote') {
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
    };

    return (
        <div className="bg-card text-card-foreground rounded-3xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Reviews <span className="text-muted-foreground">({filteredReviews.length})</span></h2>
            <FiltersReviewPage
                selectedCourse={selectedCourse}
                setSelectedCourse={setSelectedCourse}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                distinctCourses={distinctCourses}
            />
            {isPending && <div className="text-sm text-muted-foreground mt-2 mb-2">Processing your vote...</div>}
            {
                filteredReviews.map((review) => (
                    <div key={review.review_id} className="bg-muted rounded-3xl p-4 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <p className="text-sm text-muted-foreground">{review.student_email}</p>
                        </div>
                        <div className="flex mb-2">
                            {(Array.from({ length: Math.floor(review.rating) }) as number[]).map((star, index) => (
                                <Star key={index} className="w-4 h-4 fill-current text-primary" />
                            ))}
                            {(Array.from({ length: 5 - Math.floor(review.rating) }) as number[]).map((star, index) => (
                                <Star key={index} className="w-4 h-4 text-muted" />
                            ))}
                        </div>
                        <p className="text-sm mb-2">
                            {review.comment}
                        </p>    
                        <div className="flex space-x-2 mt-2 mb-2">
                            <Button
                                variant={review.user_vote === 'upvote' ? 'outline' : 'default'}
                                size="sm"
                                className="flex items-center space-x-1"
                                onClick={() => handleVote(review.review_id, 'upvote')}
                                disabled={isPending && pendingVoteId === review.review_id && pendingVoteType === 'upvote'}
                            >
                                <ThumbsUp className="w-3 h-3" />
                                {isPending && pendingVoteId === review.review_id && pendingVoteType === 'upvote' ? (
                                    <Loader2 className="w-3 h-3 animate-spin" />
                                ) : (
                                    <span>{review.upvotes}</span>
                                )}
                            </Button>
                            <Button
                                variant={review.user_vote === 'downvote' ? 'outline' : 'default'}
                                size="sm"
                               className={`flex items-center space-x-1`}
                                onClick={() => handleVote(review.review_id, 'downvote')}
                                disabled={isPending && pendingVoteId === review.review_id && pendingVoteType === 'downvote'}
                            >
                                <ThumbsDown className="w-3 h-3" />
                                {isPending && pendingVoteId === review.review_id && pendingVoteType === 'downvote' ? (
                                    <Loader2 className="w-3 h-3 animate-spin" />
                                ) : (
                                    <span>{review.downvotes}</span>
                                )}
                            </Button>
                        </div>
                        <div className="flex space-x-2">
                            <span className="bg-background text-xs px-2 py-1 rounded-full">{review.course_name}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
