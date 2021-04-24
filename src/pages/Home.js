import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from '@material-ui/core';
import  Search  from "../components/Search"

const Home = () => {
    return (
        <div className="home">
            
            
            <div className="home__header">
               <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div> 
                <div className="home__headerRight">
                     <Link to="/gmail">Gmail</Link>
                     <Link to="/images">Images</Link>
                     <AppsIcon />
                     <Avatar/>
                 </div> 
            </div>
            
            <div className="home__body">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/49947510-0686-4cad-b5c8-e5ee95492c91/d98chn1-5c099699-2816-4088-a031-d0558ffdb48b.png/v1/fill/w_1549,h_516,q_75,strp/google_2015_logo_high_resolution_png_by_jovicasmileski-d98chn1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi80OTk0NzUxMC0wNjg2LTRjYWQtYjVjOC1lNWVlOTU0OTJjOTEvZDk4Y2huMS01YzA5OTY5OS0yODE2LTQwODgtYTAzMS1kMDU1OGZmZGI0OGIucG5nIiwid2lkdGgiOiI8PTE1NDkiLCJoZWlnaHQiOiI8PTUxNiJ9XV19.l7OPnrta94OM1KZCElvVJ127-27H_B6Brvqyx_0T760"
                alt="Google Logo"
                />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home;