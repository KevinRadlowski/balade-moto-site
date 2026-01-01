import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <NextSeo
        title="Politique de confidentialité - RideTogether"
        description="Politique de confidentialité de RideTogether"
        canonical="https://ridetogether.fr/privacy-policy"
      />
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <main className="pt-20 min-h-screen bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-8">
            Politique de confidentialité
          </h1>
          <div className="bg-asphalt p-8 rounded-xl shadow-lg border border-secondary/20 space-y-6 text-text-secondary">
            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                1. Collecte des données
              </h2>
              <p>
                RideTogether collecte les données personnelles que vous nous fournissez lors de
                l'inscription et de l'utilisation de l'application. Ces données incluent notamment
                votre nom, adresse email, photo de profil, et les informations relatives à vos
                balades.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                2. Utilisation des données
              </h2>
              <p>
                Les données collectées sont utilisées pour vous fournir les services de
                RideTogether, notamment pour vous permettre d'organiser des balades, de communiquer
                avec d'autres utilisateurs, et d'améliorer votre expérience sur l'application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                3. Partage des données
              </h2>
              <p>
                RideTogether ne vend pas vos données personnelles à des tiers. Nous pouvons
                partager certaines informations avec d'autres utilisateurs de l'application dans le
                cadre des fonctionnalités de l'app (groupes, chat, etc.), conformément à vos
                paramètres de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                4. Sécurité des données
              </h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données
                personnelles contre tout accès non autorisé, modification, divulgation ou
                destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                5. Vos droits
              </h2>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de
                suppression et d'opposition concernant vos données personnelles. Vous pouvez exercer
                ces droits en nous contactant à l'adresse : contact@ridetogether.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                6. Cookies
              </h2>
              <p>
                L'application mobile RideTogether peut utiliser des technologies similaires aux
                cookies pour améliorer votre expérience. Vous pouvez gérer ces préférences dans les
                paramètres de votre appareil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">
                7. Modifications
              </h2>
              <p>
                Cette politique de confidentialité peut être modifiée à tout moment. Nous vous
                informerons de tout changement significatif via l'application ou par email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-light mb-4">8. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, vous pouvez nous
                contacter à : contact@ridetogether.fr
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

