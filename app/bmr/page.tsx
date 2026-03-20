"use client";
import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  RefreshCw,
  Flame,
  User,
  UserPlus,
  Info,
} from "lucide-react";

const BMRCalculatorUI: NextPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmr, setBMR] = useState(0.0);
  const [gender, setGender] = useState("male");

  const handleCalBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง");
      return;
    }

    if (gender === "male") {
      setBMR(66 + 13.7 * w + 5 * h - 6.8 * a);
    } else {
      setBMR(655 + 9.6 * w + 1.8 * h - 4.7 * a);
    }
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setBMR(0.0);
    setGender("male");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 selection:bg-brand-100 selection:text-brand-700">
      <div className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-xl shadow-blue-100/50 border border-blue-50 overflow-hidden">
        {/* Header Decor */}
        <div className="h-2 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600" />

        <div className="p-8 md:p-12">
          {/* Navigation */}
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            กลับสู่หน้าหลัก
          </Link>

          {/* Title Section */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                BMR Calculator
              </h1>
              <p className="text-slate-500 mt-1">อัตราการเผาผลาญพื้นฐาน</p>
            </div>
            <div className="bg-sky-50 p-4 rounded-2xl">
              <Flame className="w-8 h-8 text-sky-600" />
            </div>
          </div>

          <div className="space-y-6">
            {/* Gender Selection */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`py-4 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 font-bold ${
                  gender === "male"
                    ? "bg-sky-50 border-sky-500 text-sky-700 shadow-sm shadow-sky-100"
                    : "bg-white border-slate-100 text-slate-400 hover:bg-slate-50"
                }`}
              >
                <User className="w-5 h-5" />
                ชาย
              </button>
              <button
                type="button"
                onClick={() => setGender("female")}
                className={`py-4 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 font-bold ${
                  gender === "female"
                    ? "bg-pink-50 border-pink-500 text-pink-700 shadow-sm shadow-pink-100"
                    : "bg-white border-slate-100 text-slate-400 hover:bg-slate-50"
                }`}
              >
                <UserPlus className="w-5 h-5" />
                หญิง
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="relative">
                <label
                  htmlFor="weight"
                  className="block text-sm font-bold text-slate-700 mb-2 ml-1"
                >
                  น้ำหนัก (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  placeholder="เช่น 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-sky-500 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="height"
                  className="block text-sm font-bold text-slate-700 mb-2 ml-1"
                >
                  ส่วนสูง (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  placeholder="เช่น 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-sky-500 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="age"
                  className="block text-sm font-bold text-slate-700 mb-2 ml-1"
                >
                  อายุ (ปี)
                </label>
                <input
                  type="number"
                  id="age"
                  placeholder="เช่น 25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-sky-500 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={handleCalBMR}
                className="w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl shadow-lg shadow-sky-200 transition-all flex items-center justify-center gap-2 group"
              >
                คำนวณ BMR
                <ArrowLeft className="w-5 h-5 rotate-180 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-4 bg-white border-2 border-slate-100 text-slate-500 hover:bg-slate-50 font-bold rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                ล้างข้อมูล
              </button>
            </div>

            {/* Result Display */}
            {bmr > 0 && (
              <div className="mt-8 p-8 bg-sky-50 rounded-[2rem] border border-sky-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <span className="text-sm font-bold text-sky-600 uppercase tracking-widest">
                    การเผาผลาญพื้นฐานของคุณ
                  </span>
                  <div className="text-5xl font-black text-slate-900 my-4 tracking-tighter">
                    {Math.round(bmr).toLocaleString()}
                    <span className="text-xl font-bold text-slate-400 ml-2 italic text-nowrap">
                      kcal / วัน
                    </span>
                  </div>
                  <div className="text-slate-500 text-sm flex items-center justify-center gap-2">
                    <Info className="w-4 h-4" />
                    ค่านี้คือพลังงานที่คุณต้องใช้ในภาวะพักผ่อน
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMRCalculatorUI;
