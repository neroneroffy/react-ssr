import React from 'react'
import Header from '../../components/Header'
const Home = () => <div className="home">
    <Header/>
    <div>I am Home</div>
    <button onClick={() => alert('click')}>click</button>
</div>

export default Home
