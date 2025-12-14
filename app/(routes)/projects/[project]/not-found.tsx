import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${dancingScript.className}`}>
          Project Not Found
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg hover:from-blue-700 hover:to-blue-700 transition-all duration-300"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
} 