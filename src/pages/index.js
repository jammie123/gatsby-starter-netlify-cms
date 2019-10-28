import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  showItems = (posts) => {
    console.log(posts);
    return posts.map(({ node: post }) => (
      <div
        className="content" 
        key={post.id}
      >
        <p>
          <Link className="has-text-primary" to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
          <span> &bull; </span>
          <small>{post.frontmatter.date}</small>
        </p>
        <p>
          {post.excerpt}
          <br />
          <br />
          <Link className="button is-small" to={post.fields.slug}>
            Keep Reading →
          </Link>
        </p>
      </div>
    ));
  }
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    

    return (
      <Layout>
        <div className="Content py-8 flex justify-center align-middle flex-col">
          <h1 className="text-4xl font-semibold w-8/12">
            A flexible product designer with attention to data, speed and
            quality who loves technology and code.{" "}
          </h1>
          <p className="text-base text-gray-800">
            I research, analysis, ideate, design, validate and colaborate.
            Currently work at Seznam.cz
          </p>
          <p />
        </div>
        <div>{this.showItems(posts)}</div>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
