import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'


const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'devvv3',
  description: 'web3 and ios app development',
}

import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
const locales = ['en', 'fr'];
 

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}];
}
 
export default async function LocaleLayout({children, params: {locale}}:{children:any,params:any}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body className={rubik.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
