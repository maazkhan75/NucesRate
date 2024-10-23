'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Pencil, Star } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"
import { submitReviewAction } from "@/app/actions"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import TagSelector from "./select_tags"

export const useTagSelection = (maxTags: number, p_string : string[]) => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>(p_string)

  const toggleTag = React.useCallback((tag: string) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag)
      } else if (prevTags.length < maxTags) {
        return [...prevTags, tag]
      }
      return prevTags
    })
  }, [maxTags])

  return { selectedTags, toggleTag }
}

export function AddReviewButton({ prof_id, p_rating = 0, p_comment = "", p_string=[] }: { prof_id: number, p_rating?:number, p_comment?: string , p_string?: string[]}) {
  const [rating, setRating] = React.useState(p_rating)
  const [comment, setComment] = React.useState(p_comment);
  const [isOpen, setIsOpen] = React.useState(false); // Drawer open state
  const router = useRouter();
  const [showTagsPage, setShowTagsPage] = React.useState(false);
  const { selectedTags, toggleTag } = useTagSelection(3, p_string)

  React.useEffect(() => {
    setRating(p_rating);
    setComment(p_comment);
  }, [p_rating, p_comment]);

  const handleSubmit = async () => {
    if (!rating) {
      toast.error("Please fill rating and comment!");
      return;
    }

    const { success, message, id } = await submitReviewAction(rating, comment, prof_id, selectedTags);

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
      setIsOpen(false);
      setShowTagsPage(false);
      router.refresh();
    }

    setRating(0);
    setComment("");
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        { p_comment === "" 
          ? 
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm bg-primary text-primary-foreground rounded-full p-4 flex items-center hover:bg-primary/90 transition-colors"
          >
            <Pencil className="w-4 h-4 mr-2" />
            Write a Review
          </button>
          :
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm bg-primary text-primary-foreground rounded-full p-3 flex items-center hover:bg-primary/90 transition-colors"
          >
            <Pencil className="w-4 h-4 mr-2" />
            Edit
          </button>
        }
      </DrawerTrigger>

      <DrawerContent >
        <div className="mx-auto w-full max-w-md">
        {!showTagsPage ?
          <>
            <DrawerHeader>
              <DrawerTitle>{ p_comment === "" ? "Add Review" : "Edit Review"}</DrawerTitle>
              <DrawerDescription>Share your thoughts about the professor</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-8 h-8 cursor-pointer ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>

              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review here (Optional)..."
                className="min-h-[100px]"
              />
            </div>

            <DrawerFooter>
              <Button onClick={() => setShowTagsPage(true)}>Add Tags...(Optional)</Button>
              <Button onClick={handleSubmit}>Submit Review</Button>
              <DrawerClose asChild>
                <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </>
          : 
          <TagSelector prof_id={prof_id} setShowTagsPage={setShowTagsPage} selectedTags={selectedTags} toggleTag={toggleTag} handleSubmit={handleSubmit} />
        }

        </div>
      </DrawerContent>
      </Drawer>
  );
}
