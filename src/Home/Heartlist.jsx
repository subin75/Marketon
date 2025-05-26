import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Category from '../common/Category';
import Bottom from '../common/Bottom';
import Fe_heart from '../Icon/Fe_heart';
import Loginpl from '../Popup/Loginpl';
import "../scss/list.scss";

const HeartList = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (!storedEmail) {
      setShowLoginPopup(true);
      return;
    }
    
    // 좋아요 누른 항목 불러오기
    axios.get(`${process.env.REACT_APP_URL}get_likes.php?user=${storedEmail}`)
      .then(res => {
        if (res.data.success) {
          setLikedProducts(res.data.data);
        } else {
          console.error('좋아요 목록 불러오기 실패:', res.data.message);
        }
      })
      .catch(err => {
        console.error('좋아요 목록 서버 통신 실패:', err);
      });

    // 전체 상품 목록 불러오기
    axios.get(`${process.env.REACT_APP_URL}p_list.php`)
      .then(res => setProducts(res.data))
      .catch(err => console.error('상품 불러오기 실패:', err));

    // 카테고리 목록 불러오기
    axios.get(`${process.env.REACT_APP_URL}category.php`)
      .then(res => setCategories(res.data))
      .catch(err => console.error('카테고리 불러오기 실패:', err));
  }, []);

  // 좋아요 토글 함수
  const toggleLike = (product) => {
    const storedEmail = localStorage.getItem("userEmail");
    if (!storedEmail) {
      setShowLoginPopup(true);
      return;
    }

    axios.post(`${process.env.REACT_APP_URL}get_likes.php`, {
      user: storedEmail,
      productId: product.id,
      product_name: product.p_name,
      unit_price: product.p_price,
      img_url: product.p_thumb ? product.p_thumb.split(',')[0] : ''
    })
    .then(res => {
      if (res.data.success) {
        if (res.data.liked) {
          setLikedProducts(prev => [...prev, {
            product_id: String(product.id),
            product_name: product.p_name,
            unit_price: String(product.p_price),
            img_url: product.p_thumb ? product.p_thumb.split(',')[0] : '',
            user: storedEmail
          }]);
        } else {
          setLikedProducts(prev => prev.filter(item => Number(item.product_id) !== product.id));
        }
      } else {
        alert(`좋아요 처리 실패: ${res.data.message}`);
      }
    })
    .catch(err => {
      console.error('좋아요 서버 통신 오류:', err);
      alert('서버 오류가 발생했습니다.');
    });
  };

  const handleProductClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleCategoryChange = (cat_parent) => {
    setSelectedCategory(cat_parent);
  };

  const handleCancelPopup = () => {
    navigate('/Home/List');
  };

  // 좋아요한 product_id 리스트 추출
  const likedProductIds = likedProducts.map(item => Number(item.product_id));

  // 좋아요 + 필터 적용된 상품 리스트
  const likedAndFiltered = products.filter(product => {
    const isLiked = likedProductIds.includes(Number(product.id));
    if (!isLiked) return false;
    if (selectedCategory === 0) return true;

    const category = categories.find(cat => String(cat.id) === String(product.cat_id));
    return category && String(category.cat_parent) === String(selectedCategory);
  });

  if (showLoginPopup) {
    return <Loginpl onCancel={handleCancelPopup} />;
  }

  return (
    <div className="body">
      <Header />
      <Category onCategoryChange={handleCategoryChange} />

      <div className="list-list">
        {likedAndFiltered.length === 0 ? (
          <p>좋아요한 상품이 없습니다.</p>
        ) : (
          likedAndFiltered.map(product => {
            const thumb = product.p_thumb ? product.p_thumb.split(',')[0] : '';
            return (
              <div key={product.id} className="list-card">
                <div 
                  className="image-wrapper"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={`${process.env.REACT_APP_IMGPATH}${thumb}`}
                    className="list-img"
                    alt={product.p_name}
                  />
                </div>
                <div className="heart-icon2" onClick={() => toggleLike(product)}>
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