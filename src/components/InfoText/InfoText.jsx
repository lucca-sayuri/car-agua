import { useParams } from "react-router"
import './InfoText.css'

export default function InfoText () {
    let params = useParams()
    let text = {title: "agua", desc: "sla"}

    switch (params.infoTab) {
        case "agua":
            text.title = "ÁGUA"
            text.desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mattis mi, eget porta tellus. Proin lobortis lacus at tempus porttitor. Sed imperdiet tristique auctor. Aliquam ornare, sem a euismod mollis, nisi nunc euismod magna, in gravida augue sem a lorem. Phasellus et turpis pellentesque, viverra lacus et, suscipit velit. Vestibulum tortor urna, volutpat ac rhoncus id, tristique sit amet diam. Curabitur at vestibulum purus. Sed maximus massa sagittis "
            break;
        
        case "esgoto":
            text.title = "ESGOTO"
            text.desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mattis mi, eget porta tellus. Proin lobortis lacus at tempus porttitor. Sed imperdiet tristique auctor. Aliquam ornare, sem a euismod mollis, nisi nunc euismod magna, in gravida augue sem a lorem. Phasellus et turpis pellentesque, viverra lacus et, suscipit velit. Vestibulum tortor urna, volutpat ac rhoncus id, tristique sit amet diam. Curabitur at vestibulum purus. Sed maximus massa sagittis "
            break;

        case "drenagem":
            text.title = "DRENAGEM"
            text.desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mattis mi, eget porta tellus. Proin lobortis lacus at tempus porttitor. Sed imperdiet tristique auctor. Aliquam ornare, sem a euismod mollis, nisi nunc euismod magna, in gravida augue sem a lorem. Phasellus et turpis pellentesque, viverra lacus et, suscipit velit. Vestibulum tortor urna, volutpat ac rhoncus id, tristique sit amet diam. Curabitur at vestibulum purus. Sed maximus massa sagittis "
            break;

        case "residuos":
            text.title = "RESÍDUOS"
            text.desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mattis mi, eget porta tellus. Proin lobortis lacus at tempus porttitor. Sed imperdiet tristique auctor. Aliquam ornare, sem a euismod mollis, nisi nunc euismod magna, in gravida augue sem a lorem. Phasellus et turpis pellentesque, viverra lacus et, suscipit velit. Vestibulum tortor urna, volutpat ac rhoncus id, tristique sit amet diam. Curabitur at vestibulum purus. Sed maximus massa sagittis "
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