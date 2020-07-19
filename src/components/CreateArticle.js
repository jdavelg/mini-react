import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import Global from '../Global'
import Sidebar from './Sidebar'
import SimpleReactValidator from 'simple-react-validator'
import swal from 'sweetalert'


class CreateArticle extends Component{

url=Global.url

titleRef= React.createRef()
contentRef= React.createRef()

state={
    article:{},
    status:null,
    selectedFile:null
}

componentWillMount(){
  this.validator= new SimpleReactValidator({
    messages: {
        required: 'Este campo es requerido'
     
      },
    
  });
}

    saveArticle=(e)=>{
e.preventDefault()
//rellenar state con foirmulario
this.changeState()
if (this.validator.allValid()) {
    

//hacer peticion hhtp por post
Axios.post(this.url+'save', this.state.article)
.then(res=>{
    if(res.data.article){
        this.setState({
            article:res.data.article,
            status:"waiting"
        })
        //subir el archivo
       if (this.state.selectedFile!==null) {
           
//sacar id del articulo guardado
var articleId=this.state.article._id

//crear form data y añadir fichero
const formData=new FormData()
formData.append(
    'file0',
    this.state.selectedFile,
    this.state.selectedFile.name
)

//hacer peticion Ajax
Axios.post(this.url+'upload-image/'+articleId, formData)
.then(res=>{
    if (res.data.article) {
        this.setState({
            article:res.data.article,
            status:"success"
        })
        swal(
            'Articulo creado',
            'Articulo guardado con Exito',
            'success'

        )
    }else{
        this.setState({
            article:res.data.article,
            status:"failed"
        })
    }
})

       }else{
        this.setState({
            status:"success"
        })
       }

    }else{
        this.setState({
            status:"failed"
        })
    }
})
    }else{

        this.validator.showMessages();
        this.forceUpdate();
        this.setState({
            status:"failed"
        })
    }


}


changeState=()=>{
    this.setState({
        article:{
           title:this.titleRef.current.value,
           content:this.contentRef.current.value
        }
    })
}



fileChange=(event)=>{
this.setState({
    selectedFile:event.target.files[0]
})

}

    render(){

if(this.state.status==="success"){
    return <Redirect to={'/blog'}/>
}

        return (
            <div className="center">

                <section id="content">
                    <h1 className="subheader">Crear Articulo</h1>
                    <form className="mid-form" onSubmit={this.saveArticle}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState} />
                            {this.validator.message('title', this.state.title, 'alpha_num_space')}
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea type="text" name="content" ref={this.contentRef} onChange={this.changeState}></textarea>
                           
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange}/>
                        </div>

                        <input type="submit" value="guardar" className="btn btn-success"/>
                    </form>
                </section>

                <Sidebar></Sidebar> 
            </div>
        )
    }
}
export default CreateArticle