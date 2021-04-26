import './Queries.css';
import QueryRow from './QueryRow';

function QueryMaker(details) {
    return details.map((detail, i) => (
        <QueryRow name={detail.name} email={detail.email} query_text={detail.query_text}></QueryRow>
    ));
}

function Queries() {

    const details = [
        {name: 'Alex Prajapati', email: 'alexp07@gmail.com', query_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante elit, facilisis vitae enim ut, maximus sollicitudin urna. Etiam et feugiat dui. Fusce vel est nisl. Proin id purus ut ligula porta sodales vel tincidunt erat. Fusce mollis sodales ante eget tincidunt. Donec fermentum accumsan urna, auctor fermentum dolor imperdiet nec. Vivamus a augue eleifend, interdum nulla non, porttitor est. Suspendisse ultrices eros libero, nec elementum leo porta sed. Integer laoreet posuere lacus maximus ac.'},
        {name: 'Robin Prajapati', email: 'robinp09@gmail.com', query_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante elit, facilisis vitae enim ut, maximus sollicitudin urna. Etiam et feugiat dui. Fusce vel est nisl. Proin id purus ut ligula porta sodales vel tincidunt erat. Fusce mollis sodales ante eget tincidunt. Donec fermentum accumsan urna, auctor fermentum dolor imperdiet nec. Vivamus a augue eleifend, interdum nulla non, porttitor est. Suspendisse ultrices eros libero, nec elementum leo porta sed. Integer laoreet posuere lacus maximus ac.'},
        {name: 'Magnus Prajapati', email: 'maggiep11@gmail.com', query_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante elit, facilisis vitae enim ut, maximus sollicitudin urna. Etiam et feugiat dui. Fusce vel est nisl. Proin id purus ut ligula porta sodales vel tincidunt erat. Fusce mollis sodales ante eget tincidunt. Donec fermentum accumsan urna, auctor fermentum dolor imperdiet nec. Vivamus a augue eleifend, interdum nulla non, porttitor est. Suspendisse ultrices eros libero, nec elementum leo porta sed. Integer laoreet posuere lacus maximus ac.'}
    ];

    return(
        <div className="page-rect">
            <div className="queries-wrapper">
                <div className="title-wrapper">
                    <p className="p1 no-annoy">Queries</p>
                </div>
                <div className="rows">
                    {QueryMaker(details)}
                </div>
            </div>
        </div>
    );
}

export default Queries;