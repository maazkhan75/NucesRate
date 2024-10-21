import { createClient } from '@/utils/supabase/server'
import ReviewCards from './review_cards';

export type ReviewType = {
    review_id: number,
    student_email: string,
    rating: number,
    comment: string,
    course_name: string,
    upvotes: number,
    downvotes: number,
    user_vote: 'downvote' | 'upvote' | null
}


export default async function Reviews({prof_id} : {prof_id: number}) {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  const { data, error } = await supabase.rpc('get_reviews_by_professor', {
    input_professor_id: prof_id,
    input_student_email: user ? user.email : ''
  });

  if (error) {
    console.log(error);
    throw Error('Error Fetching Comments!');
  }

  const reviews = data as ReviewType[];

  return <ReviewCards reviews={reviews} />
}