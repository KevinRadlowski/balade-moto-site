import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="RideTogether - Communauté des passionnés de balades moto et auto"
        description="Organisez, partagez, discutez vos trajets en toute liberté. Rejoignez la communauté des passionnés de balades moto et auto en France."
        openGraph={{
          type: 'website',
          locale: 'fr_FR',
          url: 'https://ridetogether.fr',
          siteName: 'RideTogether',
          images: [
            {
              url: '/logo.png',
              width: 1200,
              height: 630,
              alt: 'RideTogether Logo',
            },
          ],
        }}
        twitter={{
          handle: '@ridetogether',
          site: '@ridetogether',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}


