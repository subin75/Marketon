import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Category from '../common/Category';
import Bottom from '../common/Bottom';
import Fe_heart from '../Icon/Fe_heart';
import "../scss/list.scss";

const HeartList = () => {
  const [likedItems, setLikedItems] = useState(() => {
    const saved = localStorage.getItem('likedItems');
    return saved ? JSON.parse(saved) : [];
  });
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://subin01.dothome.co.kr/admin/api/p_list.php')
      .then(res => setProducts(res.data))
      .catch(err => console.error('상품 불러오기 실패:', err));

    axios.get('http://subin01.dothome.co.kr/admin/api/category.php')
      .then(res => setCategories(res.data))
      .catch(err => console.error('카테고리 불러오기 실패:', err));
  }, []);

  const toggleLike = (id) => {
    let updatedLikes;
    if (likedItems.includes(id)) {
      updatedLikes = likedItems.filter(item => item !== id);
    } else {
      updatedLikes = [...likedItems, id];
    }
    setLikedItems(updatedLikes);
    localStorage.setItem('likedItems', JSON.stringify(updatedLikes));
  };

  const handleProductClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleCategoryChange = (cat_parent) => {
    setSelectedCategory(cat_parent);
  };

  // 좋아요 + 카테고리 필터
  const likedProducts = products.filter(product => {
    if (!likedItems.includes(product.id)) return false;

    if (selectedCategory === 0) return true;

    const category = categories.find(cat => String(cat.id) === String(product.cat_id));
    return category && String(category.cat_parent) === String(selectedCategory);
  });

  return (
    <div className="body">
      <Header />
      <Category onCategoryChange={handleCategoryChange} />

      <div className="list-list">
        {likedProducts.length === 0 ? (
          <p>좋아요한 상품이 없습니다.</p>
        ) : (
          likedProducts.map(product => {
            const sumnal = product.p_thumb ? product.p_thumb.split(',')[0] : '';
            return (
              <div key={product.id} className="list-card">
                <div 
                  className="image-wrapper"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={`${process.env.REACT_APP_IMGPATH}${sumnal}`}
                    className="list-img"
                    alt={product.p_name}
                  />
                </div>
                <div className="heart-icon2" onClick={() => toggleLike(product.id)}>
                  <Fe_heart />
                </div>
                <div className="list-info">
                  <div className="list-title">{product.p_name}</div>
                  <div className="list-price">{Number(product.p_price).toLocaleString()}원</div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Bottom />
    </div>
  );
};

export default HeartList;