import React from 'react';
import ItemAd from "../ItemAd/ItemAd";
import {FilterSortHoc} from "../FilterSortHOC";
const MAIN = `https://www.avito.st/s/cc/resources/35f5a0d67b53.svg`;


class Main extends React.Component {
    componentDidMount(){
        if (this.props.logo !== MAIN){
            this.props.setPageLogo(MAIN);
        }
    }


    render(){
        const {productsData, sellersData, date} = this.props;
        return <ItemAd productsData={productsData} sellersData={sellersData} date={date}/>
    }

}

export default FilterSortHoc(Main);