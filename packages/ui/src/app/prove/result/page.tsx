'use client'
import Link from 'next/link'
import { config } from '#'
import { Loader } from '@components'
import { useProofResult } from '@hooks'
import {  } from '@/hooks';

export default function Page() {
  const { fullProof } = useProofResult();
   return (
    <div className='justify center flex flex-col space-y-10'>
      <h2 className='self-start'>Proof Results</h2>
      {fullProof !== null ? fullProof : null}
    </div>
  )
}