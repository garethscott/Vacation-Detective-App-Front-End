import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
    state = {}
    render() {
        return (
            <div className="profile-content-box">
                <div className="header">
                    <h1>Welcome back!</h1>
                    <div className="profile-img"></div>
                </div>
                <div className="search-board">
                    <div className="sub-title-box">
                        <h3 className="previous-searches">Previous searches</h3>
                        <Link to="/questions"><h3 className="new-search">New Search</h3></Link>
                    </div>
                    <div className="board-container">
                        <div className="board"></div>
                        <div className="board"></div>
                        <div className="board"></div>
                    </div>
                </div>
                <Link to="/home"><h3>Sign out</h3></Link>

            </div>
        )
    }
}

export default ProfilePage;