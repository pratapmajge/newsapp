import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import propTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  console.log("News API Key:", props.apikey); // Debugging

  const updateNews = async () => {
    try {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.status === "error") {
        console.error("API Error:", parsedData.message);
      } else {
        setArticles(parsedData.articles || []);
        setTotalResults(parsedData.totalResults || 0);
      }

      setLoading(false);
    } catch (error) {
      console.error("Fetch Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateNews();
  }, [page]);

  return (
    <div className="container my-4">
      <h1 className="m-4 text-center">NewsApp - Top Headlines</h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title?.substring(0, 45) || "No Title Available"}
                description={element.description?.substring(0, 88) || "No Description Available"}
                imgurl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: 'general',
};

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
  apikey: propTypes.string.isRequired,
};

export default News;
