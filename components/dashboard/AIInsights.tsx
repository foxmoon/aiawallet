"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const recommendations = [
  {
    title: "Portfolio Rebalancing",
    description: "Consider increasing BTC allocation by 5%",
    risk: "Low",
  },
  {
    title: "Market Opportunity",
    description: "ETH showing strong momentum",
    risk: "Medium",
  },
];

export function AIInsights() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="h-4 w-4 mr-2" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, i) => (
            <div key={i} className="p-4 rounded-lg bg-muted">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{rec.title}</h4>
                <span className={`text-xs ${
                  rec.risk === "Low" ? "text-emerald-500" : "text-amber-500"
                }`}>
                  {rec.risk} Risk
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{rec.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}