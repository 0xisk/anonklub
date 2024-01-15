import { useEffect } from "react";
import { SpartanEcdsaWorker, ProveMembershipFn, VerifyMembershipFn } from "@anonklub/spartan-ecdsa-worker";

export const useMerkleTreeWasmWorker = () => {
    useEffect(() => {
        (async () => {
            await SpartanEcdsaWorker.prepare();
        })();
    }, []);

    const proveMembership: ProveMembershipFn = async ({
        s,
        r,
        isYOdd,
        msgHash,
        siblings,
        indices,
        roots
    }): Promise<Uint8Array> => {
        console.time('==> Prove');
        const proof = await SpartanEcdsaWorker.proveMembership({
            s,
            r,
            isYOdd,
            msgHash,
            siblings,
            indices,
            roots
        });
        console.timeEnd('==> Prove');

        return proof;
    };

    const verifyMembership: VerifyMembershipFn = async (anonklubProof: Uint8Array): Promise<boolean> => {
        console.time('==> Verify');
        const isVerified = await SpartanEcdsaWorker.verifyMembership(anonklubProof);
        console.timeEnd('==> Verify');

        return isVerified
    }

    return {
        proveMembership,
        verifyMembership
    }
}
