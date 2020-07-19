import React, { Component } from 'react'

class Seccionpruebas extends Component {

//contador=0
constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }


    render() {
        return (
          
<section id="content">
<h2 className="subheader">Ultimos Articulos</h2>
       
<div id="articles">
    
{/*   <!-- listado Articulos --> */}
  <article className="article-item" id="article-template">
    <div className="image-wrap">
        <img src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Paisaje" />
    </div>
    <h2>Articulo de prueba</h2>
    <span className="date">Hace 5 minutos</span>
    <a href="facebook.com">Leer Mas</a>
    <div className="clearfix"></div>
</article>
</div>

<h2 className="subheader"> Funciones y JSX Basico</h2>
        <h2> contador: {this.state.contador}</h2>
        <p>
            <input type="button" value="sumar" onClick={() => this.setState({ contador: this.state.contador + 1 })}/>
            <input type="button" value="restar" onClick={() => this.setState({ contador: this.state.contador  -1 })}/>
        </p>

</section>
           
        )
    }
}

export default Seccionpruebas 