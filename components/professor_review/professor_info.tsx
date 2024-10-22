import Image from "next/image";

export default async function ProfessorInfo({
  name,
  dept,
  img,
}: {
  name: string;
  dept: string;
  img: string | null;
}) {
  return (
    <div className="bg-muted rounded-full p-6 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-sm text-muted-foreground">{dept}</p>
      </div>
      <Image
        className="rounded-full w-28 h-28 "
        alt="profilePic"
        src={img || "/assets/imgs/female-avatar.png"}
        width={100}
        height={100}
      />
    </div>
  );
}
