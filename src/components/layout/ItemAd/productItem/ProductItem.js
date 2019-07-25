import React from 'react';
import styles from './Productitem.module.css'
import favourite from '../../../../etc/img/like_icon.png'
import notFavourite from '../../../../etc/img/not_liked.png'

class ProductItem extends React.Component {
    state = {
        checked: false
    };

    componentDidMount() {
        let value = localStorage.getItem(this.props.id);
        if (value !== null) {
            let objValue = JSON.parse(value);
            if (objValue.id === Number(this.props.id)) {
                this.setState({checked: true})
            }
        }
    }
    render() {
        const {id, title, mainPic, picArrayLength, price, pushToFavorite, pictures, relationships, date} = this.props;
        return <div className={styles.product_item__container}>
            <div className={styles.product_item__photo}>
                <img alt="img" src={mainPic}/>
                <span className={styles.photo_length}>{picArrayLength}</span>
                <form>
                    <label className={styles.product__add_favourite}>
                        {this.state.checked
                            ? <img alt="fav" src={favourite}/>
                            : <img alt="fav" src={notFavourite}/>
                        }
                        <input checked={this.state.checked}
                               type="checkbox"
                               onChange={() => {
                                   pushToFavorite({
                                       id: Number(id),
                                       title,
                                       price,
                                       pictures,
                                       date,
                                       relationships: {seller: Number(relationships.seller)}
                                   });
                                   this.state.checked ? this.setState({checked: false}) : this.setState({checked: true})
                               }}
                        />
                    </label>
                </form>
            </div>
            <span className={styles.product_item__header}>{title[0].toUpperCase() + title.slice(1)}</span>
            <span className={styles.product_item__price}>
           {
               price
                   ? Number(price).toLocaleString('ru-RU', {
                       style: 'currency',
                       currency: 'RUB',
                       minimumFractionDigits: 0
                   })
                   : 'Цена не указана'
           }
        </span>
            <span className={styles.product_item__date}>
                {date}</span>
        </div>
    }
}

export default ProductItem