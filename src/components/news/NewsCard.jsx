import React from 'react'

function NewsCard({article}) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col h-full">
            <img src={article.urlToImage ? article.urlToImage : 'https://th.bing.com/th/id/OIP.0dzPl0BUoR9sKlirIPvhBAHaEb?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt={article.title + "Article Image"} className="w-full h-48 object-cover" />

            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    <a href="#" className="text-xs font-bold text-blue-600 hover:underline">By {article.author ? article.author : "Unknown"} on {new Date(article.publishedAt).toLocaleDateString()}</a>
                    <h2 className="text-lg font-bold mt-2 mb-4">{article.title}</h2>
                    <p className="text-sm text-gray-700">{article.description ? article.description : 'Click on read more to visit news page'}</p>
                </div>
                <div className="mt-4">
                    <a href={article.url} target="_blank"
                        className="text-blue-600 font-bold hover:underline">Read More &rarr;</a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard