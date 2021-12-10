import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import getCharacters from '../actions'
import { searchByName, searchByComic, searchBySerie, searchByStory } from '../actions';


export default function Home() {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.allCharacters)

    const [page, setPage] = useState(0)

    useEffect(() => {
        if (searchName) {
            dispatch(searchByName(name, page))
        } else if (searchComic) {
            dispatch(searchByComic(comic, page))
        } else if (searchStory) {
            dispatch(searchByStory(story, page))
        } else if (searchSerie) {
            dispatch(searchBySerie(serie, page))
        } else {
            dispatch(getCharacters(page))
        }
    }, [page])

    function handleNextPage(e) {
        e.preventDefault();
        if (page <= characters.total) {
            setPage(page + 20)
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } else {
            alert("Last page")
        }
    }
    function handlePrevPage(e) {
        e.preventDefault();
        if (page !== 0) {
            setPage(page - 20)
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } else if (page === 0) {
            alert("First page")
        }
    }


    // Search By Name
    const [searchName, setSearchName] = useState(false)
    const [name, setName] = useState("")
    function handleInputName(e) {
        e.preventDefault();
        setName(e.target.value);
    }
    function handleSearchName(e) {
        e.preventDefault();
        setSearchName(true);
        setSearchSerie(false);
        setSearchComic(false);
        setSearchStory(false);
        dispatch(searchByName(name, 0));
    }

    // Search By Comics
    const [searchComic, setSearchComic] = useState(false)
    const [comic, setComic] = useState("")
    function handleInputComic(e) {
        e.preventDefault();
        setComic(e.target.value);
    }
    function handleSearchComic(e) {
        e.preventDefault();
        setSearchComic(true);
        setSearchName(false);
        setSearchSerie(false);
        setSearchStory(false);
        dispatch(searchByComic(comic, 0))
    }

    // Search By Story
    const [searchStory, setSearchStory] = useState(false)
    const [story, setStory] = useState("")
    function handleInputStory(e) {
        e.preventDefault();
        setStory(e.target.value);
    }
    function handleSearchStory(e) {
        e.preventDefault();
        setSearchStory(true);
        setSearchName(false);
        setSearchSerie(false);
        setSearchComic(false);
        dispatch(searchByStory(story, 0))
    }

    // Search By Series
    const [searchSerie, setSearchSerie] = useState(false)
    const [serie, setSerie] = useState("")
    function handleInputSerie(e) {
        e.preventDefault();
        setSerie(e.target.value);
    }
    function handleSearchSerie(e) {
        e.preventDefault();
        setSearchSerie(true);
        setSearchName(false);
        setSearchComic(false);
        setSearchStory(false);
        dispatch(searchBySerie(serie, 0))
    }
    

    function handleDown(e){
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
    function handleUp(e){
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div>
            <button onClick={(e) => handleDown(e)}>Down</button>
            <div>
                <span>Name</span>
                <input
                    type="text"
                    onChange={(e) => handleInputName(e)}
                />
                <button
                    onClick={(e) => handleSearchName(e)}
                >Search</button>
            </div>
            {/* <div>
                <input
                    type="text"
                    onChange={(e) => handleInputName(e)}
                />
                <button
                    onClick={(e) => handleSearchName(e)}
                >Search</button>
            </div> */}
            {characters?.results?.map(el => {
                return (
                    <div key={el.id}>
                        <span>{el.name}</span>
                        <img alt="" src={`${el.thumbnail.path}.${el.thumbnail.extension}`} />
                    </div>
                )
            })}
            <div>
                <button
                    onClick={e => { handlePrevPage(e) }}>
                    Previous page
                </button>
                <button
                    onClick={e => { handleNextPage(e) }}>
                    Next page
                </button>
            </div>
            <button onClick={(e) => handleUp(e)}>Up</button>
        </div>
    )
}