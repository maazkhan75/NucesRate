import React from 'react'
import { ReviewType } from '@/components/professor_review/reviews'
import { createClient } from '@/utils/supabase/server'
import DashboardStud from '@/components/dashboard/dashboard_page'
import { Navbar } from '@/components/ui/navbar'

export default async function Component() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();


  if (!user) {
    throw Error('Please Login!');
  }

  const user_data = user?.user_metadata.full_name;
  const user_email = user?.user_metadata.email;

  const { data: approvedData, error: approvedError } = await supabase.rpc('get_reviews_by_student_email', {
    input_student_email: user ? user.email : ''
  });
  
  if (approvedError) {
    console.log(approvedError);
    throw Error('Error Fetching Approved Reviews!');
  }
  
  const approvedReviews = approvedData as ReviewType[];

  const { data: pendingData, error: pendingError } = await supabase.rpc('get_disapproved_reviews_by_student_email', {
    input_student_email: user ? user.email : ''
  });
  
  if (pendingError) {
    console.log(pendingError);
    throw Error('Error Fetching Disapproved Reviews!');
  }
  
  const pendingReviews = pendingData as ReviewType[];
  
  return (
    <>
    <Navbar />
    <DashboardStud user_data={user_data} user_email={user_email} approvedReviews={approvedReviews} pendingReviews={pendingReviews} />
    </>
  )
}