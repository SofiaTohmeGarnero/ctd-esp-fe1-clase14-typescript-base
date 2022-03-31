import { useState } from "react";
import ListadoMensajes from "./components/ListadoMensajes";
import VistaMensaje from "./components/VistaMensaje";
import { mensajes } from "./data/mensajes";
import { IMensaje } from "./data/mensajes";

import "./styles.css";

export default function App() {
    const [mensaje, setMensaje] = useState<IMensaje>();

    const seleccionarMensaje = (id:number): void =>
        setMensaje(mensajes.find((m) => m.id === id));

    return (
        <div className="App">
            <h1>Bandeja de Entrada</h1>
            <div id="bandejaDeEntrada">
                <ListadoMensajes
                    mensajes={mensajes}
                    seleccionarMensaje={seleccionarMensaje}
                />
                <VistaMensaje mensaje={mensaje} />
            </div>
        </div>
    );
}
