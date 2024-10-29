"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, PieChart } from "lucide-react";

export function PortfolioStats() {
  return (
    <div className="grid gap-6 md:grid-cols-4 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
          <PieChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$48,800</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 flex items-center">
              +16.3%
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}