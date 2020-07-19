
import React, { Component } from 'react'
import Axios from 'axios';
import  {Link}  from 'react-router-dom'
import Global  from "../Global";
import Moment from 'react-moment';
import 'moment/locale/es'



class Articles extends Component {

    url=Global.url;
    componentWillMount() {
 
var search=this.props.search
        var home=this.props.home

        if(home && home==="true"){
this.getLastArticles()
        }else if(search && search!==null && search!==undefined){
this.getArticlesBySearch(search)
        }       
        
        else{
            this.getArticles()
        }
    }
    state = {
        articles: [],
        status: null
    }



    getArticlesBySearch = (searched) => {
        Axios.get(this.url+"search/"+searched)
            .then(res => {

                
                    this.setState({
                        articles: res.data.articles,
                        status: res.data.status
                    })  ;           

              
            })
            .catch(err =>{
                this.setState({
                    articles:[],
                    status: "success"
                })
           
            })

    }

    getLastArticles = () => {
        Axios.get(this.url+"articles/last")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: res.data.status
                })

              
            })

    }


    getArticles = () => {
        Axios.get(this.url+"articles")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: res.data.status
                })

                console.log(this.state)
            })

    }



    render() {
        if (this.state.articles.length >= 1) {
            var listArticles = this.state.articles.map((article, i) => {
                return (
                    <div id="articles" key={i}>
                        {/*   <!-- listado Articulos --> */}
                        <article className="article-item" id="article-template" key={i}>
                            <div className="image-wrap">
{article.image!=null
?<img src={this.url+'get-image/'+article.image} alt={article.title} />
:<img src="https://th.bing.com/th/id/OIP.lIbpFpj2L41yj704i41WDgHaFj?pid=Api&rs=1" alt={article.title} />
}

                                
                            </div>
                            <h2>{article.title}</h2>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <Link to={'/blog/articulo/'+article._id} >Leer Mas</Link>
                            <div className="clearfix"></div>
                        </article>
                    </div>
                )
            })

            return (
                <div id="articles">
                    {listArticles}
                </div>
            )

        } else if (this.state.articles.length === 0 && this.state.status === "success") {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay articulos para mostrar</h2>
                </div>
            )
        }

        else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                </div>
            )
        }


    }
}
export default Articles

