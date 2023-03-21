import React, { lazy, Suspense } from 'react'
import ContexSchild from './ContexSchild'

let ContexSchild =lazy(()=>import('./ContexSchild'))

const ContexChild = () => {
  return (
    <Suspense fallback={'wait bro...'}>
      <ContexSchild/>
    </Suspense>
  )
}

export default ContexChild