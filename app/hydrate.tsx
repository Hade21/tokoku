"use client";

import { Hydrate as HdrateBoundary } from "@tanstack/react-query";
import React from "react";

export default function Hydrate(props: any) {
  return <HdrateBoundary {...props} />;
}
