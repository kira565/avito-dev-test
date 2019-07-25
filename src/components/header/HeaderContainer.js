import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";


let mapDispatchToProps = (state) => ({
    logo: state.header.logo
});


class HeaderContainer extends React.Component {

    render(){
        return <Header {...this.props}/>
    }
}

export default connect(mapDispatchToProps, {})(HeaderContainer)