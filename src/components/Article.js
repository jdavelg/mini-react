import React, { Component } from 'react'

import Axios from 'axios'
import Global from '../Global'
import Sidebar from './Sidebar'
import Moment from 'react-moment'
import 'moment/locale/es'
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert'


class Article extends Component {
    url = Global.url

    state = {
        article: false,
        status: null
    }
    componentWillMount() {
        this.getArticle()
    }

    getArticle = () => {
        var id = this.props.match.params.id

        Axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: "success"

                })
            }).catch(err => {
                this.setState({
                    article: {},
                    status: "success"
                })

            })

    }
    deleteArticle = (id) => {
        swal({
            title: "estas segur@?",
            text: "una vez borrado no podras recuperar el articulo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    Axios.delete(this.url + 'article/' + id)
                        .then(res => {
                            this.setState({
                                article: res.data.article,
                                status: "deleted"
                            })

                        })

                    swal("Tu articlo se ha borrado!", {
                        icon: "success",
                    });
                } else {
                    swal("tu articulo no se ha Borrado!");
                }
            });

    }

    render() {
        if (this.state.status === "deleted") {
            return <Redirect to={'/blog'} />
        }
        var article = this.state.article
        return (

            <div className="center">
                <section id="content">

                    {article &&

                        <article className="article-item article-detail" >
                            <div className="image-wrap">
                                {article.image != null
                                    ? <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                    : <img src="https://th.bing.com/th/id/OIP.lIbpFpj2L41yj704i41WDgHaFj?pid=Api&rs=1" alt={article.title} />
                                }
                            </div>
                            <h1 className="subheader"> {article.title}</h1>
                            <span className="date"><Moment locale="es" fromNow>{article.date}</Moment></span>
                            <p>     {article.content}      </p>

                            <button className="btn btn-success" style={{ background: "red", color: "white" }} onClick={
                                () => {
                                    this.deleteArticle(article._id)
                                }
                            }>Borrar</button>
                            <Link to={'/editar/'+article._id} className="btn" style={{ background: "green", color: "white" }} >Editar</Link>
                            <div className="clearfix"></div>

                        </article>


                    }
                    {!article && this.state.status === "success" &&
                        <div id="error"><h2 className="subheader">El articulo no existe</h2> <p>Intentalo mas tarde</p></div>

                    }
                    {this.state.status == null &&
                        <div id="error"><h2 className="subheader">Cargando</h2> </div>

                    }


                </section>
                <Sidebar></Sidebar>
                <div className="clearfix"></div>
            </div>
        )
    }
}
export default Article