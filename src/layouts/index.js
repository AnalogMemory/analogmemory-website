import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'
import 'normalize.css'
import '../css/base.scss'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet title="Analog Memory — Front-End Development"
            meta={[
              { name: 'description', content: 'Portfolio Website of Analog Memory. Front-End Developer based in San Francisco' },
            ]} />
    <Header/>
    {children()}
  </Wrapper>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
