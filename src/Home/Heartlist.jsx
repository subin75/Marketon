import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Category2 from '../common/Category2';
import Bottom from '../common/Bottom';
import Fe_heart from '../Icon/Fe_heart';
import Heart from '../Icon/Heart';
import Loginpl from '../Popup/Loginpl';
import LoadingPopup from '../Popup/LoadingPopup';
import "../scss/list.scss";

const HeartList = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [likedProductIds, setLikedProductIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail) {
      setShowLoginPopup(true);
      setIsLoading(false);
      return;
    }

    const fetchAllData = async () => {
      try {
        const [likesRes, productsRes, categoriesRes] = await Promise.all([
          axios.get(`${process.env.REACT_APP_URL}get_likes.php?user=${userEmail}`),
          axios.get(`${process.env.REACT_APP_URL}p_list.php`),
          axios.get(`${process.env.REACT_APP_URL}category.php`)
        ]);

        // 좋아요 목록
        if (likesRes.data.success) {
          setLikedProducts(likesRes.data.data);
          setLikedProductIds(likesRes.data.data.map(item => Number(item.product_id)));
          localStorage.setItem('likedItems', JSON.stringify(likesRes.data.data));
        } else {
          console.error('좋아요 목록 불러오기 실패:', likesRes.data.message);
        }

        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
      } catch (err) {
        console.error('데이터 불러오기 실패:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, [userEmail]);

  const toggleLike = (product) => {
    if (!userEmail) {
      setShowLoginPopup(true);
      return;
    }

    const sumnal = product.p_thumb ? product.p_thumb.split(',')[0] : '';

    axios.post(`${process.env.REACT_APP_URL}get_likes.php`, {
      user: userEmail,
      productId: product.id,
      product_name: product.p_name,
      unit_price: product.p_price,
      img_url: `${process.env.REACT_APP_IMGPATH}${sumnal}`
    })
    .then(res => {
      if (res.data.success) {
        const id = Number(product.id);
        setLikedProductIds(prev =>
          res.data.liked ? [...prev, id] : prev.filter(pid => pid !== id)
        );

        setLikedProducts(prev =>
          res.data.liked
            ? [...prev, {
                product_id: String(product.id),
                product_name: product.p_name,
                unit_price: String(product.p_price),
                img_url: sumnal,
                user: userEmail
              }]
            : prev.filter(item => Number(item.product_id) !== product.id)
        );
      } else {
        alert(`좋아요 처리 실패: ${res.data.message}`);
      }
    })
    .catch(err => {
      console.error('좋아요 서버 통신 오류:', err);
      alert('서버 오류가 발생했습니다.');
    });
  };

  const handleProductClick = (product, thumb) => {
    const viewedItems = JSON.parse(localStorage.getItem('recentViewed')) || [];
    const newItem = {
      id: product.id,
      name: product.p_name,
      price: product.p_price,
      thumb: thumb,
    };
    const updatedItems = [newItem, ...viewedItems.filter(item => item.id !== product.id)];
    localStorage.setItem('recentViewed', JSON.stringify(updatedItems.slice(0, 10)));

    navigate(`/detail/${product.id}`);
  };

  const handleCategoryChange = (cat_parent) => {
    setSelectedCategory(cat_parent);
  };

  const likedAndFiltered = products.filter(product => {
    const isLiked = likedProductIds.includes(Number(product.id));
    if (!isLiked) return false;
    if (selectedCategory === 0) return true;

    const category = categories.find(cat => String(cat.id) === String(product.cat_id));
    return category && String(category.cat_parent) === String(selectedCategory);
  });

  if (showLoginPopup) {
    return (
      <Loginpl
        onClose={() => setShowLoginPopup(false)}
        onCancel={() => {
          setShowLoginPopup(false);
          navigate('/Home/List');
        }}
      />
    );
  }

  return (
    <div className="body">
      <Header />
      <Category2 onCategoryChange={handleCategoryChange} />

      <div className="list-list">
        {isLoading ? (
          <LoadingPopup />
        ) : likedAndFiltered.length === 0 ? (
          <p>좋아요한 상품이 없습니다.</p>
        ) : (
          likedAndFiltered.map(product => {
            const thumb = product.p_thumb ? product.p_thumb.split(',')[0] : '';
            return (
              <div key={product.id} className="list-card">
                <div className="image-wrapper">
                  <img
                    src={`${process.env.REACT_APP_IMGPATH}${thumb}`}
                    className="list-img"
                    alt={product.p_name}
                    onClick={() => handleProductClick(product, thumb)}
                  />
                  <div className="heart-icon" onClick={() => toggleLike(product)}>
                    {likedProductIds.includes(Number(product.id)) ? <Fe_heart /> : <Heart />}
                  </div>
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