import "./main.css";
import Sidebar from "@/components/moderator/sidebar";
import { createClient } from "@/utils/supabase/client";

const Main = async () => {
  const supabase = createClient();

  const [reviewsResponse, professorsResponse, courseResponse] =
    await Promise.all([
      supabase
        .from("reviews")
        .select("*", { count: "exact" })
        .is("approved", null),
      supabase
        .from("request_professor")
        .select("*", { count: "exact" })
        .is("status", null),
      supabase
        .from("request_course")
        .select("*", { count: "exact" })
        .is("status", null),
    ]);

  if (
    reviewsResponse.error ||
    professorsResponse.error ||
    courseResponse.error
  ) {
    const errorMessage =
      reviewsResponse.error?.message ||
      professorsResponse.error?.message ||
      courseResponse.error?.message;
    return <div>Error: {errorMessage}</div>;
  }

  const pendingReviewsCount = reviewsResponse.count || 0;
  const professorRequestCount = professorsResponse.count || 0;
  const courseRequestCount = courseResponse.count || 0;

  return (
    <div className="layout">
      <Sidebar />
      <div className="container">
        <div className="Card">
          <h1>LHR</h1>
          <h2>
            <a href="moderator/pendingReviews">
              Reviews Pending: {pendingReviewsCount}
            </a>
          </h2>
          <h2>
            <a href="#">Professor Request: {professorRequestCount}</a>
          </h2>
          <h2>
            <a href="#">Courses Request: {courseRequestCount}</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
