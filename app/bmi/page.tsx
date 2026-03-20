"use client";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, RefreshCw, Calculator, Info } from "lucide-react";

const BMICalculatorUI: NextPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(0.0);

  const handleCalBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) {
      alert("กรุณากรอกข้อมูลน้ำหนักและส่วนสูงให้ถูกต้อง");
      return;
    }

    setBMI(w / ((h / 100) * (h / 100)));
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBMI(0.0);
  };

  const getBMICategory = (bmiValue: number) => {
    if (bmiValue === 0)
      return { label: "ยังไม่มีชื่อเรียก", color: "text-slate-400" };
    if (bmiValue < 18.5)
      return { label: "น้ำหนักน้อยกว่ามาตรฐาน", color: "text-blue-500" };
    if (bmiValue < 23)
      return { label: "น้ำหนักปกติ (สุขภาพดี)", color: "text-emerald-500" };
    if (bmiValue < 25) return { label: "น้ำหนักเกิน", color: "text-amber-500" };
    if (bmiValue < 30)
      return { label: "อ้วนระดับ 1", color: "text-orange-500" };
    return { label: "อ้วนระดับ 2 (อันตราย)", color: "text-red-500" };
  };

  const category = getBMICategory(bmi);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 selection:bg-brand-100 italic:selection:text-brand-700">
      <div className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-xl shadow-blue-100/50 border border-blue-50 overflow-hidden">
        {/* Header Decor */}
        <div className="h-2 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600" />

        <div className="p-8 md:p-12">
          {/* Navigation */}
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            กลับสู่หน้าหลัก
          </Link>

          {/* Title Section */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                BMI Calculator
              </h1>
              <p className="text-slate-500 mt-1">คำนวณดัชนีมวลกายของคุณ</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-2xl">
              <Calculator className="w-8 h-8 text-brand-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Input Side */}
            <div className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="weight"
                  className="block text-sm font-bold text-slate-700 mb-2 ml-1"
                >
                  น้ำหนักของคุณ (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  placeholder="เช่น 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-brand-500 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="height"
                  className="block text-sm font-bold text-slate-700 mb-2 ml-1"
                >
                  ส่วนสูงของคุณ (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  placeholder="เช่น 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-brand-500 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCalBMI}
                  className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl shadow-lg shadow-brand-200 transition-all flex items-center justify-center gap-2 group"
                >
                  คำนวณตอนนี้
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
            </div>

            {/* Result Display */}
            {bmi > 0 && (
              <div className="mt-8 p-8 bg-brand-50 rounded-[2rem] border border-brand-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <span className="text-sm font-bold text-brand-600 uppercase tracking-widest">
                    ผลลัพธ์ของคุณ
                  </span>
                  <div className="text-6xl font-black text-slate-900 my-4 tracking-tighter">
                    {bmi.toFixed(1)}
                  </div>
                  <div
                    className={`text-xl font-bold ${category.color} flex items-center justify-center gap-2`}
                  >
                    <Info className="w-5 h-5" />
                    {category.label}
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

export default BMICalculatorUI;
