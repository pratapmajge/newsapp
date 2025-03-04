import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import propTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
  }
  constructor() {
    super();
    console.log('I am constructor');
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    }
  }

  async componentDidMount() {
    try {
      console.log("cdm")
      let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5268d7236714c36ae2af1c8f232f569&pageSize=${this.props.pageSize}`
      this.setState({ loading: true })
      let data = await fetch(api)
      let parsedData = await data.json()
      // console.log(parsedData)
      // this.loading({loading:false})
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      })
    } catch (error) {
      console.log(error)
      this.setState({ articles: [] })
    }
  }

  handlenextclick = async () => {
    console.log("next")
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=c5268d7236714c36ae2af1c8f232f569&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.setState({ loading: true })
      let data = await fetch(api)
      let parsedData = await data.json()
      // console.log(parsedData)
      // this.setState({loading:false})
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }

  handlepreviousclick = async () => {
    console.log("previous")
    let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=c5268d7236714c36ae2af1c8f232f569&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(api)
    let parsedData = await data.json()
    // console.log(parsedData)

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }


  render() {
    return (
      <div className="container my-4">
        <h1 className="m-4 text-center">NewsApp - Top Headlines</h1>
        {/* </> */}
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element, index) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?.substring(0, 45) || "No Title Available"}
                  description={element.description?.substring(0, 88) || "No Description Available"}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className='justify-content-between d-flex'>
          <button disabled={this.state.page <= 1} onClick={this.handlepreviousclick} type='button' className='btn btn-dark'>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' onClick={this.handlenextclick} className='btn-dark btn'>Next &rarr;</button>
        </div>
      </div>
    );
  }

}

export default News;
