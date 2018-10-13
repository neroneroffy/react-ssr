import React from 'react'

class NotFound extends React.Component {
    componentWillMount() {
        const { staticContext } = this.props
        staticContext && (staticContext.notFound = true)
    }

    render() {
        return <div>404, sorry, page not found</div>
    }
}

export default NotFound