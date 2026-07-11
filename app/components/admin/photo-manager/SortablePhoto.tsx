"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SortablePhoto({
  children,
}: Props) {
  return <>{children}</>;
}