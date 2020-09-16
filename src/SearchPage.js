import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import Response from './reponse';
import SearchBar from "./Search"
import { Link } from '@material-ui/core';
import { Search, Description, Image, LocalOffer, Room, MoreVert } from '@material-ui/icons';
function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    // const data = Response;
    console.log(data);
    return (
        <div className="SearchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        className="searchPage_logo"
                        alt="" />
                </Link>
                <div className="searchPage_headerBody">
                    <SearchBar hideButtons searchpagecss />
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <Search />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <Description />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <Image />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOffer />
                                <Link to="/shopping">shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <Room />
                                <Link to="/maps">maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVert />
                                <Link to="/more">more</Link>
                            </div>
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            {
                term && (
                    <div className="searchPage_results">
                        <p className="searchPage_resultCount">
                            About {data?.searchInformation.formattedTotalResults} results({data?.searchInformation.formattedSearchTime}) seconds for {term}
                        </p>
                        {data?.items.map(item => (
                            <div className="searchPage_result">
                                <a href={item.link}>
                                    {
                                        item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                            <img
                                                className="searchPage_resultImage"
                                                src={
                                                    item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                                                }
                                                alt=""
                                            />
                                        )}

                                    {item.displayLink}</a>
                                <a className="searchPage_result_Title" href={item.link}> <h3>{item.title}</h3> </a>
                                <p className="searchPage_result_Snippet">
                                    {item.snippet}
                                </p>
                            </div>

                        ))}
                    </div>
                )
            }

        </div>
    )
}

export default SearchPage;
