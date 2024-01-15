import { Hex } from "viem";
import type { prove_membership, verify_membership } from "@anonklub/spartan-ecdsa-wasm";

export interface MerkleProof {
    root: bigint;
    pathIndices: number[];
    siblings: [bigint][];
}

export interface ProveInputs {
    sig: Hex,
    message: string;
    merkleProofs: MerkleProof[];
}

export type ProveMembershipFn = (proveInputs: ProveInputs) => Promise<Uint8Array>;
export type VerifyMembershipFn = (anonklubProof: Uint8Array) => Promise<boolean>;

export interface ISpartanEcdsaWorker {
    prepare: () => void;
    proveMembership: ProveMembershipFn;
    verifyMembership: VerifyMembershipFn;
}

export interface ISpartanEcdsaWasm {
    prove_membership: typeof prove_membership;
    verify_membership: typeof verify_membership;
}
