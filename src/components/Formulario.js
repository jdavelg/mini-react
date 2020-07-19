import React, { Component } from 'react'
/* import Slider from './Slider'; */
import Sidebar from './Sidebar';

class Formulario extends Component {

    nombreRef = React.createRef()
    apellidosRef = React.createRef()
    bioRef = React.createRef()
    generoMujerRef = React.createRef()
    generoHombreRef = React.createRef()
    generoOtroRef = React.createRef()


    state = {
        user: {

        }
    }

    recibirFormulario = (e) => {
        e.preventDefault()
        var genero = "hombre"
        if (this.generoHombreRef.current.checked) {
            genero = this.generoHombreRef.current.value

        } else if (this.generoMujerRef.current.checked) {
            genero = this.generoMujerRef.current.value

        } else {
            genero = "otro"
        }


        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        })
        

        console.log("formulario enviado")
        console.log(user)
    }

    render() {
        var user = this.state.user
        return (
            <div id="blog">

                <div className="center">
                    <div id="content">
                        {/*Crear un formulario*/}

                        <h1 className="subheader">Formulario</h1>
                        {/* mostrar datos de formulario */}
                        {this.state.user.nombre &&
                            <div className="form-group">
                                <p>nombre: {user.nombre}</p>
                                <p>apellidos: {user.apellidos}</p>
                                <p>bio: {user.bio}</p>
                                <p>genero: {user.genero}</p>
                            </div>
                        }




                        <form action="#" className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="radiobuttons">

                                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} />Hombre
   <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} />Mujer
   <input type="radio" name="genero" value="otro" ref={this.generoOtroRef} />Otro
   </div>
                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />


                        </form>


                    </div>
                    <Sidebar blog="false" />
                </div>
            </div>
        )
    }
}
export default Formulario;