"use client";
import React from "react";
import { ReviewType } from "@/components/professor_review/reviews";
import ShowCollapsibleReviews from "./show_collapsible_reviews";

function extractStudentDetails(inputString: string) {
  const words = inputString.split(" ");

  const city = words[words.length - 1];
  const year = words[words.length - 4];
  const degreeName = words[words.length - 5];

  const studentName = words.slice(0, words.length - 5).join(" ");

  return {
    studentName,
    city,
    year,
    degreeName,
  };
}

export default function DashboardStud({
  p_isOpen = true,
  isAdmin = false,
  showStudInfo,
  showProfName,
  user_email,
  user_data,
  approvedReviews,
  pendingReviews,
}: {
  p_isOpen?: boolean;
  isAdmin?: boolean;
  showStudInfo: boolean;
  showProfName: boolean;
  user_email: string;
  user_data: string;
  approvedReviews: ReviewType[];
  pendingReviews: ReviewType[];
}) {
  const { studentName, city, year, degreeName } =
    extractStudentDetails(user_data);

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {
          <section className="bg-white text-black rounded-lg p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center sm:text-left">
                {isAdmin && (
                  <h1 className="text-2xl font-bold">Hi Moderator!</h1>
                )}
                <h1 className="text-2xl font-bold">{studentName}</h1>
                <p className="text-gray-600">{user_email}</p>
                <p className="text-gray-600">{city}</p>
                <p className="text-gray-600">
                  {degreeName} - {year}
                </p>
              </div>
            </div>
          </section>
        }

        <ShowCollapsibleReviews
          p_isOpen={p_isOpen}
          isAdmin={isAdmin}
          showStudInfo={showStudInfo}
          showProfName={showProfName}
          heading={"Accepted Reviews"}
          reviews={approvedReviews}
        />
        <ShowCollapsibleReviews
          isAdmin={isAdmin}
          showStudInfo={showStudInfo}
          showProfName={showProfName}
          heading={"Pending Reviews"}
          reviews={pendingReviews}
        />
      </div>
    </div>
  );
}
