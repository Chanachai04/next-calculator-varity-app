"use client";
import type { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";

const BMRCalculatorUI: NextPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmr, setBMR] = useState(0.0);
  const [gender, setGender] = useState("");
  const handleCalBMR = () => {
    if (
      weight === "0" ||
      height === "0" ||
      age === "0" ||
      weight.length <= 0 ||
      height.length <= 0 ||
      age.length <= 0
    ) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }
    if (gender === "male") {
      setBMR(
        66 +
          13.7 * parseFloat(weight) +
          5 * parseFloat(height) -
          6.8 * parseFloat(age)
      );
    } else {
      setBMR(
        655 +
          9.6 * parseFloat(weight) +
          1.8 * parseFloat(height) -
          4.7 * parseFloat(age)
      );
    }
  };

  const handleReset = () => {
    setWeight("0");
    setHeight("0");
    setAge("0");
    setBMR(0.0);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans p-4">
      {/* Card container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">BMR Calculator</h1>
          <p className="text-gray-500 mt-1">
            คำนวณอัตราการเผาผลาญพลังงานพื้นฐาน
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/calculator.png"
            alt="BMR Chart"
            className="rounded-lg object-cover"
            width={100}
            height={100}
          />
        </div>

        {/* Input Form */}
        <form className="space-y-4">
          {/* Weight Input */}
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700"
            >
              น้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="เช่น 70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Height Input */}
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              ส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="เช่น 175"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Age Input */}
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              อายุ (ปี)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="เช่น 25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Gender Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              เพศ
            </label>
            <div className="mt-2 flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">ชาย</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">หญิง</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              onClick={handleCalBMR}
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              คำนวณ BMR
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              รีเซ็ท
            </button>
          </div>
        </form>

        {/* Result Display */}
        <div className="text-center pt-4">
          <p className="text-lg font-semibold text-gray-800">
            BMR ที่คำนวณได้: <span className="text-indigo-600">{bmr}</span>{" "}
            kcal/วัน
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMRCalculatorUI;
