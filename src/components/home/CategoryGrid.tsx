import React from 'react';
import styles from '@/styles/CategoryGrid.module.css';
import categoriesData from '@/data/categories.json';
import { useTranslation } from 'next-i18next';

const CATEGORY_ICONS: Record<string, string> = {
    'vehicles': '🚗',
    'properties': '🏠',
    'mobile-phones-accessories': '📱',
    'electronics-appliances': '📺',
    'home-furniture-decor': '🛋️',
    'business-industrial-agriculture': '💼',
    'services': '🛠️',
    'jobs': '👔',
    'animals': '🐾',
    'kids-baby': '🍼',
    'fashion-beauty': '👗',
    'hobbies-sport-ads': '⚽'
};

const CATEGORY_COLORS: Record<string, string> = {
    'vehicles': '#ffce32',
    'properties': '#3a77ff',
    'mobile-phones-accessories': '#23e5db',
    'electronics-appliances': '#ff4d4f',
    'home-furniture-decor': '#00a49f'
};

const CategoryGrid: React.FC = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    // Filter top-level categories
    const topCategories = categoriesData.filter(cat => cat.level === 0).slice(0, 12);

    return (
        <section className={styles.section}>
            <div className={`container`}>
                <h2 className={styles.title}>All Categories</h2>
                <div className={styles.grid}>
                    {topCategories.map((cat: any) => (
                        <div key={cat.id} className={styles.item}>
                            <div
                                className={styles.iconBox}
                                style={{ backgroundColor: CATEGORY_COLORS[cat.slug] || '#f0f0f0' }}
                            >
                                <span className={styles.categoryIcon}>{CATEGORY_ICONS[cat.slug] || '✨'}</span>
                            </div>
                            <span className={styles.name}>
                                {currentLang === 'ar' ? (cat.name_l1 || cat.name) : cat.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
