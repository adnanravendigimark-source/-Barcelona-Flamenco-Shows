import { Suspense } from "react";
import LoginForm from "@/components/admin/LoginForm";

export const metadata = {
  title: "Admin Login | Alhambra Tour",
  description: "Administrative login for Alhambra Tour CMS.",
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#29302A] p-4 text-white">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold tracking-wide text-[#E5D6BE]">
            Alhambra Tour
          </h1>
        </div>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#E5D6BE]/70">
          Content Admin
        </p>
        <div className="mt-6 rounded-2xl bg-white p-8 shadow-xl">
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
