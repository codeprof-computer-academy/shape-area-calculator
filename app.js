// target the calculation area
const calculation_area = document.querySelector('.calculation-area')

// target the select for shape option

document.querySelector('.shape-option').addEventListener('change', function(event){

        if(event.target.value === "square"){

               let square = `<article>
                                   <h3>Square</h3>
                                   <div>
                                         <input type="text" placeholder="enter the length of the square" class="square-length">
                                   </div>

                                   <div>
                                        <label>Select Unit</label>
                                        <select class="unit-option">
                                                <option value="">--</option>
                                                <option value="cm">Centimetre</option>
                                                <option value="m">Metre</option>
                                        </select>
                                   </div>

                                   <button>Find Area</button>

                                   <h1>Area = <span class="result">0</span><small class="unit-display">cm</small><sup>2</sup></h1>
                        </article>`

                        calculation_area.innerHTML = square

                        // caculation logic starts here
                        document.querySelector('button').addEventListener('click', function(){

                                 //    grab the selected unit
                                    let unit = document.querySelector('.unit-option').value
                                //  get the square length value
                                let sqr_length = Number(document.querySelector(".square-length").value)

                                let area = sqr_length * sqr_length
                                document.querySelector('.result').innerHTML = area

                                // display the unit
                                document.querySelector('.unit-display').innerHTML = unit


                        })


        }else if(event.target.value === "rectangle"){

            let rectangle = `<article>
                            <h3>Rectangle</h3>
                            <div>
                                <input type="text" placeholder="enter the length of the rectangle" class="rect-length">

                                <input type="text" placeholder="enter the breadth of the rectangle" class="rect-breadth">
                            </div>
                        
                            <div>
                                <label>Select Unit</label>
                                <select class="unit-option">
                                    <option value="">--</option>
                                    <option value="cm">Centimetre</option>
                                    <option value="m">Metre</option>
                                </select>
                            </div>
                        
                            <button>Find Area</button>
                        
                            <h1>Area = <span class="result">0</span><small class="unit-display">cm</small><sup>2</sup></h1>
                        </article>`

                        calculation_area.innerHTML = rectangle

                         // caculation logic starts here
                        document.querySelector('button').addEventListener('click', function(){

                                 //    grab the selected unit
                                    let unit = document.querySelector('.unit-option').value
                                //  get the square length value
                                let rect_length = Number(document.querySelector(".rect-length").value)
                                let rect_breadth = Number(document.querySelector(".rect-breadth").value)

                                 let area = rect_breadth * rect_length
                                document.querySelector('.result').innerHTML = area

                                // display the unit
                                document.querySelector('.unit-display').innerHTML = unit


                        })

        }else if(event.target.value === "triangle"){

               let triangle = ` <article>
                            <h3>Triangle</h3>
                            <div>
                                <input type="text" placeholder="enter the base of the triangle" class="base">
                                <input type="text" placeholder="enter the height of the triangle" class="triangle-height">
                            </div>
                        
                            <div>
                                <label>Select Unit</label>
                                <select class="unit-option">
                                    <option value="">--</option>
                                    <option value="cm">Centimetre</option>
                                    <option value="m">Metre</option>
                                </select>
                            </div>
                        
                            <button>Find Area</button>
                        
                            <h1>Area = <span class="result">0</span><small class="unit-display">cm</small><sup>2</sup></h1>
                        </article>`

                        calculation_area.innerHTML = triangle

                          // caculation logic starts here
                        document.querySelector('button').addEventListener('click', function(){

                                 //    grab the selected unit
                                    let unit = document.querySelector('.unit-option').value
                                //  get the square length value
                                let base = Number(document.querySelector(".base").value)
                                let triangle_height = Number(document.querySelector(".triangle-height").value)

                                 let area = 0.5 * base * triangle_height
                                document.querySelector('.result').innerHTML = area

                                // display the unit
                                document.querySelector('.unit-display').innerHTML = unit


                        })

        }else if(event.target.value === "circle"){
            let circle = `<article>
                            <h3>Circle</h3>
                            <div>
                                <input type="text" placeholder="enter the radius of the circle" class="radius">
                              
                            </div>
                        
                            <div>
                                <label>Select Unit</label>
                                <select class="unit-option">
                                    <option value="">--</option>
                                    <option value="cm">Centimetre</option>
                                    <option value="m">Metre</option>
                                </select>
                            </div>
                        
                            <button>Find Area</button>
                        
                            <h1>Area = <span class="result">0</span><small class="unit-display">cm</small><sup>2</sup></h1>
                        </article>`

                        calculation_area.innerHTML = circle
                          // caculation logic starts here
                        document.querySelector('button').addEventListener('click', function(){

                                 //    grab the selected unit
                                    let unit = document.querySelector('.unit-option').value
                                //  get the square length value
                                let radius = Number(document.querySelector(".radius").value)
                              

                                 let area = 3.142 * radius * radius
                                document.querySelector('.result').innerHTML = area

                                // display the unit
                                document.querySelector('.unit-display').innerHTML = unit


                        })

        }else{
            calculation_area.innerHTML = `<h1>Ooops! select valid shape</h1>`
        }
         
})
