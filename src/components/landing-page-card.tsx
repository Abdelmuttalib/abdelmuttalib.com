import Image from "next/image";

export default function LandingPageCard({
  data,
}: {
  data: {
    name: string;
    description: string;
    img: string;
  };
}) {
  const project = data;

  const { name, img } = project;

  return (
    <div className="flex w-full h-full gap-y-3 flex-col break-inside-avoid">
      <div className="flex flex-col p-2 sm:p-4 lg:p-6 bg-neutral-100 dark:bg-neutral-800 relative rounded-lg items-center border border-neutral-200 dark:border-neutral-700 h-fit shadow-inner">
        <Image
          src={`/images/projects/${img}`}
          alt={`${name} project image`}
          className="w-full bg-blue-400 shadow-md rounded lg:w-auto"
          width={1280}
          height={467}
        />
      </div>
      <h4>{name}</h4>
       
    </div>
  );
}
