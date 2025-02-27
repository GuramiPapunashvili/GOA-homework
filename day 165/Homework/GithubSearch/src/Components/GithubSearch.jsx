import { useState } from "react";
import "./GithubSearch.css";

const GithubSearch = () => {
    const [info, setInfo] = useState(null);
    const [username, setUsername] = useState("");
    const [isLightMode,setIsLightMode] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredUsername = e.target.username.value;
        setUsername(enteredUsername);

        fetch(`https://api.github.com/users/${enteredUsername}`)
            .then((response) => response.json())
            .then((data) => setInfo(data));
    };

    const handleToggle = (e) => {
        setIsLightMode(!isLightMode)
    }

    return (
        <div className="container">
            <header>
                <h1>devfinder</h1>
                <button onClick={handleToggle} className="toggle-mode">{isLightMode ? "Light" : "Dark"}</button>
            </header>

            <form onSubmit={handleSubmit} className="search-box">
                <input type="text" name="username" placeholder="Search GitHub username..." />
                <button type="submit">Search</button>
            </form>

            {info && (
                <div className="profile-card">
                    <img className="avatar" src={info.avatar_url} alt="Profile" />
                    <div className="user-info">
                        <h2>{info.name || info.login}</h2>
                        <p className="username">@{info.login}</p>
                        <p className="bio">{info.bio || "This profile has no bio"}</p>
                        <p className="joined-date">Joined {new Date(info.created_at).toDateString()}</p>
                    </div>
                    
                    <div className="stats">
                        <div>
                            <p>Repos</p>
                            <h3>{info.public_repos}</h3>
                        </div>
                        <div>
                            <p>Followers</p>
                            <h3>{info.followers}</h3>
                        </div>
                        <div>
                            <p>Following</p>
                            <h3>{info.following}</h3>
                        </div>
                    </div>

                    <div className="extra-info">
                        <p>📍 {info.location || "Not Available"}</p>
                        <p>🐦 {info.twitter_username || "Not Available"}</p>
                        <p>🔗 <a href={info.html_url} target="_blank">GitHub</a></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GithubSearch;
