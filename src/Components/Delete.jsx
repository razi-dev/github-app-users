import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Delete = () => {


       const [input, changeInput] = useState(
        
                { id:""}
        
            )
        
            const inputHandler =(event)=>{
        
                changeInput( {...input,[event.target.name]:event.target.value})
        
                
            }
             const readValues=()=>{
            console.log(input)
        }
    
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 p-5">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Delete items</label>
                                <input type='text' className="form-control " name='id' value={input.id} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-danger" type="button" onClick={readValues}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete
