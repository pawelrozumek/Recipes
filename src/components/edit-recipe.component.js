import React, { Component } from 'react';
import axios from 'axios';


export default class EditRecipe extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePreparing = this.onChangePreparing.bind(this);
        this.onChangeIngredient = this.onChangeIngredient.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onAddRow = this.onAddRow.bind(this);
        this.onDeleteRow = this.onDeleteRow.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: '',
            time: '',
            description: '',
            preparing: '',
            ingredients: [],
            index: 0,
            ingredientsTable: []
        }

        axios.get(`http://localhost:5000/recipes/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    time: res.data.time,
                    description: res.data.description,
                    preparing: res.data.preparing,
                    ingredients: res.data.ingredients,
                });
            })
            .then(() => { this.state.ingredients.forEach(() => { this.onAddRow() }) })
    }



    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeTime(e) {
        this.setState({
            time: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangePreparing(e) {
        this.setState({
            preparing: e.target.value
        });
    }

    onChangeIngredient(e) {
        let array = this.state.ingredients.slice();
        array[e.target.id][1] = e.target.value
        this.setState({
            ingredients: array
        });
    }
    onChangeAmount(e) {
        let array = this.state.ingredients.slice();
        array[e.target.id][0] = e.target.value
        this.setState({
            ingredients: array
        });
    }

    onDeleteRow(e) {
        let array = this.state.ingredients.slice();
        let table = this.state.ingredientsTable.slice();
        table[e.target.value] = null;
        array[e.target.value] = null;
        this.setState({
            ingredientsTable: table,
            ingredients: array
        });
    }

    onAddRow() {
        let length = this.state.ingredients.length;
        if (length == this.state.index + 1) {
            let array = this.state.ingredients.slice();
            array.push(['', '']);
            this.setState({
                ingredients: array,
            });
        }
        let table = this.state.ingredientsTable.slice();
        table.push(<tr key={this.state.index.toString()}>
            <td>
                <input
                    type="text"
                    id={this.state.index}
                    className="form-control"
                    placeholder="Amount"
                    maxLength="10"
                    defaultValue={this.state.ingredients[this.state.index][0]}
                    onChange={this.onChangeAmount}
                />
            </td>
            <td>
                <input
                    type="text"
                    id={this.state.index}
                    className="form-control"
                    placeholder="Amount"
                    maxLength="10"
                    defaultValue={this.state.ingredients[this.state.index][1]}
                    onChange={this.onChangeIngredient}
                />
            </td>
            <td>
                <button value={this.state.index} className="btn btn-outline-danger"
                    onClick={this.onDeleteRow}>x</button>
            </td>
        </tr>);
        this.setState({
            ingredientsTable: table,
            index: this.state.index + 1
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let array = this.state.ingredients.filter((el) => { return el != null })
        const recipe = {
            name: this.state.name,
            time: this.state.time,
            description: this.state.description,
            preparing: this.state.preparing,
            ingredients: array,
        }

        axios.post(`http://localhost:5000/update/${this.props.match.params.id}`, recipe);

        window.location = `/recipe/${this.props.match.params.id}`;
    }

    render() {

        return (
            <div className="container mt-5 pt-5 text-secondary">
                <div className="row">
                    <div className="col-md-7">
                        <div className="position-relative">
                            <img
                                src="./img/caesar-salad-10-1200.jpg"
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

                        {/* Recipe forms */}

                        <form className="form-inline">
                            <div className="form-group">
                                <label htmlFor="cookingTime"> Cooking time </label>
                                <input
                                    type="number"
                                    step="1"
                                    min="1"
                                    value="1"
                                    required={true}
                                    className="form-control mx-sm-3"
                                    id="cookingTime"
                                    value={this.state.time}
                                    onChange={this.onChangeTime}
                                />
                            </div>
                        </form>
                        <form>
                            <label htmlFor="recipeName"> Recipe Name </label>
                            <div className="form-group">
                                <input
                                    type="text"
                                    required={true}
                                    className="form-control"
                                    id="recipeName"
                                    placeholder="Enter recipe name here"
                                    maxLength="50"
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                />
                                <label htmlFor="description"> Description </label>

                                <textarea
                                    type="text"
                                    required={true}
                                    className="form-control"
                                    id="description"
                                    rows="10"
                                    placeholder="Type recipe description here. You can drag bottom left corner to adjust text area size!"
                                    value={this.state.description}
                                    onChange={this.onChangeDescription}
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-md-5">
                        <label> Ingredients </label>

                        {/* Ingredients Table */}

                        <table className="table table-bor</table>derless text-secondary">
                            <tbody>
                                {this.state.ingredientsTable}
                            </tbody>
                        </table>

                        {/* Adding Ingredients */}

                        <button className="btn btn-outline-primary px-5 mb-4" onClick={this.onAddRow}>Add Ingredient</button>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 mb-5 pb-5">

                        {/* Preparing Text Area */}

                        <form>
                            <label htmlFor="preparing"> Preparing </label>
                            <textarea
                                type="text"
                                required={true}
                                className="form-control"
                                rows="10"
                                id="preparing"
                                placeholder="Here you can tell us how to prepare dish. You can drag bottom left corner to adjust text area size!"
                                value={this.state.preparing}
                                onChange={this.onChangePreparing}
                            />
                        </form>
                        <br />
                        <button className="btn btn-outline-success" onClick={this.onSubmit}>Save </button>
                    </div>
                </div>
            </div>
        )
    }
}