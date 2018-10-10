import React from 'react'
import { connect } from 'react-redux'
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router-dom'

class Translation extends React.Component {
    componentDidMount() {
        if(!this.props.list.length) {
            this.props.getTranslationList()
        }
    }    getList() {
        const { list, login } = this.props
        return login ? <div>
            {
                list.map(v => <div key={v.id}>{v.title}</div>)
            }
        </div>
            :
            <Redirect to='/'/>
    }

    render() {
        return <div className="translation">
            {this.getList()}
       </div>
    }
}

Translation.loadData = store => {
    return store.dispatch(getTranslationList())
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

export default connect(mapStateToProps, mapDispatchToProps)(Translation)
