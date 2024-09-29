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
import { CourseFilter } from "../professor_page/course_filter"
import { submitReviewAction } from "@/app/actions"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export function AddReviewButton({ prof_id }: { prof_id: number }) {
  const [rating, setRating] = React.useState(0)
  const [value, setValue] = React.useState<string | null>(null);
  const [comment, setComment] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false); // Drawer open state
  const router = useRouter();

  const handleSubmit = async () => {
    if (!rating || !value || !comment) {
      alert("Please fill out all fields!");
      return;
    }

    const { success, message } = await submitReviewAction(rating, value, comment, prof_id);

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
      setIsOpen(false);
      router.refresh();
    }

    setRating(0);
    setValue(null);
    setComment("");
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button
          onClick={() => setIsOpen(true)} // Open drawer on button click
          className="bg-primary text-primary-foreground rounded-full p-4 flex items-center hover:bg-primary/90 transition-colors"
        >
          <Pencil className="w-4 h-4 mr-2" />
          Write a Review
        </button>
      </DrawerTrigger>

      <DrawerContent >
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>Add Review</DrawerTitle>
            <DrawerDescription>Share your thoughts about the course</DrawerDescription>
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

            <div>
            <CourseFilter deptId={1} value={value} setValue={setValue} />
            </div>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review here..."
              className="min-h-[100px]"
            />
          </div>

          <DrawerFooter>
            <Button onClick={handleSubmit}>Submit Review</Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
