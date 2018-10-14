import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'
import styles from './index.less'
import withStyle from '../../withStyle'

class Header extends Component {

    render() {
        const { login, handleLogin, handleLogout } = this.props
        return (
            <div className={styles.container}>
                <Link to='/' className={styles.item}>首页</Link>
                {
                    login ? <Fragment>
                            <Link to='/translation' className={styles.item}>翻译列表</Link>
                            <div onClick={handleLogout} className={styles.item}>退出</div>
                        </Fragment>
                        :
                        <div onClick={ handleLogin } className={styles.item}>登陆</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(withStyle(Header, styles))
