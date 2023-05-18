import React,{useState} from "react";
import "./Users.css"
import logo from "../Images/Github1.png"
import axios from "axios";
import {GoRepoClone} from "react-icons/go"
import {RiGroupLine} from "react-icons/ri"
import {BsPersonPlusFill} from "react-icons/bs"
import {BsCodeSquare} from "react-icons/bs"

const Users = ()=>{
    const [user, setUser] = useState('')
    const [search, setSearch] = useState('')
    const [error, setError] = useState()
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!search)
        setError("Please input the user's username")

        try {
            const base_url= `https://api.github.com/users/${search}`
            const response = await axios.get(base_url)
            setUser(response.data)
        } catch (error) {
            setError("user not found")
        }
    }
    return(
        <div className="body">
            <div className="family">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="" value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Input User's Username" />
                    <button type="submit">Search</button>
                </form>
                {
                    error &&(
                        <p className="error">{error}</p>
                    )
                }
                <div className="mother">
                    <div className="left">
                        <div className="left1">
                            <div className="left-sub">
                                <GoRepoClone />
                                <div>
                                    {
                                        user &&(
                                            <h1>{user.public_repos}</h1>
                                        )
                                    }
                                    <p>Repos</p>
                                </div>
                            </div>
                            <div className="left-sub2">
                                <RiGroupLine />
                                <div>
                                    {
                                        user &&(
                                            <h1>{user.followers}</h1>
                                        )
                                    }
                                    <p>Followers</p>
                                </div>
                            </div>
                        </div>
                        <div className="left2">
                            <p className="user-para">User</p>    
                            <div className="userDetails">
                                <div className="det">
                                    {
                                        user &&(
                                            <img src={user.avatar_url} alt="" />
                                        )
                                    }
                                    <div>
                                        {
                                            user &&(
                                                <p>{user.name}</p>
                                            )
                                        }

                                    </div>
                                    {
                                        user &&(
                                            <button><a href={user.html_url}>follow</a></button>
                                        )
                                    }
                                </div>
                                <div className="det2">
                                    {
                                        user &&(
                                            <div style={{width:"100%"}}>
                                                <p>{user.bio? user.bio: user.login + " has not updated their bio"}</p>
                                                <p style={{color:"#6183A2"}}> {user.location}</p>
                                                <p>{user.company}</p>
                                                <p><a href={user.blog}>{user.blog}</a></p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right1">
                            <div className="rightsub">
                                <BsPersonPlusFill />
                                <div>
                                    <h1>{user.following}</h1>
                                    <p>Following</p>
                                </div>
                            </div>
                            <div className="rightsub1">
                                <BsCodeSquare />
                                <div>
                                    <h1>{user.gist}</h1>
                                    <p>Gist</p>
                                </div>
                            </div>
                        </div>
                        <div className="right2">
                            <p>Followers</p>
                            <div className="follower">
                                <div className="foll">
                                    {/* {
                                        user &&(
                                            <img src={user.avatar_url} alt="" />
                                        )
                                    } */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Users;