'use client';
import { Terminal } from "lucide-react"

import {
  Alert,
  AlertTitle,
} from "@/components/ui/alert"
import { useRouter } from "next/navigation";
import { ProfessorsPageUrl } from "../types/professors_url_type";
import { IoIosCloseCircle } from "react-icons/io";
import styles from './professor_name_alert.module.css';
import { HoverCard, HoverCardContent } from "@radix-ui/react-hover-card";
import { HoverCardTrigger } from "../ui/hover-card";

export default function ProfNameAlert({url}: {url: ProfessorsPageUrl}) {
  const router = useRouter();

  function removeNameFilter() {
    const queryParams = new URLSearchParams();
    if (url.course) queryParams.append('course', url.course);
    if (url.campus) queryParams.append('campus', url.campus);
    if (url.department) queryParams.append('dept', url.department);
    router.push(`/professors/0/?${queryParams.toString()}`);
  }

  return (
    <Alert>
      <Terminal className="h-4 w-4"/>
      <AlertTitle className={styles.alert_box}>
        <span>All Professors of matching name : {url.prof_name}</span>
        <HoverCard>
          <HoverCardTrigger>
            <IoIosCloseCircle onClick={removeNameFilter} className={styles.cross} />
          </HoverCardTrigger>
          <HoverCardContent>
            <span  className="text-xs text-muted-foreground">Remove Name Filter!</span>
          </HoverCardContent>
        </HoverCard>
      </AlertTitle>
    </Alert>
  );
}