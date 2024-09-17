CREATE TABLE Departments (
    dept_id int2 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    dept_name varchar NOT NULL
);

CREATE TABLE Campuses (
    campus_id int2 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    campus_name varchar NOT NULL
);

CREATE TABLE Students (
    stud_id int4 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    stud_email varchar UNIQUE NOT NULL,
    stud_name varchar NOT NULL,
    stud_dept_id int2 REFERENCES Departments(dept_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    stud_campus_id int2 REFERENCES Campuses(campus_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE Professors (
    prof_id int2 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    prof_name varchar NOT NULL,
    prof_designation varchar,
    prof_dept_id int2 REFERENCES Departments(dept_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    prof_campus_id int2 REFERENCES Campuses(campus_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE Courses (
    course_id int2 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    course_name varchar NOT NULL,
    course_description text,
    course_dept_id int2 REFERENCES Departments(dept_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE Professor_Courses (
    prof_course_id int4 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    prof_id int2 REFERENCES Professors(prof_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    course_id int2 REFERENCES Courses(course_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TYPE material_type_enum AS ENUM ('Course Outline', 'Assignment', 'Quiz', 'Midterm Paper', 'Final Paper', 'Other');

CREATE TABLE Material_Types (
    material_type_id int2 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    material_type_name material_type_enum NOT NULL
);

CREATE TABLE Course_Materials (
    material_id int4 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    course_id int2 REFERENCES Courses(course_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    material_type_id int2 REFERENCES Material_Types(material_type_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    material_link text NOT NULL,
    description text
);

CREATE TABLE Reviews (
    review_id int4 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    rating int CHECK (rating >= 1 AND rating <= 5),
    comment text,
    approved boolean DEFAULT false,
    student_id int2 REFERENCES Students(stud_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    professor_course_id int2 REFERENCES Professor_Courses(prof_course_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    date_submitted timestamp DEFAULT current_timestamp
);

CREATE TYPE vote_type_enum AS ENUM ('upvote', 'downvote');

CREATE TABLE Votes (
    vote_id int4 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    review_id int4 REFERENCES Reviews(review_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    stud_id int2 REFERENCES Students(stud_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    vote_type vote_type_enum NOT NULL,
    UNIQUE (stud_id, review_id)
);

CREATE TABLE Moderators (
    moderator_id int2 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    moderator_name varchar NOT NULL,
    moderator_email varchar UNIQUE NOT NULL,
    moderator_password varchar NOT NULL
);

CREATE TYPE action_type_enum AS ENUM ('approved','rejected');

CREATE TABLE Moderation_Actions (
    action_id int4 PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
    review_id int4 REFERENCES Reviews(review_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    moderator_id int2 REFERENCES Moderators(moderator_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    action_taken action_type_enum NOT NULL,
    action_timestamp timestamp DEFAULT current_timestamp
);
