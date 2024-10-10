import React from 'react'

function Notfound({url, title, desc}) {
    return (
        <div className="w-full text-center mt-4 py-8">
            <img src={url} alt={title} className="mx-auto h-56 w-auto sm:h-80" />

            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-700">{desc}</p>
        </div>
    )
}

export default Notfound