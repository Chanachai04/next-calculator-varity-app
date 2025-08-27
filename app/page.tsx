import React from "react";
import { HeartPulse, Flame, Car } from "lucide-react";
import Link from "next/link";

// Reusable Calculator Card Component
interface CalculatorCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  titleColor: string;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({
  href,
  icon,
  title,
  description,
  bgColor,
  titleColor,
}) => (
  // In a real Next.js app, you'd use the <Link> component
  // For this environment, we'll stick with <a>
  <Link
    href={href}
    className="block group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white dark:bg-gray-800"
  >
    <div
      className={`flex justify-center items-center h-56 ${bgColor} dark:bg-gray-700 transition-colors duration-300`}
    >
      {icon}
    </div>
    <div className="p-6">
      <h2 className={`text-2xl font-bold mb-2 ${titleColor}`}>{title}</h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </Link>
);

const App: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
              เครื่องมือคำนวณออนไลน์
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              เลือกเครื่องมือคำนวณที่คุณต้องการใช้งาน
            </p>
          </header>

          {/* Calculator Cards Grid */}
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CalculatorCard
              href="/bmi"
              icon={
                <HeartPulse className="w-24 h-24 text-indigo-500 dark:text-indigo-400 transition-transform duration-300 group-hover:scale-110" />
              }
              title="คำนวณค่า BMI"
              description="คำนวณดัชนีมวลกาย เพื่อประเมินภาวะอ้วนหรือผอม"
              bgColor="bg-indigo-50"
              titleColor="text-indigo-600 dark:text-indigo-400"
            />

            <CalculatorCard
              href="/bmr"
              icon={
                <Flame className="w-24 h-24 text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
              }
              title="คำนวณค่า BMR"
              description="คำนวณอัตราการเผาผลาญพลังงานของร่างกายในแต่ละวัน"
              bgColor="bg-blue-50"
              titleColor="text-blue-500 dark:text-blue-400"
            />

            <CalculatorCard
              href="/carinstallment"
              icon={
                <Car className="w-24 h-24 text-red-500 dark:text-red-400 transition-transform duration-300 group-hover:scale-110" />
              }
              title="คำนวณค่างวดรถ"
              description="คำนวณค่างวดรถยนต์เบื้องต้นจากราคาและเงินดาวน์"
              bgColor="bg-red-50"
              titleColor="text-red-500 dark:text-red-400"
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
