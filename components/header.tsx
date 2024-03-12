interface DashboardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  children,
}: DashboardHeaderProps) {
  return (
    <div className='flex items-center justify-between px-2'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-heading text-white text-3xl md:text-4xl'>
          {heading}
        </h1>
        {text && (
          <p className='text-lg text-white rounded-xl p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            {text}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
