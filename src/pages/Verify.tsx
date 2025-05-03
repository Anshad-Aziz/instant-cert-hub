
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VerificationForm } from "@/components/verification/VerificationForm";

const Verify = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-12">
        <VerificationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Verify;
