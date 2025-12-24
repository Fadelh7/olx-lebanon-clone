import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '@/styles/CategoryNav.module.css';

const CATEGORIES = [
    { id: 1, slug: 'vehicles', name_en: 'Vehicles', name_ar: 'مركبات' },
    { id: 2, slug: 'properties', name_en: 'Properties', name_ar: 'عقارات' },
    { id: 3, slug: 'mobile-phones-accessories', name_en: 'Mobile Phones', name_ar: 'موبايلات' },
    { id: 4, slug: 'electronics-appliances', name_en: 'Electronics', name_ar: 'إلكترونيات' },
    { id: 5, slug: 'home-furniture-decor', name_en: 'Home & Garden', name_ar: 'المنزل والحديقة' },
    { id: 6, slug: 'fashion-beauty', name_en: 'Fashion & Beauty', name_ar: 'أزياء وجمال' },
    { id: 10, slug: 'business-industrial-agriculture', name_en: 'Business', name_ar: 'تجارة' },
    { id: 13, slug: 'services', name_en: 'Services', name_ar: 'خدمات' },
    { id: 14, slug: 'jobs', name_en: 'Jobs', name_ar: 'وظائف' },
];

const CategoryNav: React.FC = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <div className={styles.navContainer}>
            <div className={`container ${styles.navContent}`}>
                <div className={styles.allCats}>
                    <span className={styles.allLabel}>ALL CATEGORIES</span>
                    <span className={styles.chevron}>▼</span>
                </div>
                <div className={styles.itemsWrapper}>
                    {CATEGORIES.map((cat) => (
                        <div key={cat.id} className={styles.navItem}>
                            <span className={styles.catName}>
                                {currentLang === 'ar' ? cat.name_ar : cat.name_en}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryNav;
