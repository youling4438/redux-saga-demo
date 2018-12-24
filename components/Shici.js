/* eslint-disable react/no-deprecated, react/no-string-refs, react/no-unescaped-entities, react/jsx-no-target-blank */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Intro = styled.p`font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: 40px;`
const ChangeShici = styled.div`
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;

  .changeButton{
    cursor:pointer;
    color: #000;
    border-bottom: 1px dashed currentColor;
  }

  .changeButton:hover{
    border-bottom-style: solid;
  }`

export default class Explore extends Component {
  constructor(props) {
    super(props)
    this.changeBtnHandle = this.changeBtnHandle.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
    }
  }

  changeBtnHandle() {
    const { changeShici } = this.props;
    changeShici();
  }

  render() {
    const { oneShici } = this.props;
    return (
      <div>
        <Intro>
          {oneShici}
        </Intro>
        <ChangeShici onClick={this.changeBtnHandle}>
          <a className="changeButton">切换诗词</a>
        </ChangeShici>
      </div>
    )
  }
}

Explore.propTypes = {
  oneShici: PropTypes.string.isRequired,
  changeShici: PropTypes.func.isRequired,
}
