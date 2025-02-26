import Image from "next/image";
import { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData | null;
  closeFullScreen: () => void;
};

const FullScreenImage = (props: Props) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
      onClick={() => props.closeFullScreen()}
    >
      <div className="relative rounded-md w-full h-full">
        {props.src && (
          <Image
            src={props.src}
            alt="full screen image"
            sizes="100vw"
            quality={100}
            fill
            className="object-contain w-auto h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default FullScreenImage;
