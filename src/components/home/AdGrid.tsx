import React from 'react';
import { Ad } from '@/types';
import AdCard from './AdCard';
import styles from '@/styles/AdGrid.module.css';

interface AdGridProps {
    ads: Ad[];
    title: string;
}

const AdGrid: React.FC<AdGridProps> = ({ ads, title }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <div className={styles.grid}>
                {ads.map((ad) => (
                    <AdCard key={ad.id} ad={ad} />
                ))}
            </div>
        </section>
    );
};

export default AdGrid;
