'use client'
import { useState } from 'react'
import { config, getData } from '#'
import { AnonSetResults, HelpModal, Loader } from '@components'
import { useAsync, useStore } from '@hooks'

export default function Page() {
  const [min, setMin] = useState<number>(0)
  const [tokenAddress, setTokenAddress] = useState<string>('')
  const { anonSet, setAnonSet } = useStore()
  const { error, execute, isLoading } = useAsync(async () => {
    if (tokenAddress !== '' && min > 0) {
      const data = await getData<string[]>(
        `${config.urls.queryApi}/asset/ERC20?min=${min}&tokenAddress=${tokenAddress}`,
      )
      setAnonSet(data)
    }
  })
  const canFetch = tokenAddress !== '' && min > 0

  if (isLoading) return <Loader />
  if (error instanceof Error) return <span>Error: {error.message}</span>
  if (anonSet !== null)
    return <AnonSetResults anonSet={anonSet} title='ERC20 Balance' />

  return (
    <div className='flex flex-col items-center space-y-10'>
      <div className='self-end'>
        <HelpModal
          content={[
            'Provide the ERC20 token address and the minimum amount of tokens one should own to be part of the anonset.',
          ]}
        />
      </div>
      <div className='nes-field w-[550px]'>
        <label>
          ERC20 Token Address
          <input
            placeholder='0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72'
            type='text'
            className='nes-input text-xs'
            value={tokenAddress}
            onChange={({ target }) => {
              setTokenAddress(target.value)
            }}
          />
        </label>
      </div>
      <div className='nes-field w-[550px]'>
        <label>
          Min
          <input
            min={0}
            step={1}
            type='number'
            className='nes-input w-[550px] '
            value={min}
            onChange={({ target }) => {
              setMin(parseInt(target.value))
            }}
          />
        </label>
      </div>

      <button
        type='button'
        className={`nes-btn self-center ${
          canFetch ? 'is-warning' : 'is-disabled'
        }`}
        onClick={execute}
      >
        Fetch Anonset
      </button>
    </div>
  )
}
