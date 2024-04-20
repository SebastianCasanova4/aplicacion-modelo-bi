import { Card } from "flowbite-react";
import "../styles/Prediccion.css"
import { useLocation } from "react-router-dom";

function Prediccion(){
    const location = useLocation();
    const { precision, recall, f1 } = location.state;
    return (
        <div className='Pagina'>
            <h1 id="unTitulo">Resultados del modelo</h1>
            <p>Ya ha sido procesado su archivo y se obtuvieron los siguientes resultados:</p>
            <Card className='carta'>
                <h2 className="titulo">Resultados</h2>
                <p className="resultados">Estos son las metricas asociadas a la predicción realizada por nuestro modelo*:</p>
                <p className="metricas">Precision: {precision}%</p>
                <p className="metricas">Recall: {recall}%</p>
                <p className="metricas">F1: {f1}%</p>
            </Card>
            <p>*Para nuestro caso un F1-score cercano al 100% significa que el modelo tiene mayor exactitud al momento de clasificar.</p>
            <a href="http://localhost:8000/download"><button className='descarga'>Descargar archivo</button></a>
        </div>
    );
}

export default Prediccion;