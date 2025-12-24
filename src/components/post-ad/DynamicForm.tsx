import React, { useState, useEffect } from 'react';
import { getCategoryFields } from '@/lib/api';
import { Category, CategoryField } from '@/types';
import styles from '@/styles/DynamicForm.module.css';

interface DynamicFormProps {
    category: Category;
    onBack: () => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ category, onBack }) => {
    const [fields, setFields] = useState<CategoryField[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFields() {
            setLoading(true);
            const data = await getCategoryFields(category.id);
            if (data && data.flatFields) {
                setFields(data.flatFields);
            } else {
                setFields([]);
            }
            setLoading(false);
        }
        loadFields();
    }, [category]);

    if (loading) return <div className={styles.loading}>Loading form fields...</div>;

    // Separate price fields from other details
    const priceFields = fields.filter(f => f.attribute.includes('price'));
    const detailFields = fields.filter(f => !f.attribute.includes('price'));

    return (
        <div className={styles.formContainer}>
            <button onClick={onBack} className={styles.backBtn}>
                <span>←</span> Change Category
            </button>
            <h2 className={styles.title}>Post Your Ad</h2>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                {/* 1. Category Path */}
                <div className={styles.section}>
                    <h3>Selected Category</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                        {category.name}
                    </p>
                </div>

                {/* 2. Basic Details */}
                <div className={styles.section}>
                    <h3>Include some details</h3>
                    <div className={styles.field}>
                        <label>Ad Title*</label>
                        <input type="text" className={styles.input} placeholder="e.g. iPhone 14 Pro Max for sale" />
                        <span className={styles.helperText}>A good title helps buyers find your ad.</span>
                    </div>

                    {detailFields.map(field => (
                        <div key={field.id} className={styles.field}>
                            <label>{field.name}{field.isMandatory ? '*' : ''}</label>
                            {field.valueType === 'enum' ? (
                                <select className={styles.select}>
                                    <option value="">Select {field.name}</option>
                                    {field.choices?.map(choice => (
                                        <option key={choice.id} value={choice.value}>{choice.label}</option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.valueType === 'float' ? 'number' : 'text'}
                                    className={styles.input}
                                    placeholder={`Enter ${field.name}`}
                                />
                            )}
                        </div>
                    ))}

                    <div className={styles.field}>
                        <label>Description*</label>
                        <textarea className={styles.textarea} placeholder="Describe what you are selling..."></textarea>
                    </div>
                </div>

                {/* 3. Price Section */}
                {(priceFields.length > 0 || fields.length === 0) && (
                    <div className={styles.section}>
                        <h3>Set a price</h3>
                        {priceFields.length > 0 ? priceFields.map(field => (
                            <div key={field.id} className={styles.field}>
                                <label>{field.name}{field.isMandatory ? '*' : ''}</label>
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 600 }}>$</span>
                                    <input
                                        type="number"
                                        className={styles.input}
                                        style={{ flex: 1 }}
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                        )) : (
                            <div className={styles.field}>
                                <label>Price*</label>
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 600 }}>$</span>
                                    <input
                                        type="number"
                                        className={styles.input}
                                        style={{ flex: 1 }}
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* 4. Photos Section */}
                <div className={styles.section}>
                    <h3>Upload photos</h3>
                    <p className={styles.helperText}>Adding more photos increases your chances of selling.</p>
                    <div className={styles.photoGrid}>
                        <div className={styles.photoBox}>
                            <span className={styles.photoIcon}>📷</span>
                            <span style={{ fontSize: '12px' }}>Add Photo</span>
                        </div>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={styles.photoBox}>
                                <span className={styles.photoIcon}>📷</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Location Section */}
                <div className={styles.section}>
                    <h3>Confirm your location</h3>
                    <div className={styles.field}>
                        <label>Location*</label>
                        <select className={styles.select}>
                            <option value="">Select Location</option>
                            <option value="beirut">Beirut</option>
                            <option value="mount-lebanon">Mount Lebanon</option>
                            <option value="north-lebanon">North Lebanon</option>
                            <option value="south-lebanon">South Lebanon</option>
                        </select>
                    </div>
                </div>

                {/* 6. Contact Info */}
                <div className={styles.section}>
                    <h3>Review your details</h3>
                    <div className={styles.field}>
                        <label>Phone Number</label>
                        <input type="tel" className={styles.input} defaultValue="+961" />
                    </div>
                </div>

                <div className={styles.submitSection}>
                    <button className={styles.submitBtn}>Post Now</button>
                </div>
            </form>
        </div>
    );
};

export default DynamicForm;
