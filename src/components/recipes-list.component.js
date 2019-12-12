import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class RecipesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recipesData: [],
            recipesList: []
        }

    }

    componentDidMount() {
        axios.get('http://localhost:5000/recipes')
            .then(res => {
                const dataArray = res.data.map(recipe =>
                    [recipe._id, recipe.name, recipe.time]
                )
                const listArray = dataArray.map(recipe =>

                    <div key={recipe[0]} className="col-md-4 mx-n2">
                        <div className="position-relative">
                            <Link to={`/recipe/${recipe[0]}`}>
                                <img
                                    src="./img/caesar-salad-10-1200.jpg"
                                    alt=""
                                    className="img-fluid rounded"
                                />
                                <div className="img-desc position-absolute pl-3 pt-2 shad rounded w-100 h-100">
                                    <span className="img-desc position-absolute text-light pl-3">
                                        <h6>
                                            {recipe[2]}
                                            &nbsp;&nbsp;min </h6>
                                        <h3>{recipe[1]}
                                        </h3>
                                    </span>
                                </div>
                            </Link >
                        </div>
                    </div >

                )
                this.setState({
                    recipesData: dataArray,
                    recipesList: listArray
                })
            })
    }



    render() {
        return (
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col text-dark h4"> Latest recipes</div>
                </div>
                <div className="row mt-4">
                    {this.state.recipesList}
                </div>
            </div>
        )
    }
}