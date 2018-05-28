import React from 'react'
import Link from 'gatsby-link'

import { oneOf, complete } from 'autotune'

const IndexPage = () => (
  <div className="container">
    <div className="card card-container">
      <img
        id="profile-img"
        className="profile-img-card"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
      />
      <p id="profile-name" className="profile-name-card" />
      <form className="form-signin">
        <span id="reauth-email" className="reauth-email" />
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div id="remember" className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block btn-signin"
          type="submit"
          onClick={() => {
            alert('Thank you for trying the demo!')
            complete()
          }}
          style={{
            backgroundColor: oneOf('Login Primary Action – Background Color', [
              '#8e44ad',
              '#2980b9',
              '#2c3e50',
              '#2ecc71',
            ]),
          }}
        >
          {oneOf('Login Primary Action', [
            'Sign In',
            'Log In',
            'Create Account',
          ])}
        </button>
      </form>
      <a href="#" className="forgot-password">
        Forgot the password?
      </a>
    </div>
  </div>
)

export default IndexPage
