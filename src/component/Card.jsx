//body function
function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid black", padding: "2px"}}>
      <img
        src={`${props.image}`}
        height="200px"
        width="200px"
      />
      <div style={{ textAlign: "center" }}>
        <h1>{props.cloth}</h1>
        <h2>{props.discount}</h2>
        <h2>{props.price}</h2>
        <h1>Shop Now</h1>
      </div>
    </div>
  );
}
export default Card;