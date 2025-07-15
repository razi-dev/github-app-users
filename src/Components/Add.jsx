import React, { useState } from 'react'
import Navbar from './Navbar'
import { type } from '@testing-library/user-event/dist/type'

const Add = () => {


    const [input, changeInput] = useState(

        { id: "",
    node_id:"",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    user_view_type: ""
}

    )

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })


    }

    const readValues = () => {
        console.log(input)
    }


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className="label form-label"> ID</label>
                                <input type="text" className="form-control" name='id' value={input.id} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">node_id</label>
                                <input type="text" className="form-control" name='node_id' value={input.node_id} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">avatar_url</label>
                                <input type="text" className="form-control" name='avatar_url' value={input.avatar_url} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">avatar_id</label>
                                <input type="email" className="form-control" name='gravatar_id' value={input.gravatar_id} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">url</label>
                                <input type="email" className="form-control" name='url' value={input.url} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">html_url</label>
                                <input type="email" className="form-control" name='html_url' value={input.html_url} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">followers_url</label>
                                <input type="email" className="form-control" name='followers_url' value={input.followers_url} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">gists_url</label>
                                <input type="email" className="form-control" name='gists_url' value={input.gists_url} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">starred_url</label>
                                <input type="email" className="form-control" name='starred_url' value={input.starred_url} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">subscription_url</label>
                                <input type="email" className="form-control" name='subscription_url' value={input.subscriptions_url} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">orgainsation_url</label>
                                <input type="email" className="form-control" name='organisation_url' value={input.organizations_url} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">repos_url</label>
                                <input type="email" className="form-control" name='reops_url' value={input.organizations_url} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">events_url</label>
                                <input type="email" className="form-control" name='events_url' value={input.events_url} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">received_events_url</label>
                                <input type="email" className="form-control" name='received_events_url' value={input.received_events_url}  onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">type</label>
                                <input type="email" className="form-control" name='type' value={input.type} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="label form-label">user_view_type</label>
                                <input type="email" className="form-control" name='user_view_type' value={input.user_view_type} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success" type="button" onClick={readValues}>SUBMIT</button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>


    )
}

export default Add
