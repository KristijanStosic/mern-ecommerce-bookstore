import React from 'react'

const FilterPrice = ({ price, setPrice }) => {
  return (
    <div className="card mb-3">
    <div
      className="card-header fw-bold text-uppercase accordion-icon-button"
      data-bs-toggle="collapse"
      data-bs-target="#filterPrice"
      aria-expanded="true"
      aria-controls="filterPrice"
    >
      Price
    </div>
    <div className="card-body show" id="filterPrice">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value={[0, 10]}
          checked={price === ['0', '10']}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label
          className="form-check-label"
          htmlFor="flexRadioDefault1"
          aria-label="Price"
        >
          0$ - 10$
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value={([11, 20])}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label
          className="form-check-label"
          htmlFor="flexRadioDefault2"
          aria-label="Price"
        >
          11$ - 20$
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          value={price}
          onChange={(e) => setPrice(e.target.value)}       
        />
        <label
          className="form-check-label"
          htmlFor="flexRadioDefault3"
          aria-label="Price"
        >
           21$ - 30$
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault4"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label
          className="form-check-label"
          htmlFor="flexRadioDefault4"
          aria-label="Price"
        >
          31$ - 40$
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault5"
          value={[price]}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label
          className="form-check-label"
          htmlFor="flexRadioDefault5"
          aria-label="Price"
        >
          $41 - $50
        </label>
      </div>
    </div>
  </div>
  )
}

export default FilterPrice
