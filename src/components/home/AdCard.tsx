import React from 'react';
import { Ad } from '@/types';
import styles from '@/styles/AdCard.module.css';

interface AdCardProps {
    ad: Ad;
}

const AdCard: React.FC<AdCardProps> = ({ ad }) => {
    // Format date nicely
    const date = new Date(ad.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {ad.imageUrl ? (
                    <img src={ad.imageUrl} alt={ad.title} className={styles.adImage} />
                ) : (
                    <div className={styles.placeholderImg}>
                        <span>{ad.title.substring(0, 1)}</span>
                    </div>
                )}
                <div className={styles.wishlistBtn}>
                    <svg viewBox="0 0 1024 1024" width="20" height="20">
                        <path d="M833.4 116a246.3 246.3 0 0 0-348.4 0l-73 73-73-73a246.3 246.3 0 0 0-348.4 348.4l384.8 384.9a51.2 51.2 0 0 0 72.4 0l385.6-385.6A246.3 246.3 0 0 0 833.4 116z" fill="currentColor" />
                    </svg>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.price}>
                    {ad.currency} {ad.price.toLocaleString()}
                </div>
                <h3 className={styles.title}>{ad.title}</h3>
                <div className={styles.details}>
                    {ad.attributes.year && <span>{ad.attributes.year}</span>}
                    {ad.attributes.mileage && <span>{ad.attributes.mileage}</span>}
                    {ad.attributes.transmission && <span>{ad.attributes.transmission}</span>}
                    {ad.attributes.bedrooms && <span>{ad.attributes.bedrooms} bd</span>}
                    {ad.attributes.bathrooms && <span>{ad.attributes.bathrooms} ba</span>}
                    {ad.attributes.area && <span>{ad.attributes.area} sqft</span>}
                </div>
                <div className={styles.footer}>
                    <span className={styles.location}>{ad.location}</span>
                    <span className={styles.date}>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default AdCard;
