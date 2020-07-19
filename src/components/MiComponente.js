
import React, { Component } from 'react'

class MiComponente extends Component{

    render(){
let receta={
    nombre:'pizza',
    ingredientes:['tomate','queso','champiñon','otros'],
    calorias:800
}

return(
<div>
<h1>{'receta: '+receta.nombre}</h1>
<hr/>
<h3>{'calorias: '+receta.calorias}</h3>
<ol>
{
    receta.ingredientes.map((ingrediente,i)=>{
console.log(ingrediente);
return <li key={i}>
    {ingrediente}
    </li>

    })
}
</ol>

</div>


)

    }

    
}
export default MiComponente

