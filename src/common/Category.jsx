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
    const [activeCategory, setActiveCategory] = useState('전체');
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/category.php`)
        .then((res) => {
            const filtered = res.data
            .filter(item => CATEGORY_MAP[item.cat_parent])
            .map(item => ({
                ...item,
                cat_name: CATEGORY_MAP[item.cat_parent],
            }));
            
            const unique = Array.from(new Map(filtered.map(item => [item.cat_name, item])).values());
            
            setCategories([{ id: 0, cat_name: '전체' }, ...unique]);
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
        } else {
            const cat_parent = Object.entries(CATEGORY_MAP).find(([key, val]) => val === cat_name)?.[0];
            onCategoryChange(cat_parent ? Number(cat_parent) : 0);
        }
    }
};

return (
<div className="ca">
    {categories.map(cat => (
        <div
        key={cat.id || cat.cat_name}
        className={`category2 ${activeCategory === cat.cat_name ? 'active' : ''}`}
        onClick={() => handleClick(cat.cat_name)}
        >
            {cat.cat_name}
        </div>
    ))}
    </div>
    );
};

export default Category;