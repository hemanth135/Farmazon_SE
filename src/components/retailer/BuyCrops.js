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
                <div style={{display:'flex'}}>
                    <div style={{flex:1}}></div>
                    <div className="search-bar" style={{display:'flex', marginTop:'32px', alignItems:'center'}}>
                        <input className="search-bar-field" type="text" placeholder="Search"/>
                        <div onClick={""}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                            <path d="M23.7068 22.293L16.8818 15.4681C18.2038 13.8351 18.9998 11.7601 18.9998 9.50018C18.9998 4.26222 14.7378 0.000244141 9.49988 0.000244141C4.26193 0.000244141 0 4.26218 0 9.50013C0 14.7381 4.26197 19.0001 9.49992 19.0001C11.7599 19.0001 13.8349 18.2041 15.4678 16.8821L22.2928 23.707C22.4878 23.902 22.7438 24 22.9998 24C23.2558 24 23.5118 23.902 23.7068 23.707C24.0978 23.316 24.0978 22.684 23.7068 22.293ZM9.49992 17.0001C5.36395 17.0001 2 13.6361 2 9.50013C2 5.36415 5.36395 2.0002 9.49992 2.0002C13.6359 2.0002 16.9998 5.36415 16.9998 9.50013C16.9998 13.6361 13.6359 17.0001 9.49992 17.0001Z" fill="#666666"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="crops-area">
                    {CropMaker(crops)}
                </div>
            </div>
        </div>
    );
}

export default BuyCrops;