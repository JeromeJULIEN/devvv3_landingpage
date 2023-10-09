'use client';

import clsx from 'clsx';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next-intl/client';
import {ChangeEvent, useTransition} from 'react';

export default function LanguageSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
  //   const nextLocale = event.target.value;
  //   startTransition(() => {
  //     router.replace(pathname, {locale: nextLocale});
  //   });
  // }

  // return (
  //   <label
  //     className={clsx(
  //       'relative text-gray-400 animate-fade-in',
  //       isPending && 'transition-opacity [&:disabled]:opacity-30'
  //     )}
  //   >
  //     <p className="sr-only">{t('label')}</p>
  //     <select
  //       className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
  //       defaultValue={locale}
  //       disabled={isPending}
  //       onChange={onSelectChange}
  //     >
  //       {['en', 'fr'].map((cur) => (
  //         <option key={cur} value={cur}>
  //           {t('locale', {locale: cur})}
  //         </option>
  //       ))}
  //     </select>
  //     <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
  //   </label>
  // );

  function onSelectChange(event: React.MouseEvent<HTMLButtonElement>) {
    const nextLocale = event.currentTarget.getAttribute('data-value')!;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return(
  <div className="flex flex-row justify-center select-none m-2 border border-neutral-700 rounded-full hover:bg-neutral-400 transition-all duration-200">
	  <div className="flex flex-row items-center right-1">
		  <button className={`w-8 p-1 flex justify-center rounded-full text-xs font-light text-neutral-700 focus:bg-neutral-200 focus:outline-none focus:text-black transition-all duration-200 ${locale === 'en' && 'bg-neutral-200'}`} data-value='en' onClick={onSelectChange}>
        <span >En</span>
      </button>

		  <button className={`w-8 p-1 flex justify-center rounded-full text-xs font-light text-neutral-700 focus:bg-neutral-200 focus:outline-none focus:text-black transition-all duration-200 ${locale === 'fr' && 'bg-neutral-200'}`} data-value='fr' onClick={onSelectChange} value='fr'>
        <span className="font-light">Fr</span>         
      </button>
	  </div>
  </div>
  )
}
