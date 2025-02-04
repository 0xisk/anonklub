'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { NAVIGATION } from '#'
import { JSONValue, ScrollableJsonContainer } from '@components'
import { useStore } from '@hooks'

export function AnonSetResults({
  anonSet,
  title,
}: {
  anonSet: JSONValue
  title: string
}) {
  const { setAnonSet } = useStore()
  useEffect(() => {
    setAnonSet(anonSet as string[])
  }, [setAnonSet, anonSet])

  return (
    <>
      <div className='mb-5 flex flex-row justify-between'>
        <div>
          <h2>{title} Anonset</h2>
          <h3 className='nes-text is-success'>Results</h3>
        </div>
        <Link href='/prove/submit'>
          <button className='nes-btn is-success'>
            {NAVIGATION.PREPARE_PROOF_REQUEST}
          </button>
        </Link>
      </div>
      <ScrollableJsonContainer data={anonSet} />
    </>
  )
}
