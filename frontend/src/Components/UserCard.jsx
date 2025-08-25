export default function Usercard({username, level, xp}){
  return(
    <div className="User-Card-Container">
      <div className="User-Card-icon"></div>
      <div className="User-Card-userinfo-container">
        <h2 className="User-Card-username">{username}</h2>
        <div className="User-Card-userinfo">
          <h3 className="User-Card-userlevel">Level: {level}</h3>
          <h3 className="User-Card-userxp">xp: {xp} /1200</h3>
        </div>
      </div>
    </div>
  )
}