import React from 'react'
import "./Discover.css"
import users from "../../Data/users.json"
import {usericons} from "../../assets/images"

const Discover = () => {
  return (
    <>
    <div className="content">
        <h3 className="text-2xl py-4 text-center underline font-bold">Suggested for you</h3>
        <div className="suggested items-center">
            {users.slice(0,7).map((user) => (
              <div key={user.id} className="usercard flex flex-col items-center">
                <img src={usericons[user.avatar]} className="story" />
                <strong className='mt-4'>@{user.username}</strong>
                <div> <strong>Name:</strong> {user.name}</div>
                <div><strong>Bio:</strong> {user.bio}</div>
                <button className="followbutton mt-4">Follow</button>
              </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Discover
