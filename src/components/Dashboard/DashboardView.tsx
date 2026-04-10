import React from "react";
import HeroPattern from "./HeroPattern";
import PageHeader from "../PageHeader";
import DashboardHeader from "./DashboardHeader";
import TextInputPanel from "./TextInputPanel";
import QuickActionsPanel from "./QuickActionsPanel";

const DashboardView = () => {
  return (
    <div className="relative">
      <PageHeader title="Dashboard" className="lg:hidden" />
      <HeroPattern />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionsPanel />
      </div>
    </div>
  );
};

export default DashboardView;
