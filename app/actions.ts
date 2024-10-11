"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Provider } from "@supabase/supabase-js";

export const signOutAction = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/professors/0");
};

export async function googleAuthSignIn(provider: Provider) {
  const supabase = createClient();
  if (!provider) {
      return redirect('/login?message=No-Provider-Selected');
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: 'https://nucesrate.vercel.app/0/professors'
    },
  })

  if (data.url) {
    return redirect(data.url)
  }
  return redirect('/login?message=Cannot-Authenticate');
}

export async function submitReviewAction(rating: number, selectedCourse: string | null, comment: string, prof_id: number) {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "Sign-in with uni email!",
    };
  }

  if (user.email && !user.email.endsWith('@lhr.nu.edu.pk')) {
    return {
      success: false,
      message: "lhr.nu.edu.pk required",
    };
  }

  const { data, error } = await supabase.rpc('add_review', {
    p_prof_id: prof_id,
    p_comment: comment,
    p_rating: rating,
    p_course_name: selectedCourse,
    p_student_email: user.email
  });

  if (error) {
    console.log(error);
    return {
      success: false,
      message: "Error Adding Review!",
    };
  }

  return {
    success: true,
    message: "Review submitted successfully.",
  };
}


export async function submitVoteAction(review_id: number, vote_type: 'upvote' | 'downvote') {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "Sign-in with uni email!",
    };
  }

  if (user.email && !user.email.endsWith('@lhr.nu.edu.pk')) {
    return {
      success: false,
      message: "lhr.nu.edu.pk required",
    };
  }  

  const { data, error } = await supabase.rpc('cast_vote', {
    input_student_email: user.email,
    input_review_id: review_id,
    input_vote_type: vote_type
  });

  console.log(data, error);

  if (error) {
    console.log(error);
    return {
      success: false,
      message: "Error Adding Like/Dislike!",
    };
  }

  return {
    success: true,
    message: "Like/Dislike submitted successfully.",
  };
}