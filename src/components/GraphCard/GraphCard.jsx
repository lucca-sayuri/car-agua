import './GraphCard.css'

export default function GraphCard(props) {
    return (
        <>
            <div className='graph-card'>
                <h3>{props.title}</h3>
                <hr />
            </div>
        </>
    )
}