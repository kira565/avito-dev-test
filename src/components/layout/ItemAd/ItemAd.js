import React from 'react';
import styles from './ItemAd.module.css'
import ProductItem from "../ItemAd/productItem/ProductItem";
import SellerItem from "../ItemAd/SellerItem/SellerItem";

const ItemAd = (props) => {
    const pushToFavorite = (element) => {
        let serialObj = JSON.stringify(element);

            if (!localStorage.getItem(element.id)){
                localStorage.setItem(element.id, serialObj)
            }
            else {
                localStorage.removeItem(element.id);
                props.updateList && props.updateList(element.id);
            }

    };

    return props.productsData.map(el => {
        return <div key={el.id} className={styles.products__container}>
            <ProductItem id={el.id}
                         title={el.title}
                         mainPic={el.pictures ? el.pictures[0] : el.pictures }
                         picArrayLength={el.pictures.length}
                         price={el.price}
                         key={el.id}
                         pushToFavorite ={pushToFavorite}
                         pictures = {el.pictures}
                         relationships = {el.relationships}
                         date = {el.date && el.date.toLocaleString('ru', {
                             day: 'numeric',
                             month: 'long',
                             hour: 'numeric',
                             minute: 'numeric',
                         }).replace(/,/, '')}

            />
            {props.sellersData.map(sEl =>
                Number(el.relationships.seller) ===  Number(sEl.id) &&
                <SellerItem name={sEl.name}
                            rating={sEl.rating}
                            key={el.id}
                />
            )}
        </div>
    });
};

export default ItemAd;