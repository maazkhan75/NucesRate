"use client";
import { Terminal } from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { ProfessorsPageUrl } from "../types/professors_url_type";
import { IoIosCloseCircle } from "react-icons/io";
import styles from "./professor_name_alert.module.css";
import { HoverCard, HoverCardContent } from "@radix-ui/react-hover-card";
import { HoverCardTrigger } from "../ui/hover-card";

export default function DeptTagAlert({ url }: { url: ProfessorsPageUrl }) {
  const router = useRouter();

  function removeDeptFilter() {
    const queryParams = new URLSearchParams();
    if (url.prof_name) queryParams.append("prof", url.prof_name);
    if (url.tag) queryParams.append("tag", url.tag);
    router.push(`/professors/0/?${queryParams.toString()}`);
  }

  function removeTagFilter() {
    const queryParams = new URLSearchParams();
    if (url.prof_name) queryParams.append("prof", url.prof_name);
    if (url.department) queryParams.append("dept", url.department);
    router.push(`/professors/0/?${queryParams.toString()}`);
  }

  function removeFilters() {
    const queryParams = new URLSearchParams();
    if (url.prof_name) queryParams.append("prof", url.prof_name);
    router.push(`/professors/0/?${queryParams.toString()}`);
  }

  if (url.department && url.tag) {
    return (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle className={styles.alert_box}>
          <span>
            Department & Tag Filter Applied for : {url.department} & {url.tag}
          </span>
          <HoverCard>
            <HoverCardTrigger>
              <IoIosCloseCircle
                onClick={removeFilters}
                className={styles.cross}
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <span className="text-xs text-muted-foreground">
                Remove Both Filter!
              </span>
            </HoverCardContent>
          </HoverCard>
        </AlertTitle>
      </Alert>
    );
  } else if (url.department) {
    return (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle className={styles.alert_box}>
          <span>Department Filter Applied for : {url.department}</span>
          <HoverCard>
            <HoverCardTrigger>
              <IoIosCloseCircle
                onClick={removeDeptFilter}
                className={styles.cross}
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <span className="text-xs text-muted-foreground">
                Remove Department Filter!
              </span>
            </HoverCardContent>
          </HoverCard>
        </AlertTitle>
      </Alert>
    );
  } else if (url.tag) {
    return (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle className={styles.alert_box}>
          <span>Tag Filter Applied for : {url.tag}</span>
          <HoverCard>
            <HoverCardTrigger>
              <IoIosCloseCircle
                onClick={removeTagFilter}
                className={styles.cross}
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <span className="text-xs text-muted-foreground">
                Remove Tag Filter!
              </span>
            </HoverCardContent>
          </HoverCard>
        </AlertTitle>
      </Alert>
    );
  }
}
