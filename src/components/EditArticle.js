import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import Global from '../Global'
import Sidebar from './Sidebar'
import SimpleReactValidator from 'simple-react-validator'
import swal from 'sweetalert'

//1) recoger id del articulo a editar
//2) crear metodo para sacar objeto del backend
//3) rellenar formulario y actualizar objeto


class EditArticle extends Component {

    url = Global.url
    articleId = null
    titleRef = React.createRef()
    contentRef = React.createRef()

    state = {
        article: {},
        status: null,
        selectedFile: null
    }

    componentWillMount() {
        this.articleId = this.props.match.params.id
        this.getArticle(this.articleId)
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido'

            },

        });
    }

    getArticle = (id) => {
        Axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                })
            })
    }

    saveArticle = (e) => {
        e.preventDefault()
        //rellenar state con foirmulario
        this.changeState()
        if (this.validator.allValid()) {


            //hacer peticion hhtp por post
            Axios.put(this.url + 'article/'+this.articleId, this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: "waiting"
                        })
                        //subir el archivo
                        if (this.state.selectedFile !== null) {

                            //sacar id del articulo guardado
                            var articleId = this.state.article._id

                            //crear form data y añadir fichero
                            const formData = new FormData()
                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            )

                            //hacer peticion Ajax
                            Axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: "success"
                                        })
                                        swal(
                                            'Actualizacion',
                                            'Articulo actualizado con Exito',
                                            'success'

                                        )
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: "failed"
                                        })
                                    }
                                })

                        } else {
                            this.setState({
                                status: "success"
                            })
                        }

                    } else {
                        this.setState({
                            status: "failed"
                        })
                    }
                })
        } else {

            this.validator.showMessages();
            this.forceUpdate();
            this.setState({
                status: "failed"
            })
        }


    }


    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image:this.state.article.image
            }
        })
    }



    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })

    }

    render() {

        if (this.state.status === "success") {
            return <Redirect to={'/blog'} />
        }
var article= this.state.article
        
        return (
            <div className="center">

                <section id="content">
                    <h1 className="subheader">Editar Articulo</h1>

                    {this.state.article.title &&
                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState} />
                                {this.validator.message('title', this.state.title, 'alpha_num_space')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea type="text" defaultValue={article.content} name="content" ref={this.contentRef} onChange={this.changeState}></textarea>

                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                {article.image!=null
?<img src={this.url+'get-image/'+article.image} alt={article.title} style={{  verticalAlign: "middle",   width: "70px",  height: "70px", borderRadius: "50%"}} />
:<img src="https://th.bing.com/th/id/OIP.lIbpFpj2L41yj704i41WDgHaFj?pid=Api&rs=1" alt="no-image"  style={{  verticalAlign: "middle",   width: "70px",  height: "70px", borderRadius: "50%"}} />
}
                                <input type="file" name="file0" onChange={this.fileChange} />
                            </div>

                            <input type="submit" value="guardar" className="btn btn-success" />
                        </form>
                    }
                    {!this.state.article.title &&
                        <h2 className="subheader">Cargando...</h2>
                    }

                </section>

                <Sidebar></Sidebar>
            </div>
        )
    }
}
export default EditArticle