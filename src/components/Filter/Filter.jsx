import React from 'react'
import { Label } from './styled'

const Filter = ({func}) => {
  return (
    <Label>
        Filter: 
    <select onChange={({target}) => func(target.value)}>
        <option value="all">all</option>
        <option value="micro">micro</option>
        <option value="large">large</option>
        <option value="brewpub">brewpub</option>
        <option value="closed">closed</option>
        <option value="proprietor">proprietor</option>
        <option value="contract">contract</option>
    </select>
    </Label>
  )
}

export default Filter