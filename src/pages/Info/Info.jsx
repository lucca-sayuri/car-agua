import "./Info.css";
import InfoNav from "../../components/InfoNav/InfoNav";
import InfoText from "../../components/InfoText/InfoText";

export default function Info() {
    return (
        <>
            <div className="info-area">
                <InfoNav />

                <InfoText />
            </div>
        </>
    );
}
