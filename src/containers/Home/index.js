import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet"
import { fetchHomeList } from "./store/actions";
import styles from './index.less'
import withStyle from '../../withStyle'


class Home extends React.Component {

    componentDidMount() {
        if(!this.props.list.length) {
            this.props.getHomeList()
        }
    }
    getList() {
        const { list } = this.props
        return <div>
            {
                list.map(v => <div className={styles.item} key={v.id}>{v.title}</div>)
            }
        </div>
    }
    render() {
        return <React.Fragment>
            <Helmet>
                <title>SSR 练习--首页</title>
                <meta charSet="utf-8" name="description" content="首页的描述" />
            </Helmet>
            <div className={styles.container}>
                    {this.getList()}
                </div>

            </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        list: state.home.newsList,
        name: state.home.name
    }
}
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(fetchHomeList())
    }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles))

ExportHome.loadData = store => {
    // 负责在服务器端渲染的时候把当前路由所需要的数据提前加载好
    return store.dispatch(fetchHomeList())
}

export default ExportHome
