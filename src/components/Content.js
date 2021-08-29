import React from "react";
import Ingredients from "./Ingredients";
import Menu from "./Menu";
import Recipies from "./Recipies";
import "../styles/Content.css";

export default class Content extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            menu: {
                click: false,
                id: null
            },
            recipies: {
                click: false,
                id: null
            }
        }
    }

    clickedMenu(index) {
        this.setState({
            menu: {
                click: true,
                id: index
            },
            recipies: {
                click: false
            }
        })
    }

    clickedRecipe(index) {
        this.setState({
            recipies: {
                click: true,
                id: index
            }
        })
    }

    updateData(text) {
        let data = this.state.data.map((e, index) => {
            if(index === this.state.menu.id){
                e.list[this.state.recipies.id].ingredients.push(text);
            }
            return e;
        })
        this.setState({
            data
        })
    }

    render() {
        let menuData = this.state.data.map(e => e.type)

        return <>
            <div className="row FirstRow" >
                <Menu
                    data={menuData}
                    clickedItem={e => this.clickedMenu(e)}
                />
                <Recipies
                    check={this.state.menu.click}
                    menuId={this.state.menu.id}
                    data={this.state.data}
                    clickedItem={e => this.clickedRecipe(e)}
                />
            </div>
            <div className="row LastRow">
                <Ingredients
                    check={this.state.recipies.click}
                    menuId={this.state.menu.id}
                    recId={this.state.recipies.id}
                    data={this.state.data}
                    update={(ing) => this.updateData(ing)}
                />
            </div>
        </>
    }
}