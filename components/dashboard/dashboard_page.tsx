'use client'
import React from 'react'
import { ReviewType } from '@/components/professor_review/reviews'
import ShowCollapsibleReviews from './show_collapsable_reviews'

function extractStudentDetails(inputString : string) {
    const words = inputString.split(' ');

    const city = words[words.length - 1];
    const year = words[words.length - 4];
    const degreeName = words[words.length - 5];

    const studentName = words.slice(0, words.length - 5).join(' ');

    return {
        studentName,
        city,
        year,
        degreeName
    };
}

export default function DashboardStud({user_email, user_data, approvedReviews, pendingReviews} : {user_email: string, user_data: string, approvedReviews: ReviewType[], pendingReviews: ReviewType[]}) {

    const {studentName, city, year, degreeName} = extractStudentDetails(user_data);

    return (
        <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
            {<section className="bg-white text-black rounded-lg p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* <Avatar className="w-24 h-24 border-2 border-blue-500">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user?.email.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar> */}
                <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold">{studentName}</h1>
                <p className="text-gray-600">{user_email}</p>
                <p className="text-gray-600">{city}</p>
                <p className="text-gray-600">{degreeName} - {year}</p>
                </div>
            </div>
            </section>}
            
            <ShowCollapsibleReviews heading={"Accepted Reviews"} reviews={approvedReviews} />
            <ShowCollapsibleReviews heading={"Pending Reviews"} reviews={pendingReviews} />
        </div>
        </div>
    )
}