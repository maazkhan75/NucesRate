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


export default async function Reviews(props) {
  const supabase = createClient();

  // const {
  //   data: { user }
  // } = await supabase.auth.getUser();

  if(props.Status=='Approved'){
  
let { data, error } = await supabase
.rpc('get_student_reviews', {
  input_student_email:"l226567@lhr.nu.edu.pk"
})
if (error) console.error(error)
else console.log(data)

  const reviews = data as ReviewType[];

  return <ReviewCards reviews={reviews} />
}
else if(props.Status=='Pending'){
  
let { data, error } = await supabase
.rpc('get_student_pending_reviews', {
  input_student_email:"l226567@lhr.nu.edu.pk"
})
if (error) console.error(error)
else console.log(data)

  const reviews = data as ReviewType[];

  return <ReviewCards reviews={reviews} />
}
}