import React from 'react'
import "./SearchPage.css"
import { useStateValue } from '../StateProvider';
// import { actionTypes } from '../reducer';
import useGoogleSearch from '../useGoogleSearch';
import Response from "../response";
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from "@material-ui/icons/Search"
import DescriptionIcon  from '@material-ui/icons/Description';
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import ImageIcon from "@material-ui/icons/Image"
import MoreVertIcon from "@material-ui/icons/MoreVert"

const SearchPage = () => {
    const [{term},dispatch] = useStateValue()
     const { data } = useGoogleSearch(term); //Live Api Call

   //const data = Response;
    
    //
    console.log(data);
    return (
        <div className="searchPage">
                <div className="searchPage__header">
                    <Link to="/">
                    <img className="searchPage__logo"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/49947510-0686-4cad-b5c8-e5ee95492c91/d98chn1-5c099699-2816-4088-a031-d0558ffdb48b.png/v1/fill/w_1549,h_516,q_75,strp/google_2015_logo_high_resolution_png_by_jovicasmileski-d98chn1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi80OTk0NzUxMC0wNjg2LTRjYWQtYjVjOC1lNWVlOTU0OTJjOTEvZDk4Y2huMS01YzA5OTY5OS0yODE2LTQwODgtYTAzMS1kMDU1OGZmZGI0OGIucG5nIiwid2lkdGgiOiI8PTE1NDkiLCJoZWlnaHQiOiI8PTUxNiJ9XV19.l7OPnrta94OM1KZCElvVJ127-27H_B6Brvqyx_0T760"
                    />
                    </Link>
                    <div className="searchPage__headerBody">
                            <Search hideButtons/>
                            <div className="searchPage__options">
                                <div className="searchPage__optionsLeft">
                                        <div className="searchPage__option">
                                                <SearchIcon />
                                                <Link to ="/all">All</Link>
                                        </div>
                                        <div className="searchPage__option">
                                                <DescriptionIcon />
                                                <Link to ="/news">News</Link>
                                        </div>
                                        <div className="searchPage__option">
                                                <ImageIcon />
                                                <Link to ="/images">Images</Link>
                                        </div>
                                        <div className="searchPage__option">
                                                <LocalOfferIcon />
                                                <Link to ="/shopping">Shopping</Link>
                                        </div>
                                        <div className="searchPage__option">
                                                <RoomIcon />
                                                <Link to ="/maps">maps</Link>
                                        </div>
                                        <div className="searchPage__option">
                                                <MoreVertIcon />
                                                <Link to ="/more">more</Link>
                                        </div>
                                </div>
                                <div className="searchPage__optionsRight">
                                        <div className="searchPage__option">
                                                
                                                <Link to ="/settings">Settings</Link>
                                        </div>
                                        <div className="searchPage__option">
                                                
                                                <Link to ="/tools">tools</Link>
                                        </div>

                                </div>
                            </div>
                    </div>
                </div>
               {term &&  (
                        <div className="searchPage__results">
                                <p className="searchPage__resultCount">
                                        About {data?.searchInformation.formattedTotalResults} results
                                        ({data?.searchInformation.formattedSearchTime}) for {term}
                                </p>

                                {data?.searchInformation.formattedTotalResults !== '0' ? data?.items.map((item,index) =>(
                                                <div key={index} className="searchPage__result"> 
                                                       
                                                       <a href={item.link}>
                                                       {item.pagemap?.cse_image?.length > 0 &&
                                                        item.pagemap?.cse_image[0]?.src && (
                                                               <img className="searchPage__resultImage"
                                                               src={
                                                                item.pagemap?.cse_image[0]?.src
                                                               }
                                                               alt="image"
                                                               /> 
                                                        )
                                                        }
                                                        {item.displayLink}</a>
                                                       <a className="searchPage__resultTitle" href={item.link}><h2>{item.title}</h2></a>
                                                        <p className="searchPage__resultSnippet">{item.snippet}</p>
                                                </div>
                                        )):(<h2>No Results For {term}</h2>)
                                }
                        </div>
               )}
        </div>
    )
}

export default SearchPage;
