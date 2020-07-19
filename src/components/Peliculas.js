
import React, { Component } from 'react'
/* import MensajeStatic from './MensajeStatic'; */
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Peliculas extends Component {

state={
    peliculas:[
        {titulo:"batman vs superman",  imagen:"http://1.bp.blogspot.com/-lya-zFlJnvg/TaoibIpbKDI/AAAAAAAAAVI/PFIfJlTdmGc/s1600/Troya-Divx-frontal-DVD.jpg" },
        {titulo:"peppa pig",  imagen:"http://img.europapress.net/fotoweb/fotonoticia_20160922182007_640.jpg" },
        {titulo:"rapido y furioso",  imagen:"https://th.bing.com/th/id/OIP.q5t8s1b8CjsAkpoC0JAIywHaKd?pid=Api&rs=1" },
    ],
    nombre:"jonathan lopez",
    favorita:{}
}

cambiartitulo=()=>{
var {peliculas}=this.state;
peliculas[0].titulo="batman Begins"

this.setState({
    peliculas: peliculas
})

}


favorita=(pelicula)=>{
console.log(pelicula);
this.setState({
    favorita:pelicula
})
}


componentDidMount(){
    console.log("componente cargado");
    
}

    render() {


        return (
<div  className="center">
<Slider title="Bienvenido a las pelis" size="slider"></Slider>
            <div id="content" className="peliculas">
                <h2 className="subheader"> peliculas</h2>
        <p>Seleccion de las peliculas de {this.state.nombre}</p>

<p>
   <button onClick={this.cambiartitulo}>Cambiar titulo</button>
</p>
<p>
    <strong>
        La pelicula favorita es: <span>{this.state.favorita.titulo}</span>
    </strong>
</p>
{/* Crear componente de pelicula */} 
<ul>
{    this.state.peliculas.map((pelicula,i)=>{
        return(
    <Pelicula key={i} pelicula={pelicula} /* marcarFavorita= {this.favorita(pelicula)} *//>
        )
    })
}
</ul>
            </div>
            <Sidebar blog="false" />
            </div>
        )

    }
}
export default Peliculas;