import React  from 'react'

const  NewsItem  = (props) =>  {

    let{title,description , imageUrl , newsUrl} = props;
    return (
      <>
          <div  className="card" >
         <img src={imageUrl === null ? "https://media.istockphoto.com/id/1219838743/vector/breaking-news-banner-template.jpg?s=612x612&w=0&k=20&c=wzjJJyLd5JpWcuSIJVAB794_rJPlDTWqS4o96MRuVyU=" : imageUrl}  className="card-img-top" alt="..."/>
         <div  className="card-body">
         <h5  className="card-title">{title}...</h5>
          <p  className="card-text">{description}...</p>
          <p class="card-text"><small class="text-muted">Published on {props.date}</small></p>
         <a href={newsUrl}  rel="noreferrer" target="_blank"  className="btn btn-primary btn-sm">Read more</a>
       </div>
    </div>
      </>
    )
  
}

export default NewsItem
