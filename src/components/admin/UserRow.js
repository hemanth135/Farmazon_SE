import './UserRow.css';

function UserRow({name, email, phno, role, city, state}) {
    return(
        <div className="row-rect" style={{width:'1560px'}}>
            <p className="p2 head no-annoy" style={{left:'20px'}}>{name}</p>
            <p className="p2 head no-annoy" style={{left:'199px'}}>{email}</p>
            <p className="p2 head no-annoy" style={{left:'442px'}}>{phno}</p>
            <p className="p2 head no-annoy" style={{left:'1088px'}}>{role}</p>
            <p className="p2 head no-annoy" style={{left:'1239px'}}>{city}</p>
            <p className="p2 head no-annoy" style={{left:'1429px'}}>{state}</p>
        </div>
    );
}

export default UserRow;