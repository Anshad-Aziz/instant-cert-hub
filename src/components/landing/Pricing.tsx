
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS } from "@/lib/constants";
import { Icons } from "../shared/Icons";

export function Pricing() {
  return (
    <section className="py-16" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your certificate management needs
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`plan-card ${plan.popular ? 'plan-popular' : ''}`}
            >
              {plan.popular && <div className="plan-badge">Most Popular</div>}
              
              <div>
                <div className="plan-name">{plan.name}</div>
                <div className="flex items-baseline">
                  <span className="plan-price">${plan.price}</span>
                  <span className="plan-duration">/month</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
              </div>

              <div className="my-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="plan-feature">
                    <Icons.check className="h-4 w-4 text-brand-600 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to={plan.id === "enterprise" ? "/contact" : "/register"}>
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="plan-action"
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
