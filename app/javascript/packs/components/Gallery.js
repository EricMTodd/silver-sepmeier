import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Gallery = () => {
  let urls = []
  const [photos, setPhotos] = useState([])
  const apiKey = '39ebf8206b5f188179bf4176fadf9407'
  const userId = '194952157%40N07'
  const url =`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=${userId}&per_page=300&page=&format=json&nojsoncallback=1`
  
  useEffect(() => {
    axios.get(url)
    .then(response => {
      setPhotos(response.data.photos.photo)
    })
    .catch(error => console.log(error))
  }, [])

  if (photos !== []) {
    photos.forEach(photo => {
      urls.push(`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`)
    })
  } 
  return(
    <div id='gallery'>
      <h1>Gallery</h1>
      <div id='gallery-images'>
        {urls.map((url, index) => <img key={index} src={url} alt={`img-${index}`} />)}
      </div>
    </div>
  )
}

export default Gallery