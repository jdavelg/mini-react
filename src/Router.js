import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Peliculas from './components/Peliculas'
import Error from './components/Error'
import Header from './components/Header';

import Footer from './components/Footer';
import Seccionpruebas from './components/Seccionpruebas';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';



class Router extends Component {

    render() {
        return (

            /* Configurar rutas y pages */
            <BrowserRouter>
                <Header></Header>






                {/*     <Route path='/prueba/:id' render={(props) => {
                        var id = props.match.params.id
                        return (
                            <div id="content">
                                <h2 className="subheader">Esta es una pagina de pruebas</h2>
                                <h3>el id es : {id}</h3>
                            </div>

                        )
                    }} /> */}



                <Switch>
                    <Route exact path='/ruta-prueba' component={Seccionpruebas} />
                    <Route exact path='/peliculas' component={Peliculas} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/sincomponent' render={() => (<div id="content"><h1>Hola mundo desde ruta sin component</h1></div>)} />
                    <Route exact path='/formulario' component={Formulario} />
                    <Route exact path='/blog/articulo/:id' component={Article} />
                    <Route exact path='/blog/crear' component={CreateArticle} />
                    <Route exact path='/blog' component={Blog} />
                    <Route exact path='/blog/busqueda/:search' component={Search} />
                    <Route exact path='/redirect/:search' render={
                        (props) => {
                            var search = props.match.params.search;
                            return <Redirect to={'/blog/busqueda/'+ search} />
                        }} />
<Route exact path='/editar/:id' component={EditArticle}/>

                    <Route component={Error} />

                </Switch>



                <div className="clearfix"></div>

                <Footer />

            </BrowserRouter>

        )
    }
}

export default Router;

