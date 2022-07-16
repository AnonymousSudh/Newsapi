import React, { useEffect } from 'react'
import { useState } from 'react'
// import NewsCard from './card/NewsCard';
import('./newsapi.css')


function Newsapi() {

    const [news, setnews] = useState([]);

    const fetchNews = async () => {

        const url2 = `https://gnews.io/api/v4/top-headlines?q=farmer&lang=en&token=41e3c847093004b495a310bc932a56eb`

        // console.log("0");
        const data = await fetch(url2);
        // console.log("1");
        const json_data = await data.json();

        // var array = []
        // const filterdata = json_data.articles.filter((elem, index) => {
        //     // console.log(elem.title);
        //     const string = elem.title
        //     const result = string.includes("India's")
        //     const result2 = string.includes("India")
        //     // console.log(result);
        //     if (result == true || result2 == true) {
        //         array.push(elem)
        //     }
        // })
        // console.log("3");
        console.log(json_data.articles);
        setnews(json_data.articles)

    }

    useEffect(() => {
        fetchNews();

    }, [])

    return (
        <>
        {/* <h1>{news}</h1>     */}
        
            {news.map((val) => {
                return (
                    <>
                        <div className="newscard">

                            <div className="newscardholder">

                                <div className="newsimg">
                            
                                </div>
                                <h1>{val.title}</h1>
                                <hr />
                                <div className='news_disc'>
                                    <h2>{val.description}</h2>
                                </div>
                            </div>
                        </div>

                    </>
                )
            })}


        </>
    )
}

export default Newsapi