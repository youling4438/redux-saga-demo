import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeShici } from '../actions'
import Shici from '../components/Shici'

function mapStateToProps(state) {
  console.log('state :', state);
  return {
  }
}

export default connect(
  mapStateToProps,
  {
    changeShici
  },
)(Shici)
