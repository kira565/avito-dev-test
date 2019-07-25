import React from 'react'
import {connect} from "react-redux";
import {getProducts, getSellers} from "../../redux/redux-store/productsReducer";
import Layout from "./Layout";
import PreloaderMain from "../preloaders/PreloaderMain";
import {setPageLogo} from "../../redux/redux-store/headerReducer";


let mapStateToProps = (state) => ({
    productsData: state.products.productsData,
    sellersData: state.products.sellersData,
    isFetching: state.products.isFetching,
    isProductsDataLoaded: state.products.isProductsDataLoaded,
    isSellersDataLoaded: state.products.isSellersDataLoaded,
    randomDate: state.products.randomDate,
    logo: state.header.logo
});

class LayoutContainer extends React.Component {

    componentDidMount() {
            this.props.getProducts();
            this.props.getSellers();
    }

    

    render() {

        const {isFetching, isProductsDataLoaded, isSellersDataLoaded, productsData, sellersData, setPageLogo, logo} = this.props;
        return <>
            {isFetching && <PreloaderMain />}
            {(isProductsDataLoaded && isSellersDataLoaded)
            && <Layout productsData={productsData}
                       isFetching={isFetching}
                       sellersData={sellersData}
                       setPageLogo={setPageLogo}
                       logo={logo}
            />
            }</>
    }
}

export default connect(mapStateToProps, {getProducts, getSellers, setPageLogo})(LayoutContainer);