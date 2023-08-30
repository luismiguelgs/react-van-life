import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext()
  return (
    <section>
      <img src={currentVan.imageUrl} alt={currentVan.name} width={300}/>
    </section>
  )
}
