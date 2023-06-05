import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const upper1 = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    // runs after rendering
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pagesize=${props.pagesize}`;

    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  document.title = `News - ${upper1(props.category)}`;

    // eslint-disable-next-line
  }, []);

  // handleonprev = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${
  //     props.category
  //   }&apiKey=b5cc27fe2472462db4ce8c9fab23919f&page=${
  //     this.state.page - 1
  //   }&pagesize=${props.pagesize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   this.setState({
  //     articles: parseData.articles,
  //     page: this.state.page - 1,
  //     loading: false,
  //   });
  // };

  // handleonnext = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${
  //     props.category
  //   }&apiKey=b5cc27fe2472462db4ce8c9fab23919f&page=${
  //     this.state.page + 1
  //   }&pagesize=${props.pagesize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   this.setState({
  //     articles: parseData.articles,
  //     page: this.state.page + 1,
  //     loading: false,
  //   });
  // };

  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pagesize=${props.pagesize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  // handleonin = async ()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b5cc27fe2472462db4ce8c9fab23919f&page=${this.state.page}&pagesize=${props.pagesize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parseData = await data.json()
  //   this.setState({articles : parseData.articles,
  //                   loading:false
  //                 })
  // }

  // handleonus = async ()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=b5cc27fe2472462db4ce8c9fab23919f&page=${this.state.page}&pagesize=${props.pagesize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parseData = await data.json()
  //   this.setState({articles : parseData.articles,
  //                   loading:false
  //                 })
  // }

  return (
    <>
      {/* <div className='nav-item'><button onClick={this.handleonin} className='btn btn-dark'>INDIA</button></div>
        <div className='nav-item'><button onClick={this.handleonus} className='btn btn-dark'>USA</button></div> */}
      <h2 className="text-center" style={{margin:'80px 0px' , marginBottom:'20px'}}>
        {""}
        Top-Headlines From {upper1(props.category)}
      </h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt.slice(0, 10)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleonprev}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleonnext}
          >
            Next &rarr;{" "}
          </button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 9,
  category: "business",
};

// News.propTypes = {
//     country : PropTypes.string,
//     pagesize: PropTypes.number,
//     category:PropTypes.string,
//   }

export default News;
