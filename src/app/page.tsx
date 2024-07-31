

import Image from "next/image";
import HeroBanner from '@/components/custom/HeroBanner/heroBanner'
import TextReveal from "@/components/custom/TextReveal/TextReveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroBanner/>
     
    </main>
  );
}
