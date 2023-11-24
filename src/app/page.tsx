"use client";
import Category from "@/components/category";
import Header from "@/components/header";

export default function PageRoot() {

  return (
    <div className="flex flex-col gap-10 text-white">
      <Header />
      <Category />
    </div>
  );
}
