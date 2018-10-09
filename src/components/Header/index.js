import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'

class Header extends Component {
    render() {
        const { login, handleLogin, handleLogout } = this.props
        return (
            <div className="header">
                <Link to='/'>首页</Link>
                {
                    login ? <Fragment>
                            <Link to='/login'>翻译列表</Link>
                            <div onClick={handleLogout}>退出</div>
                        </Fragment>
                        :
                        <div onClick={ handleLogin }>登陆</div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.header.login
    }
}

const mapDispatchToProps = dispatch => ({
    handleLogin() {
        dispatch(actions.login())
    },
    handleLogout() {
        dispatch(actions.logout())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
