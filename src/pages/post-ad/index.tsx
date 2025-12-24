import { useState } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layout/Layout';
import CategorySelector from '@/components/post-ad/CategorySelector';
import DynamicForm from '@/components/post-ad/DynamicForm';
import { Category } from '@/types';
import Head from 'next/head';

export default function PostAd() {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const handleCategorySelect = (category: Category) => {
        setSelectedCategory(category);
    };

    const handleBack = () => {
        setSelectedCategory(null);
    };

    return (
        <Layout>
            <Head>
                <title>Post An Ad | OLX Clone</title>
            </Head>

            <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
                {!selectedCategory ? (
                    <>
                        <h1 style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'var(--font-family-heading)', color: 'var(--color-primary)' }}>POST YOUR AD</h1>
                        <CategorySelector onSelect={handleCategorySelect} />
                    </>
                ) : (
                    <DynamicForm category={selectedCategory} onBack={handleBack} />
                )}
            </div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        },
    };
};
