import { useRef } from "react";
import IngStyles from '../styles/ingredients.module.css'

export default function Ingredients(props) {
    let { check, menuId, recId, data, update } = props;
    let textInput = useRef(null);

    return <div className={`col ${IngStyles.MainDiv}`}>
        <div className={IngStyles.TitleDiv}>Recipe Ingredients</div>
        <div className={IngStyles.Body}>
            {check ?
                <>
                    <div style={{ fontSize: "24px", padding: "10px 10px 10px 16px",  }}>{data[menuId].type}</div>
                    <div style={{fontSize: "14px", padding: "0px 16px 10px 16px"}}>
                        <input placeholder="Enter Ingredient" ref={textInput}></input>
                        <button style={{marginLeft: "3px"}} type="button" onClick={() => {
                            update(textInput.current.value);
                            textInput.current.value = ""
                        }}>Add Ingredient</button>
                    </div>
                    <ul>
                        {data[menuId].list[recId].ingredients.map((e, index) => <li style={{fontSize:"14px"}} key={index}>{e}</li>)}
                    </ul>
                </>
                : null
            }
        </div>
    </div>
}