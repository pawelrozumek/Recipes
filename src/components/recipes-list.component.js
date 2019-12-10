import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class RecipesList extends Component {

    constructor(props) {
        super(props);

        this.state = { recipes: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/recipes')
            .then(res => {

            });
    }

    render() {
        return (
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col text-dark h4"> Latest recipes</div>
                </div>
                <div className="row mt-4 no-gutters">
                    <div className="col-sm-4 p-1">
                        <img
                            src="./img/caesar-salad-10-1200.jpg"
                            alt=""
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-sm-4 p-1">
                        <img
                            src="./img/Pomodoro-Sauce-foodiecrush.com-015.jpg"
                            alt=""
                            className="img-fluid rounded "
                        />
                    </div>
                    <div className="col-sm-4 p-1">
                        <img
                            src="./img/BIG_0003_Pikantny_teksanski_burger.png"
                            alt=""
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            </div>
        )
    }
}