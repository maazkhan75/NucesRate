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
    return redirect("/login?message=No-Provider-Selected");
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: "https://nucesrate.vercel.app/auth/callback",
    },
  });

  if (data.url) {
    return redirect(data.url);
  }
  return redirect("/login?message=Cannot-Authenticate");
}

export async function submitReviewAction(
  rating: number,
  comment: string,
  prof_id: number,
  tag_names: string[]
) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "Sign-in with uni email!",
    };
  }

  if (user.email && !user.email.endsWith("@lhr.nu.edu.pk")) {
    return {
      success: false,
      message: "lhr.nu.edu.pk required",
    };
  }

  const { data, error } = await supabase.rpc("add_review", {
    p_prof_id: prof_id,
    p_comment: comment,
    p_rating: rating,
    p_student_email: user.email,
    p_tag_names: tag_names,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
      id: null,
    };
  }

  return {
    success: true,
    message: "Review submitted successfully.",
    id: data as number,
  };
}

export async function submitVoteAction(
  review_id: number,
  vote_type: "upvote" | "downvote"
) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "Sign-in with uni email!",
    };
  }

  if (user.email && !user.email.endsWith("@lhr.nu.edu.pk")) {
    return {
      success: false,
      message: "lhr.nu.edu.pk required",
    };
  }

  const { data, error } = await supabase.rpc("cast_vote", {
    input_student_email: user.email,
    input_review_id: review_id,
    input_vote_type: vote_type,
  });

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


export async function submitIsApproved(review_id: number, action: boolean) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return {
      success: false,
      message: "Sign-in with uni email!",
    };
  }
  if (user.email && !user.email.endsWith("@lhr.nu.edu.pk")) {
    return {
      success: false,
      message: "lhr.nu.edu.pk required",
    };
  }
  const { data, error } = await supabase.rpc("moderate_review", {
    p_review_id: review_id,
    p_moderator_email: user.email,
    p_isapprove: action,
  });
  if (error) {
    console.log(error);
    return {
      success: false,
      message: "Error Accepting/Rejecting Review!",
    };
  }
  return {
    success: true,
    message: "Review Accepted/Rejected Successfully.",
  };
}


export async function submitProfessorRequest(
  professor_name: string,
  dept_id: number,
  gender_type: "Male" | "Female",
  status: "pending"
) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "You need to `SignIn` to submit request!",
    };
  }

  if (user.email && !user.email.endsWith("@lhr.nu.edu.pk")) {
    return {
      success: false,
      message:
        "You need to Sign In with your university email (@campus.nu.edu.pk)",
    };
  }

  const { data, error } = await supabase.rpc("addProfessorRequest", {
    input_professor_name: professor_name,
    input_gender_type: gender_type,
    input_dept_id: dept_id,
    input_status: status,
    input_stud_email: user.email,
  });

  if (error) {
    console.log(error);
    return {
      success: false,
      message: "Error submitting professor request!",
    };
  }

  return {
    success: true,
    message: "Your `professor request` submitted successfully.",
  };
}
