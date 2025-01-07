import { useTranslations } from "next-intl";

type Props = {};

const OfferStarter = (props: Props) => {
  const t = useTranslations("offer");

  return (
    <div className="flex flex-col item-center gap-4 text-white md:w-1/3 border border-gray-500 rounded-lg p-4">
      <h3 className="text-3xl pb-6">
        <strong className="text-cyan-500">Starter : </strong>
        {t("starter.headline")}
      </h3>
      {/* <h4 className="text-xl text-cyan-500 pb-6">
        {t("starter.price1")}
        <strong>1000€ </strong>
        {t("starter.price2")}
        <strong> 2500€</strong>
      </h4> */}
      <p>
        <strong>&#x2714; {t("starter.title1")} : </strong>
        {t("starter.description1")}
      </p>
      <p>
        <strong>&#x2714; {t("starter.title2")} : </strong>
        {t("starter.description2")}
      </p>
      <p>
        <strong>&#x2714; {t("starter.title3")} : </strong>
        {t("starter.description3")}
      </p>
      <p>{t("starter.description4")}</p>
    </div>
  );
};

export default OfferStarter;
