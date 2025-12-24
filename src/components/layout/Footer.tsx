import React from 'react';
import styles from '@/styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <div className="container">
                    <div className={styles.linksGrid}>
                        <div>
                            <h4>POPULAR CATEGORIES</h4>
                            <ul>
                                <li>Cars</li>
                                <li>Flats for rent</li>
                                <li>Jobs</li>
                                <li>Mobile Phones</li>
                            </ul>
                        </div>
                        <div>
                            <h4>TRENDING SEARCHES</h4>
                            <ul>
                                <li>Bikes</li>
                                <li>Watches</li>
                                <li>Books</li>
                                <li>Dogs</li>
                            </ul>
                        </div>
                        <div>
                            <h4>ABOUT US</h4>
                            <ul>
                                <li>About EMPG</li>
                                <li>OLX Blog</li>
                                <li>Contact Us</li>
                                <li>OLX for Businesses</li>
                            </ul>
                        </div>
                        <div>
                            <h4>OLX</h4>
                            <ul>
                                <li>Help</li>
                                <li>Sitemap</li>
                                <li>Legal & Privacy information</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <div className="container">
                    <div className={styles.bottomContent}>
                        <span>Free Classifieds in Lebanon. © 2006-{new Date().getFullYear()} OLX</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
