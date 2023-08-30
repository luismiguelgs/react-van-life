import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() 
{
  const { currentVan } = useOutletContext()
  return (
    <section>
      <h4>Name: {currentVan.name}</h4>
      <h4>Category: {currentVan.type}</h4>
      <p>Description: {currentVan.description}</p>
      <h4>Visibility: public</h4>
    </section>
  )
}
