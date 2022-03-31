import React from "react";
import PropTypes from "prop-types";
import { IMensaje } from "../data/mensajes";

// Debemos tipar las props de nuestro componente
interface IVistaMensaje {
    mensaje?: IMensaje
}

const VistaMensaje = ({ mensaje }: IVistaMensaje) =>
    mensaje ? (
        <div id="vistaMensaje">
            <h3 className="titulo">{mensaje.asunto}</h3>
            <strong>
               {mensaje.remitente.nombre} {mensaje.remitente.apellido} ({mensaje.email})
            </strong>
            <p>{mensaje.texto}</p>
        </div>
    ) : null;

VistaMensaje.propTypes = {
    mensaje: PropTypes.shape({
        asunto: PropTypes.string.isRequired,
        remitente: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        texto: PropTypes.string.isRequired
    })
};

export default VistaMensaje;
