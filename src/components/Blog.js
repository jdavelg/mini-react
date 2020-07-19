import React, { Component } from 'react'
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';


class Blog extends Component{
state={
    articles:{},
    status:null
}



    render(){


    

        return(
            <div id="blog">
            <Slider title="Bienvenido al Blog" size="slider-small"></Slider>
            <div className="center">
            <div id="content">
{/* Listado de articulos */}

<Articles></Articles>


            </div>
            <Sidebar blog="true" />
            </div>
            </div>
        )
    }
}
export default Blog;