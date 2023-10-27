// import redPorscheImg from "/red-porsche.jpeg";
// import bimmersImg from "../../public/bimmers.jpeg";
// import twoPorscheImg from "../../public/porsches.jpeg";
// import marlboroRacingImg from "../../public/marlboro-racing.jpeg";
import Image from "next/image";

export default function GalleryPage() {
  const carImages = [
    {
      name: "red-porsche",
      classNames: "red-porsche",
      image: "/red-porsche.jpeg",
    },
    {
      name: "red-porsche",
      classNames: "red-porsche",
      image: "/porsches.jpeg",
    },
    {
      name: "red-porsche",
      classNames: "red-porsche",
      image: "/bimmers.jpeg",
    },
    {
      name: "marlboroRacing",
      image: "/marlboro-racing.jpeg",
    },
  ];

  return (
    <>
      <h1>Gallery</h1>
      <div className="flex flex-wrap justify-center max-w-screen-md	mx-auto">
        {carImages.map((img, index) => (
          <div
            key={index}
            className="flex justify-center bg-contain bg-no-repeat h-64 w-36 m-2">
            <Image src={img.image} alt={img.name} width={140} height={100} />
          </div>
        ))}
      </div>
    </>
  );
}
