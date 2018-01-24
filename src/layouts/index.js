import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import 'normalize.css'
import '../css/base.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Analog Memory — Front-End Development"
            meta={[
              { name: 'description', content: 'Portfolio Website of Analog Memory. Front-End Developer based in San Francisco' },
            ]} />
    <Header/>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
