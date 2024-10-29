"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const assets = [
  { name: "Bitcoin", value: 32500, change: "+5.2%" },
  { name: "Ethereum", value: 12800, change: "+3.8%" },
  { name: "AIA Token", value: 3500, change: "+2.1%" },
];

export function AssetAllocation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
        <CardDescription>Current distribution of your portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {assets.map((asset, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{asset.name}</h4>
                  <p className="text-sm text-muted-foreground">${asset.value.toLocaleString()}</p>
                </div>
              </div>
              <span className="text-emerald-500 font-medium">{asset.change}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}