import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../spinner/Spinner';
import Notfound from '../notfound/Notfound';
import NewsCard from './Newscard';

function Newscard({ category = null }) {
    const [articlesNotFound, setArticlesNotFound] = useState(false);
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [apiLimit, setApiLimit] = useState(false);

    const [initiallArticalLength, setInitialArticalLength] = useState(0)

    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us${category ? `&category=${category}` : ''}&apiKey=${apiKey}`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log('Initial Data Fetch :>> ', data);
                setInitialArticalLength(data.articles.length)
                if (data.status === 'ok' && data.articles.length > 0) {
                    const filteredArticles = data.articles.filter(article =>
                        article.title!='[Removed]' && article.description!='[Removed]' && article.url!='[Removed]' && article.urlToImage!='[Removed]'
                    );

                    setArticles(filteredArticles);
                    setTotalResults(data.totalResults);
                    setArticlesNotFound(filteredArticles.length === 0);
                } else if (data.code === "rateLimited") {
                    setApiLimit(true);
                    setArticlesNotFound(false);
                } else {
                    setArticlesNotFound(true);
                }

            } catch (error) {
                setArticlesNotFound(true);
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Ensure loading is set to false
            }
        };

        fetchData();
    }, []); // Runs once on mount

    const fetchMoreData = async () => {
        // console.log('articles.length :>> ', articles.length );
        // console.log('totalResults', totalResults)
        if (initiallArticalLength >= totalResults) return console.log('Done'); // Stop fetching if we have all articles
        setLoading(true); // Set loading true when fetching more data
        const fetchUrl = `https://newsapi.org/v2/top-headlines?country=us${category ? `&category=${category}` : ''}&apiKey=${apiKey}&page=${page + 1}`;

        try {
            const res = await fetch(fetchUrl);
            const data = await res.json();

            console.log('Fetched Data :>> ', data);
            setInitialArticalLength(prev => prev + data.articles.length)

            if (data.status === 'ok' && data.articles.length > 0) {
                const filteredArticles = data.articles.filter(article =>
                    article.title!='[Removed]' && article.description!='[Removed]' && article.url!='[Removed]' && article.urlToImage!='[Removed]'
                );
                setArticles(prevArticles => [...prevArticles, ...filteredArticles]);
                setTotalResults(data.totalResults);
                setPage(prevPage => prevPage + 1);
            } else {
                console.log('No more articles or an issue with fetching data');
            }
        } catch (error) {
            console.error('Error loading more articles:', error);
        } finally {
            setLoading(false); // Ensure loading is set to false after fetching more data
        }
    };

    return (
        <div className="container mx-auto p-4">

            {/* Spinner / Loading */}
            {loading && <Spinner heightVH='70vh' />}

            {/* Articles */}
            {articles.length > 0 && (
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={initiallArticalLength < totalResults} // This ensures hasMore is correctly managed
                    loader={<Spinner heightVH='10vh' />}
                >
                    <div className="flex flex-wrap mx-4">
                        {articles.map((article) => (
                            <div key={article.url} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col">
                                <NewsCard article={article} />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            )}

            {/* If Api limit exceed */}
            {apiLimit && <Notfound url="https://cdn3d.iconscout.com/3d/premium/thumb/search-not-found-5342748-4468820.png" title='News API Limit Exceeded' desc='Sorry! Please come back after some time.' />}

            {/* Not found */}
            {articlesNotFound && <Notfound url="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" title='News not found' desc='No news articles were found for your search or selection.' />}
        
        </div>
    );
}

export default Newscard;
