import "./Info.css";
import InfoNav from "../../components/InfoNav/InfoNav";
import InfoText from "../../components/InfoText/InfoText";
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
                    <GraphCard title={"Acesso a água potável"} />
                    <GraphCard title={"Acesso a água potável"} />
                    <GraphCard title={"Acesso a água potável"} />
                </div>
            </div>
        </>
    );
}
