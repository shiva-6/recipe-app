import RecipeStyles from '../styles/recipies.module.css'
import images from '../images';

export default function Recipies(props) {
    let { check, menuId, data, clickedItem } = props;
    let imageHash = new Map();
    imageHash.set('alooparathas.jpg', images.alooparathas);
    imageHash.set('appam.jpg', images.appam);
    imageHash.set('bhelpuri.jpg', images.bhelpuri);
    imageHash.set('bittergourdfrys.jpg', images.bgFrys);
    imageHash.set('Gulab-Jamun.jpg', images.gulabJamun);
    imageHash.set('masaladosa.jpg', images.masalaDosa);
    imageHash.set('murukku.jpg', images.murukku);
    imageHash.set('Mysore-Pak.jpg', images.mysorePak);
    imageHash.set('oatssoup.jpg', images.oats);
    imageHash.set('phulka.jpg', images.phulka);
    imageHash.set('ragi idli dosa.jpg', images.ragi);
    imageHash.set('rice noodles.jpg', images.noodles);

    
    return <div className={`col`}>
        {check ?
            data[menuId].list.map((e, index) => <div
                className={RecipeStyles.Item}
                key={e.id}
            >
                <div
                    className={RecipeStyles.Inner}
                    onClick={() => { clickedItem(index) }}
                >
                    <img src={imageHash.get(`${e.pic}`)} alt={e.pic}></img>
                    <div style={{ paddingTop: "2px" }}>
                        {e.name}
                    </div>
                </div>
            </div>)
            : null}
    </div>
}