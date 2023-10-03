"use client";

import {
  Hydrate as HydrateBoundary,
  HydrateProps,
} from "@tanstack/react-query";
import React from "react";

export default function Hydrate(props: HydrateProps) {
  return <HydrateBoundary {...props} />;
}
