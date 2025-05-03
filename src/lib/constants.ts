
export const APP_NAME = "CertifyPro";

export const PRICING_PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 29,
    description: "Perfect for small organizations with minimal certificate needs",
    features: [
      "50 certificates/month",
      "2 certificate templates",
      "Email delivery",
      "Basic dashboard",
      "QR code verification",
      "Customer support"
    ],
    popular: false,
    buttonText: "Get Started",
    certificateLimit: 50,
    templateLimit: 2
  },
  {
    id: "pro",
    name: "Professional",
    price: 79,
    description: "Ideal for growing organizations with moderate certificate needs",
    features: [
      "100 certificates/month",
      "3 certificate templates",
      "Email & direct download",
      "Advanced dashboard",
      "QR code verification",
      "Priority customer support"
    ],
    popular: true,
    buttonText: "Get Started",
    certificateLimit: 100,
    templateLimit: 3
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 199,
    description: "For large organizations with extensive certificate requirements",
    features: [
      "100+ certificates/month",
      "5 certificate templates",
      "All delivery methods",
      "Complete dashboard & analytics",
      "QR code verification",
      "Dedicated account manager"
    ],
    popular: false,
    buttonText: "Contact Sales",
    certificateLimit: 250,
    templateLimit: 5
  }
];

export const PLACEHOLDER_COMPANIES = [
  "TechNova Inc.",
  "Global Innovate",
  "FuturePath",
  "CodeGenius",
  "DataSphere",
  "NexGen Solutions",
  "BrightWave",
  "InnovateX",
  "TechForward",
  "QuantumLeap"
];

export const DASHBOARD_TABS = [
  { id: "overview", name: "Overview" },
  { id: "templates", name: "Templates" },
  { id: "certificates", name: "Certificates" },
  { id: "candidates", name: "Candidates" },
  { id: "settings", name: "Settings" }
];

export const MOCK_TEMPLATE_CATEGORIES = [
  "Internship Completion",
  "Course Completion",
  "Training Certificate",
  "Achievement Award",
  "Participation"
];
