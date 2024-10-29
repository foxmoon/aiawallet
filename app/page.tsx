"use client";

import { DashboardHeader } from "@/components/dashboard/Header";
import { PortfolioStats } from "@/components/dashboard/PortfolioStats";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { AssetAllocation } from "@/components/dashboard/AssetAllocation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <DashboardHeader />
        <PortfolioStats />
        
        <div className="grid gap-6 md:grid-cols-7 mb-8">
          <PerformanceChart />
          <AIInsights />
        </div>

        <AssetAllocation />
      </div>
    </main>
  );
}