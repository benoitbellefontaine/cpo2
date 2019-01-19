import React from 'react'
import ReactDOM from 'react-dom'
import { Transition, config, animated } from 'react-spring'
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
//import '../../routes.css'

const items = [{key:0,text:'1'},{key:1,text:'2'}]

const App = () => (
    <Transition style={{color:'black'}}
        items={items} keys={item => item.key}
        from={{ transform: 'translate3d(0,-40px,0)' }}
        enter={{ transform: 'translate3d(0,0px,0)' }}
        leave={{ transform: 'translate3d(0,-40px,0)' }}>
        {item => props =>
            <div style={props}>{item.text}</div>
        }
    </Transition>
)

const NavLink = props => (
  <li className="navItem">
    <Link {...props} style={{ cursor: 'pointer', color: 'inherit' }} />
  </li>
)

const Red = ({ style }) => (
  <animated.div className="mainRoute" style={{ ...style, background: `#ef5350` }}>
    <div className="mainRouteItem">
      <p>Red</p>
      <NavLink to="/red/ultra">Ultra Red</NavLink>
    </div>
    <Route
      render={({ location }) => (
        <div>
          <Transition
            native
            config={config.slow}
            keys={location.pathname}
            from={{ transform: 'translateY(500px)', opacity: 0 }}
            enter={{ transform: 'translateY(0px)', opacity: 1 }}
            leave={{ transform: 'translateY(500px)', opacity: 0 }}>
            {style => (
              <Switch location={location}>
                <Route exact path="/red/ultra" render={props => UltraRed({ ...props, style })} />
              </Switch>
            )}
          </Transition>
        </div>
      )}
    />
  </animated.div>
)

const UltraRed = ({ style }) => (
  <animated.div className="subRoute" style={{ ...style, background: '#d32f2f' }}>
    Ultra Red
  </animated.div>
)

const Green = ({ style }) => (
  <animated.div className="mainRoute" style={{ ...style, background: `#4CAF50` }}>
    <div className="mainRouteItem">
      <p>Green</p>
      <NavLink to="/green/ultra">Ultra Green</NavLink>
    </div>
    <Route
      render={({ location }) => (
        <div>
          <Transition
            native
            config={config.slow}
            keys={location.pathname}
            from={{ transform: 'translateY(500px)', opacity: 0 }}
            enter={{ transform: 'translateY(0px)', opacity: 1 }}
            leave={{ transform: 'translateY(500px)', opacity: 0 }}>
            {style => (
              <Switch location={location}>
                <Route exact path="/green/ultra" render={props => UltraGreen({ ...props, style })} />
              </Switch>
            )}
          </Transition>
        </div>
      )}
    />
  </animated.div>
)

const UltraGreen = ({ match: { params }, style }) => (
  <animated.div className="subRoute" style={{ ...style, background: `#388E3C` }}>
    Ultra Green
  </animated.div>
)

export default App;