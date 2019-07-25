import {productsAPI} from "../../api/api";

const SET_PRODUCTS_DATA = 'SET_PRODUCTS_DATA';
const SET_SELLERS_DATA = 'SET_SELLERS_DATA';
const TOGGLE_FETCHER = 'TOGGLE_FETCHER';
const IS_PRODUCTS_DATA_LOADED = 'IS_DATA_LOADING_IN_PROGRESS';
const IS_SELLERS_DATA_LOADED = 'IS_SELLERS_DATA_LOADED';
const PUSH_DATE = 'PUSH_DATE';
const FILTER_DATA = 'FILTER_DATA';
const SORT_DATA = 'SORT_DATA';
const STATE_FIELD = 'STATE_FIELD';
export const RESET_FILTER = 'RESET_FILTER';

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


let initialState = {
    productsData: null,
    sellersData: null,
    isFetching: false,
    isProductsDataLoaded: false,
    isSellersDataLoaded: false,
    filterFrom: null,
    filterTo: null
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_DATA:
            return {
                ...state,
                productsData: action.products,
            };
        case TOGGLE_FETCHER: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case IS_PRODUCTS_DATA_LOADED: {
            return {
                ...state,
                isProductsDataLoaded: action.isLoadedProducts
            };
        }
        case SET_SELLERS_DATA: {
            return {
                ...state,
                sellersData: action.sellers
            };
        }
        case IS_SELLERS_DATA_LOADED: {
            return {
                ...state,
                isSellersDataLoaded: action.isLoadedSellers
            };
        }
        case PUSH_DATE: {
            return {
                ...state,
                randomDate: action.date
            };
        }
        case FILTER_DATA: {
            return {
                ...state,
                filterFrom: action.from,
                filterTo: action.to
            }
        }
        case RESET_FILTER: {
            return {
                ...state,
                filterFrom: null,
                filterTo: null
            }
        }
        case STATE_FIELD: {
            return {
                ...state,
                productsData: state.productsData.map(el => ({
                    ...el,
                    date: randomDate(new Date(2018, 0, 1), new Date(2019, 6, 10))
                }))
            }
        }
        case SORT_DATA: {
            return {
                ...state,
                sortType: action.sortType
            };
        }
        default:
            return state
    }
};
//AC
export const setProductsData = (products) => ({type: SET_PRODUCTS_DATA, products});
export const setSellersData = (sellers) => ({type: SET_SELLERS_DATA, sellers});
export const toggleFetcher = (isFetching) => ({type: TOGGLE_FETCHER, isFetching});
export const isProductsDataLoaded = (isLoadedProducts) => ({type: IS_PRODUCTS_DATA_LOADED, isLoadedProducts});
export const isSellersDataLoaded = (isLoadedSellers) => ({type: IS_SELLERS_DATA_LOADED, isLoadedSellers});
export const filterData = (from, to) => ({type: FILTER_DATA, from, to});
export const clearFiltering = () => ({type: RESET_FILTER});
export const getDateToEach = () => ({type: STATE_FIELD});
export const dataArraySort = (sortType) => ({type: SORT_DATA, sortType});


//Thunk
export const getProducts = () => {
    return (dispatch) => {
        dispatch(toggleFetcher(true));
        productsAPI.getProducts()
            .then(data => {
                dispatch(toggleFetcher(false));
                dispatch(setProductsData(data.data));
                dispatch(isProductsDataLoaded(true));
                dispatch(getDateToEach())
            })
    }
};

export const getSellers = () => {
    return (dispatch) => {
        dispatch(toggleFetcher(true));
        productsAPI.getSellers()
            .then(data => {
                dispatch(toggleFetcher(false));
                dispatch(setSellersData(data.data));
                dispatch(isSellersDataLoaded(true));
            })
    }
};

export default productsReducer
