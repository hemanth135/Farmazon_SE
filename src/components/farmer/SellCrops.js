import React from "react";
import "./sellCrops.css";

export default class SellCrops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crops: [],
      quantity: 0,
      cropName: "",
      error: "",
    };
  }

  displayCrops() {
    let crops = this.state.crops;
    // let crops = [
    //   { cropId: 1, cropName: "Tomatoes", quantity: 17, sold: 2 },
    //   { cropId: 2, cropName: "Onions", quantity: 7, sold: 0 },
    //   //   { cropId: 1, cropName: "Tomatoes", quantity: 17, sold: 2 },
    //   { cropId: 2, cropName: "Onions", quantity: 7, sold: 0 },
    //   { cropId: 1, cropName: "Tomatoes", quantity: 17, sold: 2 },
    //   { cropId: 2, cropName: "Onions", quantity: 7, sold: 0 },
    //   { cropId: 1, cropName: "Tomatoes", quantity: 17, sold: 2 },
    //   { cropId: 2, cropName: "Onions", quantity: 7, sold: 0 },
    //   { cropId: 1, cropName: "Tomatoes", quantity: 17, sold: 2 },
    //   { cropId: 2, cropName: "Onions", quantity: 7, sold: 0 },
    // ];
    return crops.map((crop) => (
      <div className="crop-row" key={crop.cropId}>
        <div className="crop-row-item">{crop.cropId}</div>
        <div className="crop-row-item">{crop.cropName}</div>
        <div className="crop-row-item">{crop.quantity}</div>
        <div className="crop-row-item">{crop.sold}</div>
      </div>
    ));
  }

  addCrops() {
    let crop = {
      cropId: this.state.crops.length + 1,
      cropName: this.state.cropName,
      quantity: this.state.quantity,
      sold: 0,
    };
    if (this.state.cropName === "")
      this.setState({ error: "Enter a crop name" });
    else if (this.state.quantity < 1)
      this.setState({ error: "Enter quantity greater than 0" });
    else
      this.setState({
        crops: [...this.state.crops, crop],
        quantity: 0,
        cropName: "",
        error: "",
      });
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
              value={this.state.cropName}
              onChange={(e) => this.setState({ cropName: e.target.value })}
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
              value={this.state.quantity}
              onChange={(e) => this.setState({ quantity: e.target.value })}
            />
          </div>
          <div className="error-message">{this.state.error}</div>

          <button
            onClick={this.addCrops.bind(this)}
            className="sell-button"
            type="submit"
          >
            SELL NOW
          </button>
        </div>

        <div className="clearfix"></div>
      </div>
    );
  }
}

// check mail
// drop course
