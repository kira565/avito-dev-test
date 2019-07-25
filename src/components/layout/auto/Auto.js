import React from 'react';
import ItemAd from "../ItemAd/ItemAd";
import {FilterSortHoc} from "../FilterSortHOC";
const AUTO = `https://www.avito.st/s/cc/resources/66b125c65751.svg`;


class Auto extends React.Component {
    componentDidMount(){
        if (this.props.logo !== AUTO){
            this.props.setPageLogo(AUTO);
        }
    }
    render() {
        const {productsData, sellersData, date} = this.props;
        return <ItemAd productsData={productsData} sellersData={sellersData} date={date}/>
    }
}

export default FilterSortHoc(Auto)