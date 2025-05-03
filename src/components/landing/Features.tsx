
import { Icons } from "../shared/Icons";

const features = [
  {
    name: "Automated Certificate Generation",
    description: "Generate professional certificates in bulk with custom templates and dynamic fields.",
    icon: Icons.certificate
  },
  {
    name: "QR Code Verification",
    description: "Each certificate includes a unique QR code for instant verification of authenticity.",
    icon: Icons.qrCode
  },
  {
    name: "Template Management",
    description: "Upload and customize certificate templates with your branding and dynamic fields.",
    icon: Icons.document
  },
  {
    name: "Candidate Management",
    description: "Import candidate details via Excel or add them manually with comprehensive tracking.",
    icon: Icons.candidate
  },
  {
    name: "Detailed Analytics",
    description: "Track certificate usage, view reports, and analyze trends with interactive dashboards.",
    icon: Icons.chart
  },
  {
    name: "Email Delivery",
    description: "Automatically send certificates to recipients via email with personalized messages.",
    icon: Icons.email
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features for Certificate Management
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our platform simplifies the entire certificate lifecycle from creation to verification
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="feature-card">
              <div className="feature-icon">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
