import React from 'react'
import Helmet from 'react-helmet'

export default ({ title, description }) => (
  <Helmet
    lang='en'
    title={title}
    meta={[
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:creator',
        content: 'Dustin Heisey'
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      }
    ]}
  />
)
