'use client'
import React from 'react'
import { ChevronDown, ChevronUp, ThumbsUp, ThumbsDown, Edit2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import ReviewCards from '../professor_review/review_cards'
import { ReviewType } from '../professor_review/reviews'

export default function ShowCollapsibleReviews({heading, reviews} : {heading: string, reviews: ReviewType[]}) {
    const [isOpen, setIsOpen] = React.useState(true)

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="bg-white rounded-lg p-6 shadow-lg"
        >
            <div className="flex items-center justify-between">
                <h2 className="text-xl text-black font-bold">{heading}</h2>
                <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0 bg-black">
                    {isOpen ? (
                    <ChevronUp className='h-4 w-4' />
                    ) : (
                    <ChevronDown className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle reviews</span>
                </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4">
                <ReviewCards showProfName={true} reviews={reviews} />
            </CollapsibleContent>
        </Collapsible>
    );
}