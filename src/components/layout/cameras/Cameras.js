import React from 'react';
import ItemAd from "../ItemAd/ItemAd";
import {FilterSortHoc} from "../FilterSortHOC";

const CAMERAS = `https://www.avito.st/s/cc/resources/2753b43703a3.svg`;

class Cameras extends React.Component {
    componentDidMount(){
        if (this.props.logo !== CAMERAS){
            this.props.setPageLogo(CAMERAS);
        }
    }
    render(){
        const {productsData, sellersData, date} = this.props;
        return <ItemAd productsData={productsData} sellersData={sellersData} date={date}/>
    }
}

export default FilterSortHoc(Cameras)