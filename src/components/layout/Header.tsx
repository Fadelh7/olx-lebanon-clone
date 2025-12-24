import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import styles from '@/styles/Header.module.css';

const Header: React.FC = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { locale, pathname, asPath, query } = router;

    const toggleLanguage = () => {
        const nextLocale = locale === 'en' ? 'ar' : 'en';
        router.push({ pathname, query }, asPath, { locale: nextLocale });
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContent}`}>
                <div className={styles.topRow}>
                    <Link href="/" className={styles.logo}>
                        OLX
                    </Link>

                    <div className={styles.searchSection}>
                        <div className={styles.locationBox}>
                            <span className={styles.searchIcon}>📍</span>
                            <input type="text" placeholder="Lebanon" className={styles.locationInput} />
                            <span className={styles.dropdownIcon}>▼</span>
                        </div>
                        <div className={styles.mainSearchBox}>
                            <input
                                type="text"
                                placeholder={t('nav.search_placeholder', 'Find Cars, Mobile Phones and more...')}
                                className={styles.searchInput}
                            />
                            <button className={styles.searchButton}>
                                <svg viewBox="0 0 1024 1024" width="20" height="20">
                                    <path d="M992.262 871.396l-242.552-242.552c47.054-62.77 75.39-140.67 75.39-225.244 0-205.1-166.216-371.324-371.324-371.324s-371.324 166.216-371.324 371.324 166.216 371.324 371.324 371.324c84.574 0 162.474-28.336 225.244-75.39l242.552 242.552c33.376 33.368 87.48 33.368 120.84 0 33.384-33.376 33.384-87.49 0-120.84zM453.776 603.778c-132.888 0-240.668-107.78-240.668-240.668s107.78-240.668 240.668-240.668 240.668 107.78 240.668 240.668-107.78 240.668-240.668 240.668z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={styles.rightSection}>
                        <button onClick={toggleLanguage} className={styles.langToggle}>
                            {locale === 'en' ? 'العربية' : 'English'}
                        </button>

                        <Link href="/login" className={styles.loginBtn}>
                            Login
                        </Link>

                        <Link href="/post-ad" className={styles.sellBtn}>
                            <div className={styles.sellBtnContent}>
                                <span className={styles.plusIcon}>+</span>
                                <span>{t('nav.sell')}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
