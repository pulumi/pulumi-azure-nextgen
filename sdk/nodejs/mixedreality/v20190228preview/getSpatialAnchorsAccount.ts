// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../../types";
import * as utilities from "../../utilities";

export function getSpatialAnchorsAccount(args: GetSpatialAnchorsAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetSpatialAnchorsAccountResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:mixedreality/v20190228preview:getSpatialAnchorsAccount", {
        "resourceGroupName": args.resourceGroupName,
        "spatialAnchorsAccountName": args.spatialAnchorsAccountName,
    }, opts);
}

export interface GetSpatialAnchorsAccountArgs {
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: string;
    /**
     * Name of an Mixed Reality Spatial Anchors Account.
     */
    readonly spatialAnchorsAccountName: string;
}

/**
 * SpatialAnchorsAccount Response.
 */
export interface GetSpatialAnchorsAccountResult {
    /**
     * Correspond domain name of certain Spatial Anchors Account
     */
    readonly accountDomain: string;
    /**
     * unique id of certain Spatial Anchors Account data contract.
     */
    readonly accountId: string;
    /**
     * The identity associated with this account
     */
    readonly identity?: outputs.mixedreality.v20190228preview.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
