import React from 'react'
import {Route} from "react-router-dom";
import Immovable from "./immovable/Immovable";
import Cameras from "./cameras/Cameras";
import Auto from "./auto/Auto";
import Laptops from "./laptops/Laptops";
import Favourites from "./favourites/Favourites";
import Main from "./main/Main";


const Layout  = (props) => {
    const {sellersData, date, setPageLogo} = props;
  return <div>
      <Route exact render={ () => <Main {...props} filterType={'none'}/> } path="/"/>
      <Route render={ () => <Immovable {...props} filterType={'immovable'}/>} path="/immovable"/>
      <Route render={ () => <Cameras {...props} filterType={'cameras'}/>} path="/cameras"/>
      <Route render={ () => <Auto {...props} filterType={'auto'}/> } path="/auto"/>
      <Route render={ () => <Laptops {...props} filterType={'laptops'}/> } path="/laptops"/>
      <Route render={ () => <Favourites setPageLogo={setPageLogo} sellersData={sellersData}
                                        date={date} filterType={'localStorageNoFilter'}/> } path="/favourites"/>
  </div>
};

export default Layout