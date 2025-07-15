import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [is_Loading, changeLoading] = useState(true)


    const [todoData, changeTodoData] = useState(
         [] 
    )


    const fetchData = () => {
        axios.get("https://api.github.com/users")
            .then((response) => {
                changeLoading(false)
                changeTodoData(response.data)
            })
            .catch(
                () => {
                    alert("something went wrong")
                }
            )
    }

    useEffect(() => { fetchData() }, {})
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Node_id</th>
                                    <th scope="col">avatar_url</th>
                                    <th scope="col">gravatar_id</th>
                                    <th scope="col">url</th>
                                    <th scope="col">html_url</th>
                                    <th scope="col">followers_url</th>
                                    <th scope="col">following_url</th>
                                    <th scope="col">gists_url</th>
                                    <th scope="col">starred_url</th>
                                    <th scope="col">subscription_url</th>
                                    <th scope="col">orgainsation_url</th>
                                    <th scope="col">repos_url</th>
                                    <th scope="col">events_url</th>
                                    <th scope="col">received_events_url</th>
                                    <th scope="col">type</th>
                                    <th scope="col">user_view_type</th>
                         
                                </tr>
                            </thead>
                            {
                                is_Loading ? 
                                (<div class="d-flex align-items-center">
                                    <strong role="status">Loading...</strong>
                                    <div class="spinner-border ms-auto" aria-hidden="true"></div>
                                </div>) :

                                 (<tbody>
                                    {todoData.map((data, index) => {
                                        return (
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.node_id}</td>
                                                <td><img src={data.avatar_url} width="50" className='rounded-circle'/></td>
                                                <td>{data.gravatar_id}</td>
                                           <td><a href={data.url} class="link-primary" target="blank">URL</a></td>
                                           <td><a href={data.html_url} class="link-primary" target="blank">html_URL</a></td>
                                           <td><a href={data.followers_url} class="link-primary" target="blank">Followers url</a></td>
                                           <td><a href={data.following_url} class="link-primary" target="blank">Following url</a></td>
                                           <td><a href={data.gists_url} class="link-primary" target="blank">gists_url</a></td>
                                           <td><a href={data.starred_url} class="link-primary" target="blank">Starred_url</a></td>
                                           <td><a href={data.subscriptions_url} class="link-primary" target="blank">Subscripton_url</a></td>
                                           <td><a href={data.organizations_url} class="link-primary" target="blank">organizations_url</a></td>
                                           <td><a href={data.repos_url} class="link-primary" target="blank">Repos_url</a></td>
                                            
                        
                                
                                            
                                        
                                            
                                             
                                
                                                <td>{data.events_url}</td>
                                                <td>{data.received_events_url}</td>
                                                <td>{data.type}</td>
                                                <td>{data.user_view_type}</td>

                                               
                                            </tr>
                                        )
                                    })}
                                </tbody>)
                            }

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default View
