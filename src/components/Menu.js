import MenuStyles from "../styles/menu.module.css"

export default function Menu(props) {
    return <div className={`col-auto ${MenuStyles.MainDiv}`}>
        <div className={MenuStyles.TitleDiv}>Recipe Types</div>
        {props.data.map((e, index) => <div
            className={MenuStyles.MenuItem}
            key={index}
            onClick={() => { props.clickedItem(index) }}
        >{e}</div>)}
    </div>
}