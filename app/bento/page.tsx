import { BentoDemo } from "@/components/BentoDemo";
import Link from 'next/link';

export default function BentoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Bento Grid Demo</h1>
        <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Home
        </Link>
      </header>
      <BentoDemo />
    </div>
  );
}