import { useParams } from "react-router"
import './InfoText.css'

export default function InfoText () {
    let params = useParams()
    let text = {title: "agua", desc: "sla"}

    switch (params.infoTab) {
        case "agua":
            text.title = "ÁGUA"
            text.desc = "sadasdasdasdsdasdsadsadasdasdasasdasdasdasd"
            break;
        
        case "esgoto":
            text.title = "ESGOTO"
            text.desc = "sla 2"
            break;

        case "drenagem":
            text.title = "DRENAGEM"
            text.desc = "sla 3"
            break;

        case "residuos":
            text.title = "RESÍDUOS"
            text.desc = "sla 4"
            break;
    }

    return (
        <>
            <div className="info-text-box">
                <h1>
                    {text.title}
                </h1>
                <hr />
                <p>
                    {text.desc}
                </p>
            </div>
        </>
    )
}