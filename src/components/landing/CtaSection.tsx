
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-600 to-cyan-600 dark:from-brand-800 dark:to-cyan-800">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Ready to streamline your certificate management?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join hundreds of organizations that trust our platform for their certificate needs
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/register">
              <Button variant="secondary" size="lg">
                Start your free trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white" size="lg">
                Contact sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
