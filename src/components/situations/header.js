import React from 'react'
import FilterLink from '../../containers/services/filterLink'
import { VisibilityFilters } from '../../actions'

const Header = () => (
  <div style={{display:'flex',flexDirection:'column',fontSize:'2vw',lineHeight:'2em',padding:5}}>
    <FilterLink style={{flexGrow:1,margin: '4px'}} filter={VisibilityFilters.SHOW_DEMARRAGE} color='rgb(255,127,14)'>démarrage</FilterLink>
    <FilterLink style={{flexGrow:1,margin: '4px'}} filter={VisibilityFilters.SHOW_COURTTERME} color='rgb(44,160,44)'>court terme</FilterLink>
    <FilterLink style={{flexGrow:1,margin: '4px'}} filter={VisibilityFilters.SHOW_MOYENTERME} color='rgb(214,39,40)'>moyen terme</FilterLink>
    <FilterLink style={{flexGrow:1,margin: '4px'}} filter={VisibilityFilters.SHOW_EXCELLENCE} color='rgb(148,103,189)'>excellence</FilterLink>
    <FilterLink style={{flexGrow:1,margin: '4px'}} filter={VisibilityFilters.SHOW_REDRESSEMENT} color='rgb(140,86,75)'>redressement</FilterLink>
  </div>
)

export default Header