import type { NextPage } from "next";
import React from "react";

const CarInstallmentCalculatorUI: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans p-4">
      {/* Card container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Car Installment Calculator
          </h1>
          <p className="text-gray-500 mt-1">คำนวณค่างวดรถยนต์</p>
        </div>

        {/* Input Form */}
        <form className="space-y-4">
          {/* Car Price Input */}
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
              placeholder="เช่น 800000"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Down Payment Input */}
          <div>
            <label
              htmlFor="downPayment"
              className="block text-sm font-medium text-gray-700"
            >
              เงินดาวน์ (บาท)
            </label>
            <input
              type="number"
              id="downPayment"
              name="downPayment"
              placeholder="เช่น 200000"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Interest Rate Input */}
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
              placeholder="เช่น 5"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* Down Payment Percentage Radio Buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              เงินดาวน์ (%)
            </label>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="downPaymentPercentage"
                  value="15"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  defaultChecked
                />
                <span className="ml-2 text-sm text-gray-700">15%</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="downPaymentPercentage"
                  value="20"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">20%</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="downPaymentPercentage"
                  value="25"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">25%</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="downPaymentPercentage"
                  value="30"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">30%</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="downPaymentPercentage"
                  value="35"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">35%</span>
              </label>
            </div>
          </div>

          {/* Loan Term Input */}
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
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="12">12 เดือน</option>
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
              <option value="84">84 เดือน</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              คำนวณ
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              รีเซ็ท
            </button>
          </div>
        </form>

        {/* Result Display */}
        <div className="text-center pt-4">
          <p className="text-lg font-semibold text-gray-800">
            ค่างวดต่อเดือน: <span className="text-indigo-600">0.00</span> บาท
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarInstallmentCalculatorUI;
