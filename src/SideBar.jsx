import { Avatar } from "@material-ui/core"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"
import "./SideBar.css"

const SideBar = () => {
    const user = useSelector(selectUser)
    const  recentItem = (topic) => {
      return (
          <div className="sideBar-recentItem">
            <span className="sideBar-hash">#</span>
            <p>{topic}</p>
        </div>
      )  
    }
    return (
      <div className="sideBar">
        <div className="sideBarTop">
          <img
            src="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <Avatar src={user.photoUrl} className="sideBar-avatar">
            {user.displayName[0]}
          </Avatar>

          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>
        <div className="sideBar-stats">
          <div className="sideBar-stat">
            <p>who viewed you</p>
            <p className="sideBar-statNumber">2,532</p>
          </div>
          <div className="sideBar-stat">
            <p>views on post</p>
            <p className="sideBar-statNumber">1,532</p>
          </div>
        </div>

        <div className="sideBarBottom">
          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('programming')}
          {recentItem('software engineering')}
          {recentItem('design')}
          {recentItem('developer')}
        </div>
      </div>
    );
}

export default SideBar
