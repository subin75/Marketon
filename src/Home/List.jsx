import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Category from '../common/Category';
import Bottom from '../common/Bottom';
import Heart from '../Icon/Heart';
import Fe_heart from '../Icon/Fe_heart';
import Loginpl from '../Popup/Loginpl';
import "../scss/list.scss";

const List = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [likedItems, setLikedItems] = useState(() => {
    const saved = localStorage.getItem('likedItems');
    return saved ? JSON.parse(saved) : [];
  });

  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const loggedInUser = localStorage.getItem('userEmail') || '';
  const userEmail = localStorage.getItem("userEmail");

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('query');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}category.php`)
      .then(res => setCategories(res.data))
      .catch(err => console.error('카테고리 불러오기 실패:', err));
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}p_list.php`)
      .then(res => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch(err => console.error("게시물 불러오기 실패:", err));
  }, []);

  useEffect(() => {
    if (!products.length) return;

    if (query) {
      const searched = products.filter(product =>
        product.p_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(searched);
    } else {
      if (selectedCategory === 0) {
  setFilteredProducts(products);
} else {
  const filtered = products.filter(product => {
    const productCategory = categories.find(cat => String(cat.id) === String(product.cat_id));
    if (!productCategory) return false;
    return (
      String(productCategory.cat_parent) === String(selectedCategory) || 
      String(productCategory.id) === String(selectedCategory)
    );
  });
  setFilteredProducts(filtered);
}
    }
  }, [query, products, selectedCategory, categories]);

  useEffect(() => {
    if (!loggedInUser) return;

    axios.get(`${process.env.REACT_APP_URL}get_likes.php?user=${loggedInUser}`)
      .then(res => {
        if (res.data.success) {
          localStorage.setItem('likedItems', JSON.stringify(res.data.data));
          setLikedItems(res.data.data);
        } else {
          console.error('좋아요 목록 불러오기 실패:', res.data.message);
        }
      })
      .catch(err => {
        console.error('좋아요 목록 서버 통신 실패:', err);
      });
  }, [loggedInUser]);

  useEffect(() => {
    const syncLikedItems = () => {
      axios.get(`${process.env.REACT_APP_URL}get_likes.php?user=${userEmail}`)
        .then(res => {
          if (res.data.success) {
            localStorage.setItem('likedItems', JSON.stringify(res.data.data));
            setLikedItems(res.data.data);
          } else {
            console.error('좋아요 목록 불러오기 실패:', res.data.message);
          }
        })
        .catch(err => {
          console.error('좋아요 목록 서버 통신 실패:', err);
        });
    };

    window.addEventListener('storage', syncLikedItems);
    return () => window.removeEventListener('storage', syncLikedItems);
  }, []);

  const toggleLike = (product) => {
    if (!loggedInUser) {
      setShowLoginPopup(true);
      return;
    }

    const id = product.id;
    const sumnal = product.p_thumb ? product.p_thumb.split(',')[0] : '';

    axios.post(`${process.env.REACT_APP_URL}get_likes.php`, {
      user: loggedInUser,
      productId: id,
      product_name: product.p_name,
      unit_price: product.p_price,
      img_url: `${process.env.REACT_APP_IMGPATH}${sumnal}`
    })
      .then(res => {
        if (res.data.success) {
          setLikedItems(prev => {
            let updated;
            if (prev.includes(id)) {
              updated = prev.filter(item => item !== id);
            } else {
              updated = [...prev, id];
            }
            localStorage.setItem('likedItems', JSON.stringify(updated));
            window.dispatchEvent(new Event('storage'));
            return updated;
          });
        } else {
          alert("좋아요 처리 실패: " + res.data.message);
        }
      })
      .catch(err => {
        console.error("좋아요 요청 실패:", err);
        alert("서버 요청 중 오류가 발생했습니다.");
      });
  };

  const handleCategoryChange = (cat_parent) => {
    setSelectedCategory(cat_parent);
  };

  const handleProductClick = (product, thumb) => {
    if (!loggedInUser) {
      setShowLoginPopup(true);
      return;
    }

    const storageKey = `recentViewed_${loggedInUser}`;
    const viewedItems = JSON.parse(localStorage.getItem(storageKey)) || [];

    const newItem = {
      id: product.id,
      name: product.p_name,
      price: product.p_price,
      thumb: thumb,
    };

    const updatedItems = [newItem, ...viewedItems.filter(item => item.id !== product.id)];
    localStorage.setItem(storageKey, JSON.stringify(updatedItems.slice(0, 10)));

    navigate(`/detail/${product.id}`);
  };

  return (
    <div className="body">
      <Header />
      {!query && <Category product={products} onCategoryChange={handleCategoryChange} />}

      <div className="list-list">
        {filteredProducts.length === 0 ? (
          <p>상품이 없습니다.</p>
        ) : (
          filteredProducts.map(product => {
            const sumnal = product.p_thumb ? product.p_thumb.split(',')[0] : '';
            const isLiked = likedItems.filter(item => item.product_id == product.id).length;
            return (
              <div key={product.id} className="list-card">
                <div className="image-wrapper">
                  <img
                    src={`${process.env.REACT_APP_IMGPATH}${sumnal}`}
                    className="list-img"
                    alt={product.p_name}
                    style={query ? { marginTop: '30px' } : {}}
                    onClick={() => handleProductClick(product, sumnal)}
                  />
                  <div className="heart-icon" onClick={() => toggleLike(product)}>
                    {isLiked ? <Fe_heart /> : <Heart />}
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
      {showLoginPopup && (
        <Loginpl 
          onClose={() => setShowLoginPopup(false)} 
          onCancel={() => {
            setShowLoginPopup(false);
          }} 
        />
      )}
    </div>
  );
};

export default List;