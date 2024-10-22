import PendingReviews from "@/components/moderator/pendingReviews";
import { createClient } from "@/utils/supabase/client";

const fetchReviews = async () => {
  const supabase = createClient();

  // Fetch reviews where 'approved' is null
  let { data: reviews, error: reviewError } = await supabase
    .from("reviews")
    .select("*")
    .is("approved", null);

  if (reviewError) {
    return {
      props: {
        error: reviewError.message,
      },
    };
  }
  let reviewsWithStudents = null;
  // Fetch student emails for each review
  if (reviews)
    reviewsWithStudents = await Promise.all(
      reviews.map(async (review) => {
        let { data: student, error: studentError } = await supabase
          .from("students")
          .select("stud_email")
          .eq("stud_id", review.student_id)
          .single();

        if (studentError) {
          return { ...review, stud_email: "Unknown" };
        }
        if (student) return { ...review, stud_email: student.stud_email };
      })
    );

  return {
    props: {
      reviewsWithStudents,
    },
  };
};

const PendingReviewsList = async () => {
  const reviewsWithStudents = await fetchReviews();

  return (
    <>
      <PendingReviews reviews={reviewsWithStudents} />
    </>
  );
};

export default PendingReviewsList;
