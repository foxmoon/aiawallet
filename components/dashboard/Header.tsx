"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground">AI Wallet Advisor</h1>
        <p className="text-muted-foreground mt-2">Your intelligent crypto portfolio manager</p>
      </div>
      <Button className="bg-primary hover:bg-primary/90">
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    </div>
  );
}