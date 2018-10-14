import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet"
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router-dom'
import styles from './index.less'
import withStyle from '../../withStyle'

class Translation extends React.Component {
    componentDidMount() {
        if(!this.props.list.length) {
            this.props.getTranslationList()
        }
    }    getList() {
        const { list, login } = this.props
        return login ? <div>
            {
                list.map(v => <div className={styles.item} key={v.id}>{v.title}</div>)
            }
        </div>
            :
            <Redirect to='/'/>
    }

    render() {
        return <React.Fragment>
            <Helmet>
                <title>SSR 练习--翻译列表</title>
                <meta charSet="utf-8" name="description" content="翻译列表的描述" />
            </Helmet>

            <div className={styles.container}>
                {this.getList()}
            </div>
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        list: state.translation.translationList,
        login: state.header.login
    }
}
const mapDispatchToProps = dispatch => ({
    getTranslationList() {
        dispatch(getTranslationList())
    }
})

const ExportTranslation = connect(mapStateToProps, mapDispatchToProps)(withStyle(Translation,styles))

ExportTranslation.loadData = store => {
    return store.dispatch(getTranslationList())
}


export default ExportTranslation
