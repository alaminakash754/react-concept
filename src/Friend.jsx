export default function Friend ({friend}){
    const {name, email, phone} = friend;
    return(
      <div style={{border:'2px solid red', margin: '5px', borderRadius:'10px'}}>
        <h4>Name: {name}</h4>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>  
    )
}