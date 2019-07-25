import React from 'react';
import styles from './SellerItem.module.css'
import Rating from "./Rating/Rating";

const SellerItem = (props) => {
    return <div className={styles.product_item__seller}>
            <span className={styles.seller__name}>
                {props.name}
            </span>
        <div id="starbar" className={styles.seller_rating}><Rating rating={props.rating}/></div>
    </div>
};

export default SellerItem