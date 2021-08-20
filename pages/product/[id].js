import { useRouter } from 'next/router';

import {
  FaCartArrowDown,
  FaCartPlus,
  FaRegHeart,
  FaHeart,
} from 'react-icons/fa';
import StarRatings from 'react-star-ratings';

import Page from '../../components/page';

import { toggleCart, toggleWishlist } from '../../utils/toggleProductStates';


import offlineProducts from '../../db/offlineData/products';

export default function Home({data}) {
  const router = useRouter();
  
 
  const {
    id
  } = data;
  

  
  return (
    <Page title="Quantum E-commerce - Products">
      <article>
        

        <div className="product-img-box">
          
          <img className="product-img" src={offlineProducts[id].img_url} />
        </div>
        
        <h1 className="product-name">{offlineProducts[id].name}</h1>

        <h3 className="product-description">
          {offlineProducts[id].description}
        </h3>

        <div className="rating">
          <StarRatings
            rating={parseFloat(offlineProducts[id].rating)}
            starRatedColor="#F9AD3D"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="1px"
          />
        </div>

        <div className="price">
          <p className="price-value">UAN{" "}{offlineProducts[id].price}</p>
          
        </div>

        <style jsx>{`
          article {
            display: flex;
            align-items: center;
            flex-direction: column;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            padding: 24px;
            background: white;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
            border-radius: 6px;
          }
          .top-buttons {
            margin-bottom: 24px;
            align-self: flex-end;
          }
          .top-buttons .add-wishlist {
            background: none;
            border: none;
          }
          .top-buttons .add-wishlist:focus {
            outline: none;
          }
          .product-img-box {
            margin-bottom: 28px;
          }
          .product-img {
            width: 320px;
            height: 230px;
            object-fit: contain;
          }
          .product-name {
            width: 80%;
            line-height: 20px;
            text-decoration: none;
            font-weight: 500;
            font-size: 22px;
            text-align: center;
            color: #666666;
            margin-bottom: 28px;
          }
          .product-description {
            width: 40%;
            line-height: 22px;
            text-decoration: none;
            font-weight: 400;
            font-size: 14px;
            text-align: center;
            color: #666666;
            margin-bottom: 24px;
          }
          .rating {
            margin-bottom: 18px;
          }
          .price {
            display: flex;
            align-items: center;
            font-weight: 900;
            font-size: 20px;
            color: #666666;
            margin-bottom: 20px;
          }
          .price .add-cart {
            background: none;
            border: none;
            margin-left: 5px;
          }
          .price .add-cart:focus {
            outline: none;
          }
          @media (max-width: 1000px) {
            .product-img {
              width: 225px;
              height: 180px;
              margin-bottom: 28px;
            }
            .product-name {
              width: 80%;
              line-height: 20px;
              text-decoration: none;
              font-weight: 500;
              font-size: 18px;
              text-align: center;
              color: #666666;
              margin-bottom: 18px;
            }
            .product-description {
              width: 80%;
              line-height: 22px;
              text-decoration: none;
              font-weight: 400;
              font-size: 14px;
              text-align: center;
              color: #666666;
              margin-bottom: 18px;
            }
          }
        `}</style>
      </article>
    </Page>
  );
}
Home.getInitialProps = async function ({ query }) {
  let data = {};
  let error = {};
  
  data={
    id:query.id
    
  }

  return {
    data,

  };
};
