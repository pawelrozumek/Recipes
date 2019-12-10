import React, { Component } from 'react';


export default class Recipe extends Component {
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
                            <span className="img-desc position-absolute px-3 pt-2 mb-4 text-light bg-warning rounded">
                                <h6>45 min </h6>
                                <h3>Caesar salad</h3>
                            </span>
                        </div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio iure cum
                            error, nulla, nisi doloribus natus consequuntur nemo, libero architecto
                            tempore cumque officia aliquam veritatis voluptatem debitis provident.
                            Vel, alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                            incidunt minus totam. Dolor officia nostrum reiciendis hic ut. Nulla
                            accusantium molestiae libero corrupti officia dolorem, qui dignissimos
                            praesentium consectetur porro.
      </p>
                    </div>
                    <div className="col-md-5">
                        <button type="button" className="btn btn-outline-warning px-5 ">
                            {" "}
                            Edit{" "}
                        </button>
                        <button type="button" className="btn btn-outline-danger px-5 ">
                            Delete
                        </button>
                        <br />
                        <h3 className="py-4 mt-3 text-secondary">Ingredients</h3>
                        <table className="table table-borderless text-secondary">
                            <tbody>
                                <tr>
                                    <td> ½ </td>
                                    <td>baguette</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>romaine lettuce hearts</td>
                                </tr>
                                <tr>
                                    <td>50 g</td>
                                    <td>olives (pitted)</td>
                                </tr>
                                <tr>
                                    <td>50 g</td>
                                    <td>cherry tomatoes</td>
                                </tr>
                                <tr>
                                    <td>50 g</td>
                                    <td>cucumber</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>eggs (divided)</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>anchovy fillets</td>
                                </tr>
                                <tr>
                                    <td>1 clove</td>
                                    <td>garlic</td>
                                </tr>
                                <tr>
                                    <td>1 tsp</td>
                                    <td>lemon juice</td>
                                </tr>
                                <tr>
                                    <td>1 tsp</td>
                                    <td>Worcestershire sauce</td>
                                </tr>
                                <tr>
                                    <td>1 tbsp</td>
                                    <td>mustard</td>
                                </tr>
                                <tr>
                                    <td>1 tbsp</td>
                                    <td>white balsamic vinegar</td>
                                </tr>
                                <tr>
                                    <td>140 ml</td>
                                    <td>olive oil (divided)</td>
                                </tr>
                                <tr>
                                    <td>20 g</td>
                                    <td>Parmesan</td>
                                </tr>
                                <tr>
                                    <td>1 tsp</td>
                                    <td>sugar</td>
                                </tr>
                                <tr>
                                    <td />
                                    <td>salt</td>
                                </tr>
                                <tr>
                                    <td />
                                    <td>pepper</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <h3 className="my-5 text-dark">Preparing</h3>
                        <p>
                            1. Preheat the oven to 180°. For the bread chips, cut the baguette into
        thin slices and distribute on a lined baking tray.{" "}
                        </p>
                        <p>
                            2. Drizzle the slices with olive oil and bake in preheated oven at 180°
                            for approx. 5 - 7 min. until golden.
      </p>
                        <p>
                            3. For the dressing, cook an egg in boiling water for approx. 2 - 3 min.
                            Gently crack open the egg to remove the egg yolk. Put the parboiled egg
                            yolk into a tall container.
      </p>
                        <p>4. Finely chop anchovy fillets and garlic.</p>
                        <p>
                            5. Add chopped anchovy fillets and garlic, lemon juice, Worcestershire
                            sauce, mustard, white balsamic vinegar, and sugar to the egg yolk and
                            mix with a hand blender.
      </p>
                        <p>
                            6. Slowly stir the rest of the olive oil into the egg mixture. By doing
                            this, mayonnaise will start to form. Season with salt and pepper.
      </p>
                        <p>
                            7. Halve olives and tomatoes. Dice cucumber. Wash and dry romaine
                            lettuce hearts and tear into bite-sized pieces.
      </p>
                        <p>
                            8. Poach 2 eggs in hot, but not boiling, water to the desired degree of
                            hardness. For a runny center, approx. 3 - 5 min. is recommended.
                            Transfer to a paper towel to dry.
      </p>
                        <p>
                            9. Mix the lettuce, tomatoes, cucumber, and olives with the dressing and
                            transfer to a plate. Sprinkle the bread chips on top and serve with a
                            poached egg and Parmesan shavings.
      </p>
                    </div>
                </div>
            </div>
        )
    }
}