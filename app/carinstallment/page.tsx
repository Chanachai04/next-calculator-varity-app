"use client";
import type { NextPage } from "next";
import React, { useState } from "react";

const CarInstallmentCalculatorUI: NextPage = () => {
  const [carPrice, setCarPrice] = useState("");
  const [downPaymentPercent, setDownPaymentPercent] = useState(15);
  const [interestRate, setInterestRate] = useState("");
  const [loanTermMonths, setLoanTermMonths] = useState(12);
  const [monthlyInstallment, setMonthlyInstallment] = useState<number | null>(
    null
  );

  const handleReset = () => {
    setCarPrice("");
    setDownPaymentPercent(15);
    setInterestRate("");
    setLoanTermMonths(12);
    setMonthlyInstallment(null);
  };

  const handleCalCarInstallment = () => {
    const downPayment = (parseInt(carPrice) * downPaymentPercent) / 100;
    const loanAmount = parseInt(carPrice) - downPayment;
    const loanTermYears = loanTermMonths / 12;
    const totalInterest =
      loanAmount * (parseFloat(interestRate) / 100) * loanTermYears;
    const totalPayable = loanAmount + totalInterest;
    const monthly = totalPayable / loanTermMonths;

    setMonthlyInstallment(monthly);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Car Installment Calculator
          </h1>
          <p className="text-gray-500 mt-1">คำนวณค่างวดรถยนต์</p>
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="carPrice"
              className="block text-sm font-medium text-gray-700"
            >
              ราคารถยนต์ (บาท)
            </label>
            <input
              type="number"
              id="carPrice"
              name="carPrice"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              placeholder="เช่น 800000"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="interestRate"
              className="block text-sm font-medium text-gray-700"
            >
              ดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="เช่น 5"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              เงินดาวน์ (%)
            </label>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              {[15, 20, 25, 30, 35].map((percent) => (
                <label
                  key={percent}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="downPaymentPercentage"
                    value={percent}
                    checked={downPaymentPercent === percent}
                    onChange={() => setDownPaymentPercent(percent)}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{percent}%</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="loanTerm"
              className="block text-sm font-medium text-gray-700"
            >
              จำนวนเดือนที่ผ่อน
            </label>
            <select
              id="loanTerm"
              name="loanTerm"
              value={loanTermMonths}
              onChange={(e) => setLoanTermMonths(parseInt(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {[12, 24, 36, 48, 60, 72, 84].map((month) => (
                <option key={month} value={month}>
                  {month} เดือน
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              onClick={handleCalCarInstallment}
              className="w-full py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
            >
              คำนวณ
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2 px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md"
            >
              รีเซ็ท
            </button>
          </div>
        </form>

        <div className="text-center pt-4">
          <p className="text-lg font-semibold text-gray-800">
            ค่างวดต่อเดือน:{" "}
            <span className="text-indigo-600">
              {monthlyInstallment !== null
                ? monthlyInstallment.toFixed(2)
                : "0.00"}
            </span>{" "}
            บาท
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarInstallmentCalculatorUI;
