"use client";
import { Button } from "ghiasi-ui-library-kit";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex space-x-8 m-10">
      {/* <button className="text-red-400 bg-amber-400 p-5 m-10">click</button> */}
      <Button variant="primary" size="sm">Click</Button>
      <Button variant="secondary" size="md">Click</Button>
      <Button variant="outline" size="lg">Click</Button>
      <Button variant="destructive" size="icon"><ShoppingCart /></Button>
      <Button variant="ghost">Click</Button>
      <Button variant="link">Click</Button>
    </div>
  );
}
