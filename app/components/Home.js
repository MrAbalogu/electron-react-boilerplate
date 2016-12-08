// @flow
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { Link } from 'react-router';
import styles from './Home.css';

fetch('https://google.com')
  .then(res => res.text())
  .then(res => res.slice(0, 10))
  .then(alert)
  .catch(console.log)

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
