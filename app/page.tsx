import React from "react";
import { HeartPulse, Flame, Car, Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";

// Reusable Calculator Card Component
interface CalculatorCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({
  href,
  icon,
  title,
  description,
  gradient,
  iconColor,
}) => (
  <Link
    href={href}
    className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-blue-50/50"
  >
    {/* Background Gradient Decoration */}
    <div
      className={`absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150 ${gradient}`}
    />

    <div className="relative z-10">
      <div
        className={`mb-6 inline-flex rounded-2xl p-4 ${gradient} bg-opacity-10 text-brand-600 transition-transform duration-300 group-hover:scale-110 shadow-sm`}
      >
        {React.isValidElement(icon)
          ? React.cloneElement(
              icon as React.ReactElement<{ className?: string }>,
              {
                className: `w-10 h-10 ${iconColor}`,
              },
            )
          : icon}
      </div>

      <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-800 group-hover:text-brand-600 transition-colors">
        {title}
      </h2>

      <p className="mb-6 text-slate-500 leading-relaxed">{description}</p>

      <div className="flex items-center text-sm font-semibold text-brand-500 group-hover:text-brand-600">
        เปิดใช้งาน{" "}
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-100 selection:text-brand-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white pb-24 pt-16 sm:pt-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-slate-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-27d73a49b4d1"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-slate-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-27d73a49b4d1)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-600 ring-1 ring-slate-200 hover:ring-slate-300 transition-all flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
                DTI-SAU Universal Calculator 2025
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              เครื่องมือคำนวณ <span className="text-brand-600">อัจฉริยะ</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              รวบรวมเครื่องมือคำนวณที่จำเป็นสำหรับคุณ ใช้งานง่าย รวดเร็ว
              และแม่นยำ รองรับการทำงานในทุกอุปกรณ์
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-24 -mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CalculatorCard
            href="/bmi"
            icon={<HeartPulse />}
            title="คำนวณค่า BMI"
            description="คำนวณดัชนีมวลกาย เพื่อประเมินสภาวะทางสุขภาพและเป้าหมายในการรักษาหุ่นของคุณ"
            gradient="bg-blue-500"
            iconColor="text-blue-600"
          />

          <CalculatorCard
            href="/bmr"
            icon={<Flame />}
            title="คำนวณค่า BMR"
            description="คำนวณอัตราการเผาผลาญพลังงานพื้นฐานต่อวัน เพื่อวางแผนการรับประทานอาหารที่เหมาะสม"
            gradient="bg-sky-500"
            iconColor="text-sky-600"
          />

          <CalculatorCard
            href="/carinstallment"
            icon={<Car />}
            title="คำนวณค่างวดรถ"
            description="วางแผนทางการเงินสำหรับการซื้อรถยนต์ในฝัน คำนวณค่างวด ดอกเบี้ย และเงินดาวน์ได้ทันที"
            gradient="bg-indigo-500"
            iconColor="text-indigo-600"
          />
        </div>

        <footer className="mt-20 text-center text-slate-400 text-sm">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Calculator className="w-4 h-4" />
            <span className="font-semibold text-slate-600">
              Calculator Varity 2025
            </span>
          </div>
          <p>&copy; {new Date().getFullYear()} DTI-SAU. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
