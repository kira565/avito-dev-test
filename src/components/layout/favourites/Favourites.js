import React from 'react';
import ItemAd from "../ItemAd/ItemAd";
import styles from "../Layout.module.css"
const MAIN = `https://www.avito.st/s/cc/resources/35f5a0d67b53.svg`;

class Favourites extends React.Component{
    componentDidMount(){
        if (this.props.logo !== MAIN){
            this.props.setPageLogo(MAIN);
        }
    }

    //Вспомогательная функция для изменения стейта и ре-рендера компонента "Избранное" при оперировании элементами локального хранилища
    updateList = (id) => {
        this.setState({
            id
        })
    };

    render(){
        const {sellersData, date} = this.props;
        const storageData = Object.keys(localStorage).map(item => JSON.parse(localStorage[item]));
        return <div className={styles.layout__container}>
            <ItemAd sellersData={sellersData} productsData={storageData} date={date} updateList={this.updateList}/>
        </div>
       }
}

export default Favourites