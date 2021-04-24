import { useState } from 'react';
import './BuyCrops.css';
import CropCard from './CropCard';

function CropMaker(crops) {
    return crops.map((crop) => (
        <CropCard cropName={crop[0]} cropPrice={crop[1]} cropWeight={crop[2]}></CropCard>
    ));
}

function BuyCrops() {
    // Format is Name, Price, Weight Left
    const [crops, setCrops] = useState([
        ["Onions", 40, 7],
        ["Mango", 75, 12],
        ["Tomatoes", 22, 3],
        ["Potatoes", 16, 35],
        ["Cucumber", 14.5, 47],
    ]);

    return(
        <div className="page-rect">
            <div className="sidebar">
                <h2 className="h2" style={{marginBottom:'24px'}}>Filters</h2>
                <h4 className="h4" style={{marginBottom:'8px'}}>Amount (in ₹)</h4>
                <div style={{display:'flex'}}>
                    <input className="amount-range-field" type="number" placeholder="Min"/>
                    <input className="amount-range-field" type="number" placeholder="Max"/>
                </div>
                <h4 className="h4" style={{marginTop:'32px'}}>Category</h4>
                <div style={{display:'flex', flexDirection:'column', margin:'12px 0px 0px 8px'}}>
                    <div style={{display:'flex'}}>
                        <input type="checkbox" id="Vegetable" style={{height:'20px', width:'20px'}}/>
                        <label htmlFor="Vegetable">Vegetable</label>
                    </div>

                    <div style={{display:'flex', marginTop:'8px'}}>
                        <input type="checkbox" id="Fruit" style={{height:'20px', width:'20px'}}/>
                        <label htmlFor="Fruit">Fruit</label>
                    </div>

                    <div style={{display:'flex', marginTop:'8px'}}>
                        <input type="checkbox" id="Pulses" style={{height:'20px', width:'20px'}}/>
                        <label htmlFor="Pulses">Pulses</label>
                    </div>

                    <div style={{display:'flex', marginTop:'8px'}}>
                        <input type="checkbox" id="Grain" style={{height:'20px', width:'20px'}}/>
                        <label htmlFor="Grain">Grain</label>
                    </div>
                </div>
            </div>
            <div className="main-area">
                {CropMaker(crops)}
            </div>
        </div>
    );
}

export default BuyCrops;