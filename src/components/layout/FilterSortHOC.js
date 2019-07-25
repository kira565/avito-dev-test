import React from 'react'
import styles from './Layout.module.css'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {clearFiltering, dataArraySort, filterData} from "../../redux/redux-store/productsReducer";


const FilterForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field className={styles.form__input} name="from" type="number" component="input" placeholder="Цена от..."/>
        <Field className={styles.form__input} name="to" type="number" component="input" placeholder="до, рублей"/>
        <button type="submit" className={styles.custom__btn}>Filter</button>
    </form>
};
const SortForm = (props) => {
    return <form>
        <label>Сортировка:</label>
        <div>
            <Field name="sortFormat" component="select">
                <option/>
                <option onChange={(e) => {
                    const val = e.target.value;
                    props.onChange(val)
                }} value="byDefault">по популярности
                </option>
                <option value="byPrice">по возрастанию цены</option>
                <option value="byDate">по дате размещения</option>
            </Field>
        </div>
    </form>
};
const FilterReduxForm = reduxForm({
    form: 'FilteringForm',
    destroyOnUnmount: false
})(FilterForm);

const SortReduxForm = reduxForm({
    form: 'SortingForm'
})(SortForm);


export const FilterSortHoc = (Component) => {
    let mapStateToProps = (state) => ({
        filterFrom: state.products.filterFrom,
        filterTo: state.products.filterTo,
        sortType: state.products.sortType,
    });

    class priceSortWrapper extends React.Component {
        handleSubmit = (formData) => {
            this.props.filterData(formData.from, formData.to)
        };
        handleOnChangeSort = (value) => {
            this.props.dataArraySort(value.sortFormat)
        };


        handleFilter = (filterArr, filterType) => {
            if (filterType === 'none') {
                return filterArr
            } else {
                return filterArr.filter(el => el.category === filterType)
            }
        };
        handleSort = (sortArr, sortType) => {
            switch (sortType) {
                case 'byDefault': {
                    return sortArr.sort((a, b) => { return a.id - b.id })
                }
                case 'byPrice': {
                    return sortArr.sort((a, b) => { return a.price - b.price })
                }
                case 'byDate': {
                    return sortArr.sort((a, b) => { return  a.date - b.date})
                }
                default:
                    return sortArr
            }
        };

        handleFilterSort = (filterArr, filterType, from, to, sortType) => {
            if (filterType !== 'localStorageNoFilter') {
                let filtred = this.handleFilter(filterArr, filterType);
                let filtredSorted = this.handleSort(filtred, sortType);

                if (to === null && from === null) {
                    return filtredSorted
                }
                if (to === undefined && from === undefined) {
                    return filtredSorted
                }
                if (to === undefined) {
                    return filtredSorted.filter(el => el.price >= from)
                }
                if (from === undefined) {
                    return filtred.filter(el => el.price <= to)
                }
                if (from !== undefined && to !== undefined) {
                    return filtredSorted.filter(el => el.price >= from && el.price <= to)
                }
            }
        };

        render() {
            const {isFetching, sellersData, setPageLogo, logo, filterType, productsData, filterTo, filterFrom, clearFiltering, sortType} = this.props;
            return <>
                <div className={styles.filter__wrapper}>
                    <FilterReduxForm onSubmit={this.handleSubmit}/>
                    <button className={styles.custom__btn} onClick={clearFiltering}>Clear</button>
                </div>
                <div className={styles.sort__wrapper}>
                    <SortReduxForm onChange={this.handleOnChangeSort}/>
                </div>
                <div className={styles.layout__container}>
                    <Component productsData={this.handleFilterSort(productsData, filterType, filterFrom, filterTo, sortType)}
                               isFetching={isFetching}
                               sellersData={sellersData}
                               setPageLogo={setPageLogo}
                               logo={logo}
                    />
                </div>
            </>

        }
    }

    return connect(mapStateToProps, {filterData, clearFiltering, dataArraySort})(priceSortWrapper);
};

