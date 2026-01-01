import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <NextSeo
        title="Conditions générales d'utilisation - RideTogether"
        description="Conditions générales d'utilisation de RideTogether"
        canonical="https://ridetogether.fr/terms"
      />
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <main className="pt-20 min-h-screen bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-8">
            Conditions générales d'utilisation
          </h1>
          <div className="bg-asphalt p-8 rounded-xl shadow-lg border border-secondary/20 space-y-6 text-text-secondary">
            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                1. Acceptation des conditions
              </h2>
              <p>
                En utilisant l'application RideTogether, vous acceptez sans réserve les présentes
                conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez
                ne pas utiliser l'application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                2. Description du service
              </h2>
              <p>
                RideTogether est une application mobile permettant aux utilisateurs d'organiser,
                partager et discuter de balades à moto et en voiture. L'application propose des
                fonctionnalités de groupes, de chat, de recherche de balades et de notation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                3. Inscription et compte utilisateur
              </h2>
              <p>
                Pour utiliser RideTogether, vous devez créer un compte en fournissant des
                informations exactes et à jour. Vous êtes responsable de la confidentialité de vos
                identifiants et de toutes les activités effectuées sous votre compte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                4. Utilisation de l'application
              </h2>
              <p>Vous vous engagez à utiliser RideTogether de manière légale et responsable :</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                <li>Respecter les autres utilisateurs et la communauté</li>
                <li>Ne pas publier de contenu offensant, illégal ou inapproprié</li>
                <li>Ne pas utiliser l'application à des fins frauduleuses</li>
                <li>Respecter le code de la route et les règles de sécurité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                5. Responsabilité
              </h2>
              <p>
                RideTogether ne peut être tenu responsable des accidents, dommages ou incidents
                survenus lors des balades organisées via l'application. Chaque utilisateur est
                responsable de sa propre sécurité et doit respecter le code de la route et les
                règles de sécurité en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                6. Propriété intellectuelle
              </h2>
              <p>
                Tous les contenus de l'application RideTogether (textes, images, logos, etc.) sont
                protégés par les droits de propriété intellectuelle. Vous ne pouvez pas les
                reproduire, modifier ou distribuer sans autorisation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                7. Modification et résiliation
              </h2>
              <p>
                RideTogether se réserve le droit de modifier, suspendre ou interrompre l'application
                à tout moment. Nous pouvons également suspendre ou supprimer votre compte en cas de
                non-respect des présentes conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                8. Droit applicable
              </h2>
              <p>
                Les présentes conditions sont régies par le droit français. Tout litige sera soumis
                aux tribunaux compétents français.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">9. Contact</h2>
              <p>
                Pour toute question concernant ces conditions générales, vous pouvez nous contacter
                à : contact@ridetogether.fr
              </p>
            </section>

            <p className="text-sm text-text-secondary mt-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

