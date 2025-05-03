
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Icons } from "../shared/Icons";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                <span className="gradient-text">Automate</span> Certificate Generation & Verification
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Create, manage, and verify certificates for your students or employees with our powerful platform. Save time and ensure authenticity with automated certificate generation and QR code verification.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <Link to="/register">
                  <Button size="lg" className="gap-2">
                    Get Started
                    <Icons.arrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/verify" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
                  Verify a certificate <span aria-hidden="true">→</span>
                </Link>
              </div>
              
              <div className="mt-10 flex items-center gap-x-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Trusted by companies like</p>
                <div className="flex gap-x-4">
                  {["TechNova", "Global Innovate", "FuturePath"].map((company) => (
                    <div key={company} className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="w-full rounded-xl border bg-background p-4 shadow-lg overflow-hidden">
              <div className="relative aspect-square max-h-[500px] overflow-hidden rounded-md bg-muted flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-cyan-100 dark:from-brand-950 dark:to-cyan-950 opacity-20"></div>
                
                <div className="relative z-10 p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 max-w-md w-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Icons.certificate className="h-8 w-8 text-brand-600" />
                      <h3 className="ml-2 text-xl font-bold">Certificate of Completion</h3>
                    </div>
                    <div className="h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                      <Icons.qrCode className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-3 my-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400">This certifies that</p>
                    <p className="text-2xl font-bold">John Anderson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">has successfully completed</p>
                    <p className="text-xl font-semibold">Web Development Internship</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">at</p>
                    <p className="text-lg font-semibold">TechNova Inc.</p>
                  </div>
                  
                  <div className="flex justify-between items-end mt-6">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">ISSUED ON</p>
                      <p className="font-medium">May 1, 2025</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">CERTIFICATE ID</p>
                      <p className="font-medium">CP-2025-XYZ789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
