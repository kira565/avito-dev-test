import React from 'react';
import ItemAd from "../ItemAd/ItemAd";
import {FilterSortHoc} from "../FilterSortHOC";
const LAPTOPS = `https://www.avito.st/s/cc/resources/f3a102184091.svg`;


class Laptops extends React.Component {
    componentDidMount(){
        if (this.props.logo !== LAPTOPS){
            this.props.setPageLogo(LAPTOPS);
        }
    }
    render(){
        const {productsData, sellersData, date} = this.props;
        return <ItemAd productsData={productsData} sellersData={sellersData} date={date}/>
    }
}

export default FilterSortHoc(Laptops);