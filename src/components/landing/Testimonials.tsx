
import { Icons } from "../shared/Icons";

const testimonials = [
  {
    content: "This platform completely transformed how we manage certificates for our internship program. What used to take days now takes minutes.",
    author: "Sarah Johnson",
    role: "HR Director",
    company: "TechNova Inc."
  },
  {
    content: "The QR code verification feature has greatly enhanced the credibility of our certificates. Our students love the professional look and easy verification.",
    author: "Michael Chen",
    role: "Training Manager",
    company: "Global Innovate"
  },
  {
    content: "We've reduced certificate generation time by 90% while improving quality. The analytics dashboard gives us insights we never had before.",
    author: "Priya Patel",
    role: "Operations Lead",
    company: "FuturePath"
  }
];

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about our certificate management platform
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icons.certificate key={star} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
