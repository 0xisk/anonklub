'use client'
import { Screen } from '@components'
import { useResetAnonSet } from '@hooks'

export default function ChooseAnonSetNftPage() {
  useResetAnonSet()

  return (
    <Screen
      question='What type of NFT do you want to prove you own?'
      help={[
        'Cryptopunk: are you a member of the group of people who own a cryptopunk?',
        'Other: are you a member of the group of people who own an NFT of a given collection (other than cryptopunks)?',
      ]}
      buttons={[
        { href: '/query/asset/nft/punk', text: 'Cryptopunk' },
        { href: '/query/asset/nft/other', text: 'Other' },
      ]}
    />
  )
}
