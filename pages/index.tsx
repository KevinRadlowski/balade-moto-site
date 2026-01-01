import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import About from '@/components/About';
import Screenshots from '@/components/Screenshots';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <NextSeo
        title="RideTogether - Communauté des passionnés de balades moto et auto"
        description="Organisez, partagez, discutez vos trajets en toute liberté. Rejoignez la communauté des passionnés de balades moto et auto en France."
        canonical="https://ridetogether.fr"
      />
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <About />
        <Screenshots />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

