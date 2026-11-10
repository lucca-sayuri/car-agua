import "./Info.css";
import InfoNav from "../../components/InfoNav/InfoNav";
import InfoText from "../../components/InfoText/InfoText";
import PiChart from "../../components/PiChart/PiChart";
import GraphCard from "../../components/GraphCard/GraphCard";

export default function Info() {
    return (
        <>
            <div className="info-area">
                <InfoNav />

                <InfoText />

                <div className="data-title">
                    <h2>DADOS DE CARAGUATATUBA</h2>
                </div>

                <div className="graph-grid">
                    <GraphCard title="Acesso à água potável">
                        <PiChart/>
                    </GraphCard>
                    <GraphCard title="Acesso à água potável">

                    </GraphCard>
                    <GraphCard title="Lixo reciclado">
                        
                    </GraphCard>
                </div>
            </div>
        </>
    );
}
