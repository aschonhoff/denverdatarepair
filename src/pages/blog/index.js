/**
 * Created by vaibhav on 31/3/18
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import PostCard from '../../components/PostCard'

export default class BlogPage extends Component {
  render () {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return (
      <div>
        <Helmet>
          <title>Blog | Gatsby Starter Business</title>
        </Helmet>
        <section className='hero is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 className='title'>
                                            Blog
                                            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQdxN9HYVAtZGI_RYDi1VeqP18JcCfZiYiOR5EtuKcKX_0Fn7fA1EbcFTc0KYnCIhOGK6VEMzVCyk-3/pubhtml?gid=1472688501&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <PostCard posts={posts} />
        </section>
      </div>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const blogPageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            cover
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
