import React, { useState, useEffect } from 'react';
import { getCategories } from '@/lib/api';
import { Category } from '@/types';
import styles from '@/styles/CategorySelector.module.css';

interface CategorySelectorProps {
    onSelect: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect }) => {
    const [currentLevel, setCurrentLevel] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCategories() {
            setLoading(true);
            const data = await getCategories();
            setCurrentLevel(data.filter(c => c.level === 0));
            setLoading(false);
        }
        loadCategories();
    }, []);

    const handleCatClick = (cat: Category) => {
        onSelect(cat);
    };

    if (loading) return <div className={styles.loading}>Loading categories...</div>;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Choose a category</h2>
            </div>
            <div className={styles.grid}>
                {currentLevel.map((cat) => (
                    <div
                        key={cat.id}
                        className={styles.catCard}
                        onClick={() => handleCatClick(cat)}
                    >
                        <span className={styles.catName}>{cat.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySelector;
