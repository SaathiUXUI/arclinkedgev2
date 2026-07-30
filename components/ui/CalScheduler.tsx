"use client";

import Cal from "@calcom/embed-react";

export default function CalScheduler() {
  return (
    <Cal
      calLink="arclinkedge/project-scope-call"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
