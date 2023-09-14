function HouseCard() {
  return (
    <div className="card">
      <figure>
        <img loading="lazy" src="" alt="" />
      </figure>
      <div id="card-content">
        <div id="verification">
          <span>verified</span>
          <span>ranking</span>
        </div>
        <h3 id="figure-header">Name</h3>
        <p>description</p>
        <div id="ammeniities">
          <div>bedrooms</div>
          <div>showers</div>
          <div>total area</div>
          <div>parking space</div>
        </div>
        <span>price</span>
        <button id="outline"> open map</button>
        <button>virtual Tour</button>
      </div>
    </div>
  );
}

export default HouseCard;
