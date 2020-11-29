import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../../container/defaultLayout';
class DefaultLayoutContainer extends Component {
    state = {  }

    render() { 
        var {user} = this.props
        return ( 
            <DefaultLayout
                auth = {user.auth}
            />
         );
    }
}
const mapStateToProps = state => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps,null)(DefaultLayoutContainer);