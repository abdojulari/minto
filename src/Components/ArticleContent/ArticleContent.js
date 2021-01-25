import React from 'react'
import data from '../../Mock/article.json'
import HeaderImage from '../Utilities/HeaderImage'
import { Link } from 'gatsby'

export default function ArticleContent() {
    return (
        <div>
           <HeaderImage />
               {
               data.map((item, index) => {
                   return <div className="m-5 p-2 d-flex flex-row" key={index}>
                            <span>
                                <img className="w-100" src={item.image} alt="article image" />
                            </span>
                            <div className="m-2">{item.content.map(subitem =>
                                <>
                                    <h4>{subitem.title}</h4>
                                    <p>{subitem.excerpt}</p>
                                    <Link className="w-25 mt-2 mb-2 p-2 bg-gray-400 text-decoration-none text-white" to="#">{subitem.link}</Link>
                                </>
                            )}</div>
                   </div>
               })
               }
        </div>
    )
}