import React, { Component } from 'react'

class Pelicula extends Component{

marcar=()=>{
    this.props.marcarFavorita(this.props.pelicula)
}

    render(){
      /*   const pelicula=this.props.pelicula */
        const {titulo, imagen}=this.props.pelicula

        return(

            < div id="articles">
            {/* <!-- listado Articulos --> */}
            <article className="article-item" id="article-template">
              <div className="image-wrap">
                 { titulo==="batman vs superman"
                 ? <img src="https://cdn.budgetyourtrip.com/images/photos/headerphotos/large/unitedkingdom_mountsnowdon.jpg"   alt="Paisaje" />
                : <img src={imagen}   alt="Paisaje" />
                }
              </div>
              <h2>{titulo}</h2>
              <span className="date">Hace 5 minutos</span>
              <a href="facebook.com">Leer Mas</a>
              <button onClick={()=>this.marcar}>Marcar favorita</button>
              <div className="clearfix"></div>
          </article>        
</div>
        )

    }
}
export default Pelicula