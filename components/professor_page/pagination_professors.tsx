import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ProfessorsPageUrl } from "../types/professors_url_type";

export function PaginationProfessors({
  page_number,
  url,
}: {
  page_number: number;
  url: ProfessorsPageUrl;
}) {
  const queryParams = new URLSearchParams();
  if (url.prof_name) queryParams.append("prof", url.prof_name);
  if (url.tag) queryParams.append("tag", url.tag);
  if (url.department) queryParams.append("dept", url.department);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/professors/${page_number !== 0 ? page_number - 1 : page_number}?${queryParams.toString()}`}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`/professors/0?${queryParams.toString()}`}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`/professors/1?${queryParams.toString()}`}
            isActive
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`/professors/2?${queryParams.toString()}`}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`/professors/${page_number + 1}?${queryParams.toString()}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
