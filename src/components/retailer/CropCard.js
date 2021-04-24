import './CropCard.css';
import {useState, useEffect} from 'react';
import {createClient} from "pexels";
import axios from 'axios';
const APPkey = '563492ad6f917000010000011b876665dc2f46ae9d7b6b295b6a2954';

function createCard(result, cropName, cropPrice, cropWeight, createState) {
    if(createState === 1)
    {return (
        <div style={{maxHeight:'400px', padding:'0px', margin:'0px'}}>
        <img className="crop-image" src={result} alt={"A fresh and beautiful "+cropName}/>
            <div style={{display:'flex', alignItems:'center'}}>
            <div style={{display:'flex', padding:'10px 0px 0px 16px'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', width:'wrap'}}>
                    <h3 className="h3 crop-name" style={{color:'var(--black-2)', marginBottom:'6px'}}>{cropName}</h3>
                    <p className="p1" style={{color:'var(--black-30)', margin:'0px', padding:'0px'}}>{cropWeight+" kg left"}</p>
                </div>
            </div>
            <div style={{flex:1}}></div>
            <h2 className="h2" style={{marginRight:'16px', color:'var(--black-2)'}}>{"₹"+cropPrice}</h2>
            </div>
        </div>
    )};
}

function CropCard({cropName, cropPrice, cropWeight}) {
    const [result, setResult] = useState([]);
    const [createState, setCreateState] = useState(0);
    let query = cropName;
    useEffect(() => {
        loadpic();
    }, []);

    const loadpic = async () => {
        const url = "https://api.pexels.com/v1/search?query=" + cropName + "&per_page=1";  
        axios.get(url, {  
            headers: {  
                'Authorization': `${APPkey}`  
            }  
        }).then(data => {  
            console.log(data);  
            setCreateState(1);
            setResult(data.data.photos[0].src.large);  
        })
    }
    return(
        <div className="crop-card-wrapper"> 
            {createCard(result, cropName, cropPrice, cropWeight, createState)}
        </div>
    );
}

export default CropCard;