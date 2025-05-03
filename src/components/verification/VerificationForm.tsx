
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/shared/Icons";
import { generateCertificateId, formatDate } from "@/lib/utils";

interface VerificationResult {
  isValid: boolean;
  certificateId: string;
  studentName: string;
  courseName: string;
  companyName: string;
  issueDate: string;
  status: "valid" | "invalid" | "expired";
}

export function VerificationForm() {
  const [certificateId, setCertificateId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // For demo purposes, we're simulating a response
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock verification logic - in a real app, this would query a database
      if (certificateId.length >= 6) {
        setResult({
          isValid: true,
          certificateId,
          studentName: "John Anderson",
          courseName: "Web Development Internship",
          companyName: "TechNova Inc.",
          issueDate: formatDate(new Date()),
          status: "valid"
        });
      } else {
        setResult({
          isValid: false,
          certificateId,
          studentName: "",
          courseName: "",
          companyName: "",
          issueDate: "",
          status: "invalid"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoVerify = () => {
    setCertificateId(generateCertificateId());
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold mb-4">Certificate Verification</h1>
        <p className="text-muted-foreground">
          Enter a certificate ID or scan a QR code to verify the authenticity of a certificate.
        </p>
      </div>

      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="certificate-id">Certificate ID</Label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <Input
                type="text"
                name="certificate-id"
                id="certificate-id"
                placeholder="Enter certificate ID (e.g., CP-2025-XYZ789)"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                className="flex-1 block w-full rounded-none rounded-l-md"
              />
              <Button
                type="submit"
                className="rounded-none rounded-r-md"
                disabled={isLoading || !certificateId}
              >
                {isLoading ? (
                  <>
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Icons.search className="mr-2 h-4 w-4" />
                    Verify
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button type="button" variant="link" onClick={handleDemoVerify}>
            Try with a demo certificate ID
          </Button>
        </div>
      </form>

      {result && (
        <div className={`mt-8 p-6 border rounded-xl ${
          result.isValid 
            ? "bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-900" 
            : "bg-red-50 border-red-100 dark:bg-red-900/20 dark:border-red-900"
        }`}>
          <div className="flex items-center gap-4">
            {result.isValid ? (
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Icons.check className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <Icons.error className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
            )}
            <div>
              <h2 className="text-lg font-medium">
                {result.isValid
                  ? "Certificate verified successfully!"
                  : "Certificate verification failed!"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {result.isValid
                  ? "This certificate is authentic and has been issued by the stated organization."
                  : "We couldn't verify this certificate. It may be invalid or not exist in our records."}
              </p>
            </div>
          </div>

          {result.isValid && (
            <div className="mt-6 border-t pt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Certificate ID</p>
                <p>{result.certificateId}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Status</p>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="capitalize">{result.status}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Recipient Name</p>
                <p>{result.studentName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Issuing Organization</p>
                <p>{result.companyName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Certificate Type</p>
                <p>{result.courseName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Issue Date</p>
                <p>{result.issueDate}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
