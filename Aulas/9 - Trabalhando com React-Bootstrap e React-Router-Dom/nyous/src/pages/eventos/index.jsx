import React, { useEffect } from "react";
import Rodape from "../../components/rodape";
import Menu from "../../components/menu";
import {useHistory} from "react-router-dom";

const Eventos = () => {
    const history = useHistory();

    //Hooks para subtituir o componentDidMount, quando o componente é inicializado.
    //Isso faz com que só pessoas logadas tenham acesso a essa página. Ou seja, mesmo se ele escrever essa rota no navegador ele não vai vim pra cá.  Mas você teria que fazer isso em cada página, ppor isso tem uma forma melhor lá no index.js
    useEffect(() => {
        const token = localStorage.getItem("token-nyous");

        if(token === null) {
            history.push("/login");
        }
    }, []);

    return (
        <div>
            <Menu/>
            <h1>Eventos</h1>
            <Rodape/>
        </div>
    )
}

export default Eventos;