import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ResumeEntry from '../components/resume-entry'

import stylesHero from '../components/hero.module.css'

const ExperienceIndex = ({ data }) => {
  const title = data.site.siteMetadata
  const jobs = data.allContentfulResumePost.edges
  const inititatives = data.allContentfulInitiativePost.edges
  const [author] = data.allContentfulPerson.edges

  return (
    <Layout>
      <Helmet title={`Experience – ` + title} />
      <div className="wrapper">
        <Hero data={author.node} />
      </div>
      <div className="wrapper">
        <h2 className="section-headline">Experience</h2>
        <ul className="article-list">
          {jobs.map(({ node }) => {
            return (
              <li key={node.jobTitle}>
                <ResumeEntry article={node} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="wrapper">
        <h2 className="section-headline">Initiatives</h2>
        <ul className="article-list">
          {inititatives.map(({ node }) => {
            return (
              <li key={node.jobTitle}>
                <ResumeEntry article={node} />
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default ExperienceIndex

export const pageQuery = graphql`
  query ExperienceIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulResumePost(sort: { fields: [timeStart], order: DESC }) {
      edges {
        node {
          jobTitle
          jobRole
          timeStart
          timeEnd
          weblink
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulInitiativePost(sort: { fields: [timeStart], order: DESC }) {
      edges {
        node {
          jobTitle
          jobRole
          timeStart
          timeEnd
          weblink
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          email
          phone
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(maxWidth: 600, maxHeight: 600, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
