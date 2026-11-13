import './GraphCard.css'

export default function GraphCard({ title, children }) {
    return (
        <>
            <div className='graph-card'>
                <h3>{title}</h3>
                <hr />
                    <div className='graph-container'>
                        { children }
                    </div>
            </div>
        </>
    )
}