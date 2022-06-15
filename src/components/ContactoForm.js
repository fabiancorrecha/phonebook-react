import React, { Component } from 'react'
import '../App.css'

export default class ContactoForm extends Component {
    
    state = {
        nombre: '',
        numero: '',
        email: '',
        nacimiento: '',
        direccion: ''
    }
    
    onSubmit = (e) => {
        this.props.addContacto(this.state.nombre, this.state.numero, this.state.email ,this.state.nacimiento, this.state.direccion);
        e.preventDefault();
    }

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    

    render() {
        return (
            <div className="container">
                
                <h1 className="display-5">Contactos</h1>
                <br/>

                <form className="form-inline" onSubmit={this.onSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                    <label>Nombre: </label>
                    <input type="text" 
                    className="form-control" 
                    name="nombre"
                    id="Nombre" 
                    onChange={this.onChange}
                    value={this.state.nombre}/>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    <label>Numero: </label>
                    <input type="text" 
                    className="form-control" 
                    name="numero"
                    id="Numero"
                    onChange={this.onChange}
                    value={this.state.numero}/>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    <label>Correo</label>
                    <input type="text" 
                    className="form-control" 
                    name="email"
                    id="exampleInputEmail1" 
                    onChange={this.onChange}
                    value={this.state.email}/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label>fecha de Nacimiento</label>
                    <input type="date" 
                    className="form-control" 
                    name="nacimiento"
                    id="nacimiento"
                    onChange={this.onChange}
                    value={this.state.fechaNacimiento}/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label>Direccion</label>
                    <input type="text" 
                    className="form-control" 
                    name="direccion"
                    id="direccion" 
                    onChange={this.onChange}
                    value={this.state.direccion}/>
                </div>

                <button type="submit" className="btn btn-primary mb-2">Guardar Contacto</button>
                </form>

            </div>
        )
    }
}