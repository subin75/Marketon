import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../scss/category.scss";

const CATEGORY_MAP = {
    4: '상의',
    14: '치마',
    17: '바지',
    22: '원피스',
    27: '신발',
    35: '가방',
    44: '잠옷',
    49: '수영복',
};

const Category = ({ onCategoryChange }) => {
    const [categories, setCategories] = useState([{ id: 0, cat_name: '전체' }]);
    const [subCategories, setSubCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('전체');
    const [expandedParent, setExpandedParent] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/category.php`)
            .then((res) => {
                const data = res.data;
                const filtered = data
                    .filter(item => CATEGORY_MAP[item.cat_parent])
                    .map(item => ({
                        ...item,
                        cat_name: CATEGORY_MAP[item.cat_parent],
                    }));

                const unique = Array.from(new Map(filtered.map(item => [item.cat_name, item])).values());
                

                setCategories([{ id: 0, cat_name: '전체' }, ...unique]);
                setSubCategories(data);
            })
            .catch((err) => {
                console.error('카테고리 로드 실패:', err);
            });
    }, []);

    const handleClick = (cat_name) => {
        setActiveCategory(cat_name);

        

        if (onCategoryChange) {
            if (cat_name === '전체') {
                onCategoryChange(0);
                setExpandedParent(null);
            } else {
                const cat_parent = Object.entries(CATEGORY_MAP).find(([key, val]) => val === cat_name)?.[0];
                onCategoryChange(cat_parent ? Number(cat_parent) : 0);
                setExpandedParent(Number(cat_parent));
            }
        }
    };

    const handleSubCategoryClick = (subCategoryId, subCategoryName) => {
        setActiveCategory(subCategoryName);
        
        if (onCategoryChange) {
            onCategoryChange(subCategoryId);
        }
    };

    const activeSubCategories = subCategories.filter(
        sub => Number(sub.cat_parent) === expandedParent
    );

    return (
        <>
            <div className="ca">
                {categories.map(cat => (
                    <div
                        className={`category2 ${activeCategory === cat.cat_name ? 'active' : ''}`}
                        key={cat.id || cat.cat_name}
                        onClick={() => handleClick(cat.cat_name)}
                    >
                        {cat.cat_name}
                    </div>
                ))}
            </div>

            {expandedParent && (
                <div className="subcategory-wrap-horizontal">
                    {activeSubCategories.map(sub => (
                        <div
                            key={sub.id}
                            className={`subcategory-item ${activeCategory === sub.cat_name ? 'active' : ''}`}
                            onClick={() => handleSubCategoryClick(Number(sub.id), sub.cat_name , sub.id)}
                        >
                            {sub.cat_name}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Category;