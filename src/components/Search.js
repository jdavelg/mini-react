import React, { Component } from 'react'
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';


class Search extends Component{
state={
    articles:{},
    status:null
}



    render(){

var searched= this.props.match.params.search
    

        return(
            <div id="Busqueda">
            <Slider title={"resultados de :"+searched} size="slider-small"></Slider>
            <div className="center">
            <div id="content">
{/* Listado de articulos */}

<Articles search={searched}></Articles>


            </div>
            <Sidebar blog="true" />
            </div>
            </div>
        )
    }
}
export default Search;