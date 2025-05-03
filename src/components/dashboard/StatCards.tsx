
import { Icons } from "@/components/shared/Icons";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ElementType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

function StatCard({ title, value, description, icon: Icon, trend }: StatCardProps) {
  return (
    <div className="dashboard-card">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="dashboard-stat">{value}</div>
          {description && (
            <p className="dashboard-label">{description}</p>
          )}
          {trend && (
            <div className="flex items-center mt-2">
              {trend.isPositive ? (
                <Icons.chevronUp className="h-4 w-4 text-green-500" />
              ) : (
                <Icons.chevronDown className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-xs font-medium ${
                trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {trend.value}% from last month
              </span>
            </div>
          )}
        </div>
        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
          <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export function StatCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard 
        title="Total Certificates" 
        value="128"
        description="All time" 
        icon={Icons.certificate}
        trend={{ value: 12, isPositive: true }}
      />
      <StatCard 
        title="Certificates Issued" 
        value="42"
        description="This month" 
        icon={Icons.document}
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard 
        title="Templates" 
        value="5"
        description="Active templates" 
        icon={Icons.fileText}
      />
      <StatCard 
        title="Certificate Verifications" 
        value="86"
        description="Last 30 days" 
        icon={Icons.verify}
        trend={{ value: 5, isPositive: true }}
      />
    </div>
  );
}
