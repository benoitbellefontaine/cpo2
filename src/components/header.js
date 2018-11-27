import React from 'react'
import FilterLink from '../containers/filterLink'
import { VisibilityFilters } from '../actions'

const Header = () => (
  <div style={{width:'90vw',display:'flex',alignItems:'baseline',fontSize:'1.2vw',color:'purple',lineHeight:'2em',padding:5,borderBottom:'1px solid lightgray'}}>
    <FilterLink style={{flexGrow:1,marginLeft: '0px'}} filter={VisibilityFilters.SHOW_ALL} color='rgb(128,126,128)'>afficher tous les services</FilterLink>
    <FilterLink style={{flexGrow:1,marginLeft: '4px'}} filter={VisibilityFilters.SHOW_SELECTED} color='rgb(128,126,128)'>afficher la sélection</FilterLink>
    <FilterLink style={{flexGrow:1,marginLeft: '4px'}} filter={VisibilityFilters.SHOW_DEMARRAGE} color='rgb(255,127,14)'>démarrage</FilterLink>
    <FilterLink style={{flexGrow:1,marginLeft: '4px'}} filter={VisibilityFilters.SHOW_COURTTERME} color='rgb(44,160,44)'>court terme</FilterLink>
    <FilterLink style={{flexGrow:1,marginLeft: '4px'}} filter={VisibilityFilters.SHOW_MOYENTERME} color='rgb(214,39,40)'>moyen terme</FilterLink>
    <FilterLink style={{flexGrow:1,marginLeft: '4px'}} filter={VisibilityFilters.SHOW_EXCELLENCE} color='rgb(148,103,189)'>excellence</FilterLink>
    <FilterLink style={{flexGrow:1,marginLeft: '4px'}} filter={VisibilityFilters.SHOW_REDRESSEMENT} color='rgb(140,86,75)'>redressement</FilterLink>
  </div>
)

export default Header