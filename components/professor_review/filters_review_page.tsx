import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Import the necessary components
import { ChevronDown } from "lucide-react";

const FiltersReviewPage = ({
  selectedTag,
  setSelectedTag,
  selectedRating,
  setSelectedRating,
  distinctTags, // Accept distinct tags instead of courses
}: {
  selectedTag: string | null;
  setSelectedTag: React.Dispatch<React.SetStateAction<string | null>>;
  selectedRating: number | null;
  setSelectedRating: React.Dispatch<React.SetStateAction<number | null>>;
  distinctTags: string[]; // Updated to distinctTags
}) => {
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {/* Rating Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-muted rounded-full p-4 flex items-center space-x-2">
          <span className="text-sm">
            {selectedRating ? `${selectedRating} Star` : "All Ratings"}
          </span>
          <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Filter by Rating</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setSelectedRating(null)}>
            All Ratings
          </DropdownMenuItem>
          {[1, 2, 3, 4, 5].map((rating) => (
            <DropdownMenuItem
              key={rating}
              onClick={() => setSelectedRating(rating)}
            >
              {rating} Star
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="bg-muted rounded-full p-4 max-w-xs flex items-center space-x-2">
          <span className="text-sm">{selectedTag || "All Tags"}</span>
          <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Filter by Tags</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setSelectedTag(null)}>
            All Tags
          </DropdownMenuItem>
          {distinctTags.map((tag) => (
            <DropdownMenuItem key={tag} onClick={() => setSelectedTag(tag)}>
              {tag}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FiltersReviewPage;
