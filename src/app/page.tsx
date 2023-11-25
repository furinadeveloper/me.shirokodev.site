"use client";
import Category from "@/components/category";
import Header from "@/components/header";
import { Suspense } from "react";

export default function PageRoot() {
  return (
    <div className="flex flex-col gap-10 text-white">
      <Suspense>
        <Header />
      </Suspense>
      <Suspense>
        <Category />
      </Suspense>
    </div>
  );
}
