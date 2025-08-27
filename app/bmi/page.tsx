"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react"; // Import React

const BMICalculatorUI: NextPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(0.0);
  const handleCalBMI = () => {
    if (
      weight === "0" ||
      height === "0" ||
      weight.length <= 0 ||
      height.length <= 0
    ) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    setBMI(
      parseFloat(weight) /
        ((parseFloat(height) / 100) * (parseFloat(height) / 100))
    );
  };

  const handleReset = () => {
    setWeight("0");
    setHeight("0");
    setBMI(0.0);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans p-4">
      {/* Card container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">BMI Calculator</h1>
          <p className="text-gray-500 mt-1">คำนวณดัชนีมวลกาย</p>
        </div>

        {/* BMI Image */}
        <div className="flex justify-center">
          <Image
            src="/calculator.png"
            alt="BMI Chart"
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
              ป้อนน้ำหนัก (กิโลกรัม)
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
              ป้อนส่วนสูง (เซนติเมตร)
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              onClick={handleCalBMI}
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              คำนวณ BMI
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
            BMI ที่คำนวณได้:{" "}
            <span className="text-indigo-600">{bmi.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMICalculatorUI;
