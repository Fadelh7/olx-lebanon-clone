import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout/Layout';
import AdGrid from '@/components/home/AdGrid';
import { getAds } from '@/lib/api';
import { Ad } from '@/types';
import Head from 'next/head';

interface HomeProps {
  ads: Ad[];
}

export default function Home({ ads }: HomeProps) {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>OLX Lebanon | Christmas Deals</title>
      </Head>

      <main>
        {/* Christmas Banner */}
        <div style={{ backgroundColor: '#f2f4f5', padding: '20px 0' }}>
          <div className="container">
            <div style={{
              width: '100%',
              height: '240px',
              backgroundImage: 'url("https://t3.ftcdn.net/jpg/04/71/90/08/360_F_471900894_7Y9XvJ2WvJ2WvJ2WvJ2WvJ2WvJ2WvJ2W.jpg")', // Generic but high quality Christmas banner
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.2)'
              }}></div>
              <h1 style={{
                position: 'relative',
                fontSize: '42px',
                fontWeight: '800',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                textAlign: 'center'
              }}>
                MARRY CHRISTMAS & HAPPY NEW YEAR! <br />
                <span style={{ fontSize: '24px', fontWeight: '400' }}>Greatest Deals on OLX Lebanon</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="container" style={{ padding: '40px 0' }}>
          {/* Cars Grid */}
          <section style={{ marginBottom: '60px' }}>
            <AdGrid
              ads={ads.filter(a => a.categoryId === 23).slice(0, 8)}
              title="Cars for Sale"
            />
          </section>

          {/* Apartments Grid */}
          <section style={{ marginBottom: '60px' }}>
            <AdGrid
              ads={ads.filter(a => a.categoryId === 95 || a.categoryId === 126).slice(0, 4)}
              title="Apartments & Villas"
            />
          </section>

          {/* Phones Grid */}
          <section style={{ marginBottom: '60px' }}>
            <AdGrid
              ads={ads.filter(a => a.categoryId === 9).slice(0, 8)}
              title="Mobile Phones"
            />
          </section>
        </div>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const ads = await getAds();

  return {
    props: {
      ads,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
