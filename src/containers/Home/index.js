import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { fetchHomeList } from "./store/actions";

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
                list.map(v => <div key={v.id}>{v.title}</div>)
            }
        </div>
    }
    render() {
        return <div className="home">
            <Header/>
            <div>I am {this.props.name}</div>
            {this.getList()}
            <button onClick={() => alert('click')}>click</button>
        </div>
    }
}
Home.loadData = store => {
    // 负责在服务器端渲染的时候把当前路由所需要的数据提前加载好
    return store.dispatch(fetchHomeList(true))
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
