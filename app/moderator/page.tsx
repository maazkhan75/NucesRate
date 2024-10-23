import React from 'react'
import { ReviewType } from '@/components/professor_review/reviews'
import { createClient } from '@/utils/supabase/server'
import DashboardStud from '@/components/dashboard/dashboard_page'
import { Navbar } from '@/components/ui/navbar'
import { redirect } from "next/navigation";

export default async function Component() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    console.log('Not Signed In!');
    return redirect("/dashboard");
  }

  const { data, error } = await supabase.rpc('is_moderator', {
    email : user.email
  });
  if (error) {
    console.log(error);
    throw Error("DB while verification!")
  }

  if (!data) {
    console.log('Not Moderator!');
    return redirect("/dashboard");
  }

  const user_data = user?.user_metadata.full_name;
  const user_email = user?.user_metadata.email;

  const { data: approvedData, error: approvedError } = await supabase.rpc('get_all_accepted_reviews', {});
  
  if (approvedError) {
    console.log(approvedError);
    throw Error('Error Fetching Approved Reviews!');
  }
  
  const approvedReviews = approvedData as ReviewType[];

  const { data: pendingData, error: pendingError } = await supabase.rpc('get_all_pending_reviews', {
  });
  
  if (pendingError) {
    console.log(pendingError);
    throw Error('Error Fetching Disapproved Reviews!');
  }
  
  const pendingReviews = pendingData as ReviewType[];
  
  return (
    <>
    <Navbar />
    <DashboardStud  p_isOpen={false}  isAdmin={true} showStudInfo={true} showProfName={true} user_data={user_data} user_email={user_email} approvedReviews={approvedReviews} pendingReviews={pendingReviews} />
    </>
  )
}