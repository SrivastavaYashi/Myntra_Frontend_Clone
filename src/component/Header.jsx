export default //header function
function Header()
{
  return(
    <div className="heading" style={{display:"flex",justifyContent:"space-between",position:"relative",left:"35px"}}>
      <img className="images" src="https://images.indianexpress.com/2021/01/myntra.png?w=640" height="80px" width="80px"/>
      <div className="options">
      <button className="but">Men</button>
      <button className="but">Women</button>
      <button className="but">Kids</button>
      <button className="but">Home and Living</button>
      <button className="but">Beauty</button>
      <button className="but">Studio</button>
      </div>
      <input className="searchBar" placeholder="search for products brands and more"/>
      <div className="profile">
      <button className="pro">Profile</button>
      <button className="pro">Wishlist</button>
      <button className="pro">Bag</button>
      </div>
    </div>
  );
}