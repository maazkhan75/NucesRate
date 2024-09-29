import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { FaArrowRight, FaStar } from "react-icons/fa";
import styles from "./professors_cards.module.css";
import Image from "next/image";
import { ProfessorsPageUrl } from "../types/professors_url_type";
import ProfNameAlert from "./professor_name_alert";
import { createClient } from "@/utils/supabase/server";
import { PaginationProfessors } from "./pagination_professors";
import Link from "next/link";

type ProfessorsArray = {
    prof_id: number,
    prof_name: string,
    average_rating: number,
    course_names: (string|null)[],
    img_src: string,
    dept_name: string
}

export default async function ProfessorsCards({page_number, url} : {page_number: number, url: ProfessorsPageUrl}) {
    const supabase = createClient();

    const { data, error } = await supabase.rpc('get_professors_by_filters', {
        input_dept_name : url.department,
        input_course_name: url.course,
        input_professor_name: url.prof_name
      }).range(page_number * 9, (page_number + 1) * 9 - 1);

    const professors = data as ProfessorsArray[];

    if (error) {
        console.log(error);
        throw Error('DB Error!');
    }

    return (
        <>
        {url.prof_name && <ProfNameAlert url={url} />}
        <div className={styles.cover}>

            <div className={styles.cards}>
                {professors.map(professor => {
                    return(
                        <Card className="border-black dark:border-white" key={professor.prof_id}>
                            <CardHeader className="flex justify-between items-center">
                                <div>
                                    <CardTitle>{professor.prof_name}</CardTitle>
                                </div>  
                                <Badge className="text-right">{professor.dept_name}</Badge>
                            </CardHeader>
                            <CardContent>
                                <div className={styles.partition}>
                                    <div  className={styles.reviews_buttons}>
                                        <Button className={styles.reviews_rating}>
                                            {Array.from({ length: Math.floor(professor.average_rating) }).map((_, index) => (
                                                <FaStar style={{margin: '0.1rem'}} key={index} color="gold" />
                                            ))}
                                            {Array.from({ length: 5 - Math.floor(professor.average_rating) }).map((_, index) => (
                                                <FaStar key={index} style={{margin: '0.1rem'}} color="gray" />
                                            ))}
                                        </Button>
                                        <Link href={`/professor/${professor.prof_id}`}>
                                        <Button>
                                            See Reviews <FaArrowRight style={{marginLeft: '0.5rem'}} />
                                        </Button>
                                        </Link>
                                    </div>
                                    <div  className={styles.image_container}>
                                        <Image className={styles.prof_image} height={150} width={100} src={professor.img_src || "/assets/imgs/female-avatar.png"} alt="Professor Image" />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <span>Courses:</span>
                                {professor.course_names.map((course) => {
                                    const abbreviation = course?.split(" ")                     
                                    .filter(word => word.length > 1)
                                    .map(word => word[0])
                                    .join("");

                                    return (
                                    <Badge key={course} className="ml-2 hover:pointer cursor-pointer">
                                        {course ? abbreviation : 'No Review'}
                                    </Badge>
                                    );
                                })}
                                </CardFooter>

                        </Card>
                    );
                })}
            </div>

            <div>
                <PaginationProfessors url={url} page_number={page_number} />
            </div>

        </div>
        </>
    );
}