
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/Icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MOCK_TEMPLATE_CATEGORIES } from "@/lib/constants";

interface Template {
  id: string;
  name: string;
  category: string;
  usageCount: number;
  thumbnail: string;
  fields: string[];
}

const mockTemplates: Template[] = [
  {
    id: "template-1",
    name: "Classic Internship Certificate",
    category: "Internship Completion",
    usageCount: 45,
    thumbnail: "",
    fields: ["Name", "Company", "Duration", "Project", "Date"]
  },
  {
    id: "template-2",
    name: "Modern Training Certificate",
    category: "Training Certificate",
    usageCount: 32,
    thumbnail: "",
    fields: ["Name", "Course", "Duration", "Date", "Instructor"]
  },
  {
    id: "template-3",
    name: "Professional Achievement Award",
    category: "Achievement Award",
    usageCount: 12,
    thumbnail: "",
    fields: ["Name", "Achievement", "Date", "Department", "Manager"]
  }
];

export function TemplatesList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Certificate Templates</h3>
        <Button>
          <Icons.add className="mr-2 h-4 w-4" />
          Add Template
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTemplates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center border-b">
              <Icons.document className="h-12 w-12 text-muted-foreground/40" />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{template.name}</CardTitle>
              <CardDescription>{template.category}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-sm">
                <span className="text-muted-foreground">Dynamic fields: </span>
                {template.fields.join(", ")}
              </div>
              <div className="text-sm mt-1">
                <span className="text-muted-foreground">Usage count: </span>
                {template.usageCount}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Button variant="outline" size="sm">
                <Icons.edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" size="sm">
                <Icons.certificate className="h-4 w-4 mr-2" />
                Use
              </Button>
            </CardFooter>
          </Card>
        ))}
        
        <Card className="border-dashed flex flex-col items-center justify-center p-4 h-full">
          <div className="rounded-full bg-muted w-12 h-12 flex items-center justify-center mb-4">
            <Icons.add className="h-6 w-6 text-muted-foreground/70" />
          </div>
          <h4 className="text-lg font-medium mb-1">Add New Template</h4>
          <p className="text-sm text-muted-foreground text-center mb-4">
            Upload your custom certificate design
          </p>
          <Button variant="outline">
            <Icons.upload className="mr-2 h-4 w-4" />
            Upload Template
          </Button>
        </Card>
      </div>
    </div>
  );
}
