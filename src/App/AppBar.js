import React from 'react'
import styled,{css} from 'styled-components';

const Bar = styled.div`
    display:grid;
    grid-template-columns: 180px auto 100px 100px;
`

export default function AppBar() {
  return (
    <Bar>
        <div>cryptodashboard</div>
        <div></div>
        <div>dashboard</div>
        <div>settings</div>
    </Bar>
  )
}
