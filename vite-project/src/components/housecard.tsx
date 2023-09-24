

function HouseCard({
  image,
  name,
  verified,
  ranking,
  location,
  bedroom,
  bath,
  size,
  parkingNumber,
  price,
  rentFrequency,
}: any) {
  return (
    <div className="card">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div id="card-content">
        <div id="verification">
          <span>{verified}</span>
          <span>{ranking}</span>
        </div>
        <h3 id="figure-header">{name}</h3>
        <p>{location}</p>
        <div id="ammeniities">
          <div>{bedroom}</div>
          <div>{bath}</div>
          <div>{size}</div>
          <div>{parkingNumber}</div>
        </div>
        <span>
          {price} {rentFrequency}
        </span>
        <button id="outline"> open map</button>
        <button>virtual Tour</button>
      </div>
    </div>
  );
}

export default HouseCard;
