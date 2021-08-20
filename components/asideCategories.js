import CategoriesItem from './categoriesItem';

import offlineCategories from '../db/offlineData/categories';
import {keys} from "lodash"

export default function AsideCategories() {
  

 

  // Offline data
  
    return (
      <ul className="categories">
        {keys(offlineCategories).map((id) => {
          return <CategoriesItem key={id} category={offlineCategories[id]} />;
        })}

        <style jsx>{`
          .categories {
            width: 255px;
            max-width: 255px;
            background: #ffff;
            border-radius: 6px;
            margin-bottom: 30px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          }
          @media (max-width: 1000px) {
            .categories {
              display: none;
            }
          }
        `}</style>
      </ul>
    );

  
}
