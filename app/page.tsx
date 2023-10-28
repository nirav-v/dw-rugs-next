import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-6 grid-rows-2 max-w-lg mx-auto">
      {/* Header with name and short intro*/}
      <div className="row-span-2 col-span-2 bg-black">
        <Image src="/butterfly.jpeg" alt="rug image" width={200} height={200} />
      </div>
      <div className="  bg-rose-100">
        <Image
          src="/red-porsche.jpeg"
          alt="rug image"
          width={100}
          height={100}
        />
      </div>
      <div className=" bg-rose-300">
        <Image
          src="/krooked-eyes.jpeg"
          alt="rug image"
          width={100}
          height={100}
        />
      </div>
      <div className=" bg-rose-400">
        <Image src="/dogs.jpeg" alt="rug image" width={100} height={100} />
      </div>
      <div className=" bg-rose-600">
        <Image src="/blond2.jpeg" alt="rug image" width={100} height={100} />
      </div>
      <div className="bg-rose-400 row-start-1 col-start-5 row-span-2 col-span-2">
        <Image src="/mf-doom.jpeg" alt="rug image" width={200} height={200} />
      </div>
      {/* grid layout of some rug pieces */}
    </div>
  );
}
