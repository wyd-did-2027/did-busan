import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export default function SliderItem00() {
  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/busan/mk_1.jpg`}
        alt="부산1"
        fill
        className="object-fill min-[1080px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/busan/pk_1.jpg`}
        alt="부산1"
        fill
        className="object-fill hidden min-[1080px]:block"
        priority
      />
    </div>
  );
}
