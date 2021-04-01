import React from "react";
import "./buyCrops.css";

export default class BuyCrops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crops: null,
    };
  }

  displayCrops() {
    let crops = [
      { cropId: 1, cropName: "Tomatoes", quantity: 17, sold: 2 },
      { cropId: 2, cropName: "Onions", quantity: 7, sold: 0 },
      //   { cropId: 1, cropName: "Tomatoes", quantity: 17, sold: 2 },
      //   { cropId: 2, cropName: "Onions", quantity: 7, sold: 0 },
      //   { cropId: 1, cropName: "Tomatoes", quantity: 17, sold: 2 },
      //   { cropId: 2, cropName: "Onions", quantity: 7, sold: 0 },
      //   { cropId: 1, cropName: "Tomatoes", quantity: 17, sold: 2 },
      //   { cropId: 2, cropName: "Onions", quantity: 7, sold: 0 },
      //   { cropId: 1, cropName: "Tomatoes", quantity: 17, sold: 2 },
      //   { cropId: 2, cropName: "Onions", quantity: 7, sold: 0 },
    ];
    return crops.map((crop) => (
      <div className="crop-row">
        <div className="crop-row-item">{crop.cropId}</div>
        <div className="crop-row-item">{crop.cropName}</div>
        <div className="crop-row-item">{crop.quantity}</div>
        <div className="crop-row-item">{crop.sold}</div>
      </div>
    ));
  }
  render() {
    return (
      <div>
        {/* <div className="nav">Farmazon</div> */}

        <div className="display-crops">
          <div className="crop-titlebar">
            <div className="crop-titlebar-menu"> Crop ID</div>
            <div className="crop-titlebar-menu"> Crop Name</div>
            <div className="crop-titlebar-menu"> Quantity</div>
            <div className="crop-titlebar-menu"> Sold</div>
          </div>
          {/* {this.state.crops == null ? <div>Loading...</div> : this.displayCrops()} */}
          <div className="crop-details">{this.displayCrops()}</div>
        </div>

        <div className="sell-crops">
          <div className="input-area">
            <label className="text-label" htmlFor="cropname">
              Crop Name
            </label>
            <br />
            <input
              className="text-box"
              type="text"
              id="cropname"
              name="cropname"
            />
          </div>

          <div className="input-area">
            <label className="text-label" htmlFor="quantity">
              Quantity
            </label>
            <br />
            <input
              className="text-box"
              type="number"
              min="1"
              id="quantity"
              name="quantity"
            />
          </div>

          <button className="sell-button" type="submit">
            SELL NOW
          </button>
        </div>

        <div class="clearfix"></div>
      </div>
    );
  }
}

// check mail
// drop course
