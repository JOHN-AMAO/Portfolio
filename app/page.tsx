import Image from "next/image";
import DesktopSidebar from "@/components/DesktopSidebar";
export default function Home() {
  return (
    <main className='bg-[#0e1631] w-full'>
      <div className=''>
        <div>
          <Image
            className='ml-5'
            src='/logo.svg'
            width={50}
            height={50}
            alt='my logo'
          />
          <div></div>
        </div>
      </div>
    </main>
  );
}
