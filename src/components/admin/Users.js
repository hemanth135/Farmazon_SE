import UserRow from './UserRow';
import './Users.css';

function Rowmaker(details) {
    //Loops through the details array
    return details.map((detail, i) => (
        <UserRow name={detail.name} email={detail.email} phno={detail.phno} role={detail.role} city={detail.city} state={detail.state}></UserRow>
    ));
}

function Users() {

    const details= [
        {name:'Alex Prajapati', email:'alexp07@gmail.com', phno:'9875235350', role:'Farmer', city:'Hyderabad', state:'Telangana'},
        {name:'Alex Prajapati', email:'alexp07@gmail.com', phno:'9875235350', role:'Farmer', city:'Hyderabad', state:'Telangana'},
        {name:'Alex Prajapati', email:'alexp07@gmail.com', phno:'9875235350', role:'Farmer', city:'Hyderabad', state:'Telangana'},
        {name:'Alex Prajapati', email:'alexp07@gmail.com', phno:'9875235350', role:'Farmer', city:'Hyderabad', state:'Telangana'},
        {name:'Alex Prajapati', email:'alexp07@gmail.com', phno:'9875235350', role:'Farmer', city:'Hyderabad', state:'Telangana'}
    ];

    return(
        <div className="page-rect">
            <div className="users-wrapper">
                <div className="title-wrapper">
                    <p className="p1 no-annoy" style={{color:'var(--black-2)'}}>Users</p>
                </div>
                <div className="header" style={{width:'1560px', marginBottom:'0px'}}>
                    <p className="p2 head no-annoy" style={{left:'20px', fontWeight:'bold'}}>Name</p>
                    <p className="p2 head no-annoy" style={{left:'199px', fontWeight:'bold'}}>Email</p>
                    <p className="p2 head no-annoy" style={{left:'442px', fontWeight:'bold'}}>Ph No.</p>
                    <p className="p2 head no-annoy" style={{left:'1088px', fontWeight:'bold'}}>Role</p>
                    <p className="p2 head no-annoy" style={{left:'1239px', fontWeight:'bold'}}>City</p>
                    <p className="p2 head no-annoy" style={{left:'1429px', fontWeight:'bold'}}>State</p>
                </div>
                <div className="rows">
                    {Rowmaker(details)}
                </div>
            </div>
        </div>
    );
}

export default Users;