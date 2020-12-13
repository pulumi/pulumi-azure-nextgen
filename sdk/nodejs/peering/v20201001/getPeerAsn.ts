// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getPeerAsn(args: GetPeerAsnArgs, opts?: pulumi.InvokeOptions): Promise<GetPeerAsnResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:peering/v20201001:getPeerAsn", {
        "peerAsnName": args.peerAsnName,
    }, opts);
}

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
     * The ID of the resource.
     */
    readonly id: string;
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
    readonly peerContactDetail?: outputs.peering.v20201001.ContactDetailResponse[];
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
