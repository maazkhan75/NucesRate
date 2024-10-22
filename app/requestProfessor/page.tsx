"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Select from "react-select";
import Image from "next/image";
import CloseIcon from "../../public/assets/icons/close.png";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const departmentOptions = [
  { value: "computing", label: "Computing" },
  { value: "electrical", label: "Electrical Eng." },
  { value: "civil", label: "Civil Eng." },
  { value: "science_humanities", label: "Science & Humanities" },
  { value: "management", label: "Management Sciences" },
];

const campusOptions = [
  { value: "isl", label: "Islamabad" },
  { value: "lhr", label: "Lahore" },
  { value: "khi", label: "Karachi" },
  { value: "fsl", label: "Faisalabad" },
  { value: "pwr", label: "Peshawar" },
];

// Custom styles for React Select
const customSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderColor: state.isFocused ? "#4A90E2" : "rgba(255, 255, 255, 0.5)",
    borderWidth: 2,
    boxShadow: state.isFocused ? "0 0 5px #4A90E2" : "none",
    "&:hover": {
      borderColor: "#ffffff", 
    },
    color: "white",
    zIndex: state.isFocused ? 30 : 1,
  }),
  menu: (base: any) => ({
    ...base,
    backgroundColor: "rgba(0, 0, 0, 1)",
    color: "white",
    zIndex: 30,
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "rgba(0, 149, 255, 0.9)"
      : state.isFocused
        ? "rgba(255, 255, 255, 0.1)"
        : "transparent",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "white",
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "rgba(255, 255, 255, 0.6)",
  }),
};

const RequestProfessor: React.FC = () => {
  const [formData, setFormData] = useState({
    professorName: "",
    professorDepartment: "",
    professorCampus: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDepartmentChange = (selectedOption: any) => {
    setFormData({ ...formData, professorDepartment: selectedOption.value });
  };

  const handleCampusChange = (selectedOption: any) => {
    setFormData({ ...formData, professorCampus: selectedOption.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div
        className={`${outfit.className} relative flex justify-center items-center min-h-screen overflow-hidden`}
      >
        <motion.div
          className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-700 via-blue-600 to-purple-500 opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        <button
          onClick={goBack}
          className="absolute top-8 right-8"
          aria-label="Close Form"
        >
          <Image
            src={CloseIcon}
            alt="close icon"
            width={40}
            height={40}
            className="custom-icon"
          />
        </button>

        <form
          onSubmit={handleSubmit}
          className="bg-opacity-90 p-10 rounded-lg shadow-2xl w-full max-w-lg backdrop-blur-lg"
        >
          <h1
            className={`${outfit.className} text-3xl font-bold text-center mb-6 tracking-tight bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent`}
          >
            Request a Professor
          </h1>

          <div className="flex flex-col">
            <motion.input
              type="text"
              id="professorName"
              name="professorName"
              value={formData.professorName}
              onChange={handleInputChange}
              className="mt-2 mb-6 w-full  relative z-30 p-2 bg-transparent border-2 border-white/60 hover:border-white/90 focus:border-blue-500 focus:shadow-[0_0_8px_1px_rgba(74,144,226,0.75)] rounded-md text-white focus:outline-none transition duration-300"
              placeholder="Enter name"
              required
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.02 }}
            />

            <motion.div
              className="mt-2 mb-6 w-full relative z-30"
              whileHover={{ scale: 1.02 }}
            >
              <Select
                options={departmentOptions}
                styles={customSelectStyles}
                onChange={handleDepartmentChange}
                placeholder="Select department"
                isSearchable={false}
              />
            </motion.div>

            <motion.div
              className="mt-2 mb-6 w-full relative z-20"
              whileHover={{ scale: 1.02 }}
            >
              <Select
                options={campusOptions}
                styles={customSelectStyles}
                onChange={handleCampusChange}
                placeholder="Select campus"
                isSearchable={false}
              />
            </motion.div>
          </div>

          <motion.button
            type="submit"
            className="block mx-auto mt-6 w-40 text-center text-white py-2 px-1 border-2 border-white/50 rounded-full focus:outline-none focus:border-blue-500 focus:shadow-[0_0_10px_2px_rgba(74,144,226,0.75)] hover:text-black hover:border-blue-700 hover:shadow-[0_0_6px_2px_rgba(74,144,226,0.75)] hover:bg-gradient-to-r from-blue-600 to-indigo-500 active:text-black active:bg-gradient-to-l from-cyan-400 via-blue-500 to-indigo-500 active:border-blue-600 active:shadow-[0_0_10px_2px_rgba(74,144,226,0.75)] transition-all duration-300"
            whileFocus={{ scale: 1.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97, y: 2 }}
          >
            Submit Request
          </motion.button>
        </form>
      </div>
    </>
  );
};

export default RequestProfessor;
