"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  slug: string;
};

const ProjectCard = (props: Props) => {
  const locale = useLocale();
  const t = useTranslations("projects");

  return (
    <div className="flex flex-col item-center  w-3/4 md:w-1/4">
      <Link href={`${locale}/project/${props.slug}`}>
        <Image
          src={props.image}
          alt={`${props.title} project image`}
          className="pb-2 hover:opacity-70 transition-all duration-200 w-full mx-auto aspect-square object-cover"
        />
        <p className="font-bold text-center">
          {t(`${props.slug}.name`).toUpperCase()}
        </p>
        <p className="font-light text-center">
          {t(`${props.slug}.description`)}
        </p>
      </Link>
    </div>
  );
};

export default ProjectCard;
