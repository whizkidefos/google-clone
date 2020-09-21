import React from 'react';
import '../css/SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import { Description, Image, LocalOffer, MoreVert, Room, SearchOutlined } from '@material-ui/icons';

//https://www.googleapis.com/customsearch/v1?[parameters]

function SearchPage() {
    const [{ term = 'tesla' }, dispatch] = useStateValue();

    //Live API Call
    const { data } = useGoogleSearch(term);

    // Mock API Call
    // const data = Response;

    console.log(data);

    return (
        <div className="searchPage">
            <header className="searchPage__header">
            <Link to="/">
                <img src="/images/google-logo.png" alt="google-logo" className="searchPage__logo"/>
            </Link>

            <div className="searchPage__headerBody">
                <Search hideButtons />

                <div className="searchPage__options">
                    <div className="searchPage__optionsLeft">
                        <div className="searchPage__option">
                            <SearchOutlined />
                            <Link to="/">All</Link>
                        </div>
                        <div className="searchPage__option">
                            <Description />
                            <Link to="/">News</Link>
                        </div>
                        <div className="searchPage__option">
                            <Image />
                            <Link to="/">Images</Link>
                        </div>
                        <div className="searchPage__option">
                            <LocalOffer />
                            <Link to="/">Shopping</Link>
                        </div>
                        <div className="searchPage__option">
                            <Room />
                            <Link to="/">Maps</Link>
                        </div>
                        <div className="searchPage__option">
                            <MoreVert />
                            <Link to="/">more</Link>
                        </div>
                    </div>

                    <div className="searchPage__optionsRight">
                        <div className="searchPage__option">
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
            </header>

            { term && (
                <section className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a className="searchPage__resultLink" href={item.link} target="_blank">
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage__resultImage" src={
                                        item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                                    } alt=""/>
                                )}
                                {item.displayLink}
                            </a>
                            <a className="searchPage__resultTitle" href={item.link} target="_blank">
                                <h3>{item.title}</h3>
                            </a>
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </section>
            ) }
        </div>
    )
}

export default SearchPage;
