import Image from "next/image";
import HeroBanner from '@/components/custom/heroBanner/heroBanner'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <HeroBanner/>
    </main>
  );
}
