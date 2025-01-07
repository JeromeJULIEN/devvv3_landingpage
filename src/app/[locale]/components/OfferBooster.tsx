import { useTranslations } from "next-intl";

type Props = {};

const OfferBooster = (props: Props) => {
  const t = useTranslations("offer");

  return (
    <div className="flex flex-col item-center gap-4 text-white md:w-1/3 border border-gray-500 rounded-lg p-4">
      <h3 className="text-3xl pb-6">
        <strong className="text-cyan-500">Booster : </strong>
        {t("booster.headline")}
      </h3>
      {/* <h4 className='text-xl text-cyan-500 pb-6'>{t('booster.price')}<strong> 3000€</strong></h4> */}
      <p>
        <strong>&#x2714; </strong>
        {t("booster.description1")}
      </p>
      <p>
        <strong>&#x2714; </strong>
        {t("booster.description2")}
      </p>
      <p>
        <strong>&#x2714; </strong>
        {t("booster.description3")}
      </p>
      <p>
        <strong>&#x2714; </strong>
        {t("booster.description4")}
      </p>
      <p>
        <strong>&#x2714; </strong>
        {t("booster.description5")}
      </p>
    </div>
  );
};

export default OfferBooster;
