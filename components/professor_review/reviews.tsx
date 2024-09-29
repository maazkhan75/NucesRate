import { createClient } from '@/utils/supabase/server'
import ReviewCards from './review_cards';

export type ReviewType = {
    review_id: number,
    student_email: string,
    rating: number,
    comment: string,
    course_name: string
}


export default async function Reviews({prof_id} : {prof_id: number}) {
  const supabase = createClient();
  const { data, error } = await supabase.rpc('get_reviews_by_professor', {
    prof_id: prof_id
  });

  if (error) {
    console.log(error);
    throw Error('Error Fetching Comments!');
  }

  const reviews = data as ReviewType[];

  return <ReviewCards reviews={reviews} />
}