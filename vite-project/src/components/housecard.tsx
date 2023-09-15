function HouseCard(props:any) {
  return (
    <div className="card">
      <figure>
        <img loading="lazy" src={props.image} alt="" />
      </figure>
      <div id="card-content">
        <div id="verification">
          <span>verified</span>
          <span>ranking</span>
        </div>
        <h3 id="figure-header">{props.name}</h3>
        <p>{props.location}</p>
        <div id="ammeniities">
          <div>{props.bedroom}</div>
          <div>{props.bath}</div>
          <div>{props.size}</div>
          <div>{props.parkingNumber}</div>
        </div>
        <span>{props.price}</span>
        <button id="outline"> open map</button>
        <button>virtual Tour</button>
      </div>
    </div>
  );
}

export default HouseCard;
