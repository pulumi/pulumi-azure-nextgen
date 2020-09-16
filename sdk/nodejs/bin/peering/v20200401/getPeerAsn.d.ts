import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPeerAsn(args: GetPeerAsnArgs, opts?: pulumi.InvokeOptions): Promise<GetPeerAsnResult>;
export interface GetPeerAsnArgs {
    /**
     * The peer ASN name.
     */
    readonly peerAsnName: string;
}
/**
 * The essential information related to the peer's ASN.
 */
export interface GetPeerAsnResult {
    /**
     * The error message for the validation state
     */
    readonly errorMessage: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The Autonomous System Number (ASN) of the peer.
     */
    readonly peerAsn?: number;
    /**
     * The contact details of the peer.
     */
    readonly peerContactDetail?: outputs.peering.v20200401.ContactDetailResponse[];
    /**
     * The name of the peer.
     */
    readonly peerName?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The validation state of the ASN associated with the peer.
     */
    readonly validationState?: string;
}
