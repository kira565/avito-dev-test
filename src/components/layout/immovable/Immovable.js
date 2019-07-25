import React from 'react';
import ItemAd from "../ItemAd/ItemAd";
import {FilterSortHoc} from "../FilterSortHOC";
const IMMOVABLE = `https://www.avito.st/s/cc/resources/d54fb5cfa269.svg`;

class Immovable extends React.Component {
    componentDidMount(){
        if (this.props.logo !== IMMOVABLE){
            this.props.setPageLogo(IMMOVABLE);
        }
    }
    render(){
        const {productsData, sellersData, date} = this.props;
        return <ItemAd productsData={productsData} sellersData={sellersData} date={date}/>
    }
}

export default FilterSortHoc(Immovable);