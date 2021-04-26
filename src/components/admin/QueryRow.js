import './QueryRow.css';

function QueryRow({name, email, query_text}) {
    return(
        <div className="query-wrapper">
            <div>
                <h4 className="h4" style={{margin:'8px 0px 0px 16px', padding:'0px'}}>{name}</h4>
                <p className="caption no-annoy" style={{marginLeft:'16px', color:'var(--black-30)'}}>{email}</p>
            </div>
            <div className="vertical-seperator" style={{left:'250px', height:'84px'}}></div>
            <p className="p2 no-annoy query-text" style={{left:'270px'}}>{query_text}</p>
        </div>
    );
}

export default QueryRow;