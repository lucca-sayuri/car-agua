import './Info.css';
import PiChart from './chart';
import InfoNav from "../../components/InfoNav/InfoNav";
import InfoText from "../../components/InfoText/InfoText";

export default function Info() {
    return (
        <>
            <div className="info-area">
                <InfoNav />

                <InfoText />

                <div className="data-title">
                    <h2>DADOS DE CARAGUATATUBA</h2>
                </div>

                <div className="charts">
                    <div><PiChart /></div> 
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
}
