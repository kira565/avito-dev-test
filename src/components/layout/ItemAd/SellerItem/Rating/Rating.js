import React from 'react';
import styles from './Rating.module.css'
import star from '../../../../../etc/img/star.png'
import halfstar from '../../../../../etc/img/half-star.png'


const Rating = (props) => {
    const fullstars = Math.floor(props.rating);
    let stars = [];
    for (let i = 1; i <= fullstars; i++){
        stars.push(i)
    }
    return <div className={styles.rating_container}>
        {stars.map((el) => {
            return <span className={styles.star} key={el}><img alt="star" src={star}/></span>
        })}
        <>
            {
                (!Number.isInteger(props.rating)) && <span className={styles.half_star}><img alt="star" src={halfstar}/></span>
            }
        </>
        <span className={styles.rating}>{props.rating}</span>
    </div>;


};

export default Rating