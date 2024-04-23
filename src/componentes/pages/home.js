import React from 'react'
import Banner from '../sections/Banner'
import Cupcakes from './cupcakes'

function Home() {
  return (
<div>
<Banner />
<Cupcakes title peticion="cupcakes?sabor=fresa" />
</div>
  )
}

export default Home