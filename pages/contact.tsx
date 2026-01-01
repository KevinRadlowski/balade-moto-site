import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact - RideTogether"
        description="Contactez l'équipe RideTogether pour toute question ou suggestion"
        canonical="https://ridetogether.fr/contact"
      />
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <main className="pt-20 min-h-screen bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-light mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-text-secondary">
              Une question ? Une suggestion ? N'hésitez pas à nous écrire !
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

