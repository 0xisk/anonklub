import { AnonSetResponse, AnonymitySet } from '@anonklub/query'
import { Prompt } from '../Prompt/index.js'

export interface CliI {
  anonSet: AnonymitySet
  prompt: Prompt
  anonSetResponse: AnonSetResponse | undefined

  logProofRequestResult: (jobId: string) => void
  run: () => Promise<void>
  prove: () => Promise<void>
  verify: () => Promise<void>
}
