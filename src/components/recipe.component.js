import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Recipe extends Component {
    constructor(props) {
        super(props);

        this.onDeleteRecipe = this.onDeleteRecipe.bind(this);

        this.state = {
            name: '',
            time: '',
            description: '',
            preparing: '',
            ingredientsTable: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/recipes/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    time: res.data.time,
                    description: res.data.description,
                    preparing: res.data.preparing,
                    ingredientsTable: res.data.ingredients.map((el, index) => {
                        return <tr key={index}>
                            <td>
                                {el[0]}
                            </td>
                            <td>
                                {el[1]}
                            </td>
                        </tr>
                    }),
                })
            })
        let table = this.state.ingredientsTable.slice();
        this.setState({
            ingredientsTable: table.map((el) => {
                return <tr key={el.index}>
                    <td>
                        {el[0]}
                    </td>
                    <td>
                        {el[1]}
                    </td>
                </tr>
            })
        })
    }

    onDeleteRecipe() {
        axios.delete(`http://localhost:5000/delete/recipes/${this.props.match.params.id}`)

        window.location = '/';
    }

    render() {
        return (
            <div className="container mt-5 pt-5 text-secondary">
                <div className="row">
                    <div className="col-md-7">

                        {/* Image */}

                        <div className="position-relative">
                            <img
                                src="https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-10-1200.jpg"
                                alt=""
                                className="img-fluid rounded mb-4"
                            />

                            {/* Image captition */}

                            <div className="img-desc position-absolute px-3 pt-2 mb-4 text-light bg-warning rounded">
                                <h6>{this.state.time}
                                    &nbsp;&nbsp;min </h6>
                                <h3>{this.state.name}
                                </h3>
                            </div>
                        </div>

                        {/* Recipe */}

                        <p>{this.state.description}</p>


                    </div>

                    <div className="col-md-5">
                        <Link to={`/edit/recipe/${this.props.match.params.id}`}>
                            <button type="button" className="btn btn-outline-warning px-5 "> Edit </button>
                        </Link>
                        <button type="button" className="btn btn-outline-danger px-4 " onClick={this.onDeleteRecipe}>Delete</button>
                        <br />
                        <h3 className="py-4 mt-3 text-secondary">Ingredients</h3>

                        {/* Ingredients Table */}

                        <table className="table table-borderless text-secondary">
                            <tbody>
                                {this.state.ingredientsTable}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 mb-5 pb-5">

                        {/* Preparing */}

                        <h3 className="my-5 text-dark">Preparing</h3>

                        <p>
                            {this.state.preparing}
                        </p>
                    </div>
                </div>
            </div >
        )
    }
}