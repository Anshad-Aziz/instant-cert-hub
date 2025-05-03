
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/Icons";
import { formatDate } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Certificate {
  id: string;
  recipient: string;
  course: string;
  issueDate: Date;
  template: string;
  status: "issued" | "revoked" | "expired";
}

const recentCertificates: Certificate[] = [
  {
    id: "CERT-001",
    recipient: "John Anderson",
    course: "Web Development Internship",
    issueDate: new Date(2023, 6, 15),
    template: "Internship Completion",
    status: "issued"
  },
  {
    id: "CERT-002",
    recipient: "Emily Thompson",
    course: "Data Science Bootcamp",
    issueDate: new Date(2023, 6, 18),
    template: "Course Completion",
    status: "issued"
  },
  {
    id: "CERT-003",
    recipient: "Michael Brown",
    course: "Cloud Computing Fundamentals",
    issueDate: new Date(2023, 6, 20),
    template: "Training Certificate",
    status: "issued"
  },
  {
    id: "CERT-004",
    recipient: "Sarah Wilson",
    course: "UI/UX Design Fundamentals",
    issueDate: new Date(2023, 6, 22),
    template: "Course Completion",
    status: "issued"
  },
  {
    id: "CERT-005",
    recipient: "David Miller",
    course: "Cybersecurity Awareness",
    issueDate: new Date(2023, 6, 25),
    template: "Training Certificate",
    status: "issued"
  }
];

export function RecentCertificates() {
  return (
    <div className="dashboard-card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Recent Certificates</h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead className="hidden md:table-cell">Course/Internship</TableHead>
              <TableHead className="hidden md:table-cell">Template</TableHead>
              <TableHead>Issue Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentCertificates.map((certificate) => (
              <TableRow key={certificate.id}>
                <TableCell className="font-mono text-xs">{certificate.id}</TableCell>
                <TableCell>{certificate.recipient}</TableCell>
                <TableCell className="hidden md:table-cell">{certificate.course}</TableCell>
                <TableCell className="hidden md:table-cell">{certificate.template}</TableCell>
                <TableCell>{formatDate(certificate.issueDate)}</TableCell>
                <TableCell>
                  <Badge 
                    variant={certificate.status === "issued" ? "default" : "destructive"}
                    className="capitalize"
                  >
                    {certificate.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Icons.view className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Icons.download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Icons.email className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
