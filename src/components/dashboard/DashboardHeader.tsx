
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/Icons";
import { useAuth } from "@/context/AuthContext";
import { calculateTimeRemaining } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function DashboardHeader() {
  const { user } = useAuth();
  
  if (!user) return null;

  const usagePercentage = Math.round((user.certificatesUsed / user.certificateLimit) * 100);
  const remainingTime = calculateTimeRemaining(user.subscriptionEnd);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your certificates and templates
        </p>
      </div>
      
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-normal">
            {user.plan.toUpperCase()} Plan
          </Badge>
          <Badge variant="outline" className="font-normal">
            <Icons.calendar className="mr-1 h-3 w-3" />
            {remainingTime}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-xs text-muted-foreground">
            Usage: {user.certificatesUsed}/{user.certificateLimit}
          </div>
          <div className="w-24 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-600 dark:bg-brand-500" 
              style={{ width: `${usagePercentage}%` }}
            ></div>
          </div>
        </div>
        
        <Button size="sm">
          <Icons.add className="mr-2 h-4 w-4" />
          New Certificate
        </Button>
      </div>
    </div>
  );
}
