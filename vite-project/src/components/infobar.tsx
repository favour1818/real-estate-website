function InfoBar() {
  return (
    <section id="infobar">
      <p>
        Showing <span></span> search results
      </p>

      <div>
        <label htmlFor="map-area-checkbox">map area</label>
        <label className="switch">
          <input type="checkbox" name="map-area-checkbox" />
          <span className="slider round"></span>
        </label>

        <label htmlFor="verified-only-checkbox">map area</label>
        <label className="switch">
          <input type="checkbox" name="verified-only-checkbox" />
          <span className="slider round"></span>
        </label>

        <button id="filters">filters</button>

        <button id="sort">sort by</button>
      </div>
    </section>
  );
}

export default InfoBar;
