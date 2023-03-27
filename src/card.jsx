function Card({robo, index})
{
    return(
      
                    <div className="card">
            <img  className="image" src= {`https://robohash.org/${robo.name}.png`}/>
            <h3 className="Nom" key={index}>{robo.name}</h3>
            <h5 className="mail" key={index}>{robo.email}</h5>

        </div>
      

    )
}
export default Card;