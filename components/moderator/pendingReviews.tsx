"use client";
import "./pendingReviews.css";
import Sidebar from "@/components/moderator/sidebar";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";

const pendingReviews = ({ reviews }: any) => {
  let reviewsWithStudents = reviews.props.reviewsWithStudents;

  return (
    <div className="layout">
      <Sidebar />
      <div className="container">
        {reviewsWithStudents.map((review: any) => (
          <div className="Card" key={reviews.review_id}>
            <div className="Card-1">
              <h3>{review.stud_email}</h3>
              <button>Ban</button>
            </div>
            <div className="Card-2">
              <h3>Rating: {review.rating}</h3>
            </div>
            <h3 className="Card-2">Comment:</h3>
            <p className="Card-3">{review.comment}</p>
            <div className="Card-4">
              <button>Accept</button>
              <button>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default pendingReviews;
