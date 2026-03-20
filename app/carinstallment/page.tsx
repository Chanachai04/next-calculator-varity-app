"use client";
import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  RefreshCw,
  Car,
  ChevronDown,
  CheckCircle2,
  Wallet,
} from "lucide-react";

const CarInstallmentCalculatorUI: NextPage = () => {
  const [carPrice, setCarPrice] = useState("");
  const [downPaymentPercent, setDownPaymentPercent] = useState(15);
  const [interestRate, setInterestRate] = useState("");
  const [loanTermMonths, setLoanTermMonths] = useState(12);
  const [monthlyInstallment, setMonthlyInstallment] = useState<number | null>(
    null,
  );

  const handleReset = () => {
    setCarPrice("");
    setDownPaymentPercent(15);
    setInterestRate("");
    setLoanTermMonths(12);
    setMonthlyInstallment(null);
  };

  const handleCalCarInstallment = () => {
    const parsedCarPrice = parseFloat(carPrice);
    const parsedInterestRate = parseFloat(interestRate);

    if (
      isNaN(parsedCarPrice) ||
      parsedCarPrice <= 0 ||
      isNaN(parsedInterestRate) ||
      parsedInterestRate < 0
    ) {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
      return;
    }

    const downPayment = (parsedCarPrice * downPaymentPercent) / 100;
    const loanAmount = parsedCarPrice - downPayment;
    const loanTermYears = loanTermMonths / 12;
    const totalInterest =
      loanAmount * (parsedInterestRate / 100) * loanTermYears;
    const totalPayable = loanAmount + totalInterest;
    const monthly = totalPayable / loanTermMonths;

    setMonthlyInstallment(monthly);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 selection:bg-brand-100 selection:text-brand-700">
      <div className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-xl shadow-blue-100/50 border border-blue-50 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600" />

        <div className="p-8 md:p-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            กลับสู่หน้าหลัก
          </Link>

          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                Car Installment
              </h1>
              <p className="text-slate-500 mt-1">วางแผนผ่อนรถยนต์ของคุณ</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600">
              <Car className="w-8 h-8" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  ราคารถยนต์ (บาท)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={carPrice}
                    onChange={(e) => setCarPrice(e.target.value)}
                    placeholder="เช่น 800000"
                    className="w-full pl-5 pr-12 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                  <Wallet className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  ดอกเบี้ยคงที่ต่อปี (%)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="เช่น 3.5"
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">
                  เงินดาวน์ (%)
                </label>
                <div className="flex flex-wrap gap-2">
                  {[15, 20, 25, 30, 35].map((percent) => (
                    <button
                      key={percent}
                      onClick={() => setDownPaymentPercent(percent)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border-2 ${
                        downPaymentPercent === percent
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100"
                          : "bg-white border-slate-100 text-slate-500 hover:border-indigo-200 hover:text-indigo-500"
                      }`}
                    >
                      {percent}%
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  ระยะเวลาผ่อน (เดือน)
                </label>
                <div className="relative">
                  <select
                    value={loanTermMonths}
                    onChange={(e) =>
                      setLoanTermMonths(parseInt(e.target.value))
                    }
                    className="w-full h-[60px] appearance-none pl-5 pr-12 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all font-medium text-slate-800"
                  >
                    {[12, 24, 36, 48, 60, 72, 84].map((month) => (
                      <option key={month} value={month}>
                        {month} เดือน ({month / 12} ปี)
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex-grow p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 mb-6 flex flex-col justify-center text-center">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">
                  ค่างวดประมาณการ
                </span>
                <div className="text-5xl font-black text-slate-900 tracking-tighter mb-2">
                  {monthlyInstallment !== null
                    ? monthlyInstallment.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : "0.00"}
                </div>
                <div className="text-lg font-bold text-indigo-500 italic">
                  บาท / เดือน
                </div>

                {monthlyInstallment !== null && (
                  <div className="mt-8 pt-8 border-t border-indigo-200/50 space-y-3 text-left">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">เงินดาวน์:</span>
                      <span className="font-bold text-slate-700">
                        {(
                          (parseFloat(carPrice) * downPaymentPercent) /
                          100
                        ).toLocaleString()}{" "}
                        ฿
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">ยอดจัดไฟแนนซ์:</span>
                      <span className="font-bold text-slate-700">
                        {(
                          (parseFloat(carPrice) * (100 - downPaymentPercent)) /
                          100
                        ).toLocaleString()}{" "}
                        ฿
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCalCarInstallment}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2 group"
                >
                  <CheckCircle2 className="w-5 h-5 transition-transform group-hover:scale-110" />
                  คำนวณค่างวด
                </button>
                <button
                  onClick={handleReset}
                  className="w-full py-4 bg-white border-2 border-slate-100 text-slate-500 hover:bg-slate-50 font-bold rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  ล้างข้อมูล
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInstallmentCalculatorUI;
