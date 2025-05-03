
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCards } from "@/components/dashboard/StatCards";
import { RecentCertificates } from "@/components/dashboard/RecentCertificates";
import { TemplatesList } from "@/components/dashboard/TemplatesList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DASHBOARD_TABS } from "@/lib/constants";
import { useAuth } from "@/context/AuthContext";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "overview");
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams({ tab: value });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-8">
        <DashboardHeader />
        
        <div className="mt-8">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="mb-6">
              {DASHBOARD_TABS.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <StatCards />
              <RecentCertificates />
            </TabsContent>
            
            <TabsContent value="templates" className="space-y-6">
              <TemplatesList />
            </TabsContent>
            
            <TabsContent value="certificates">
              <div className="dashboard-card">
                <h3 className="text-lg font-semibold mb-6">All Certificates</h3>
                <p className="text-muted-foreground">
                  Full certificate management interface will be implemented here.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="candidates">
              <div className="dashboard-card">
                <h3 className="text-lg font-semibold mb-6">Candidate Management</h3>
                <p className="text-muted-foreground">
                  Candidate management interface will be implemented here.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="settings">
              <div className="dashboard-card">
                <h3 className="text-lg font-semibold mb-6">Account Settings</h3>
                <p className="text-muted-foreground">
                  Account settings and subscription management will be implemented here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
