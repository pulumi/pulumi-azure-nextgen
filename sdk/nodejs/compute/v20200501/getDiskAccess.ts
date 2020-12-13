// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getDiskAccess(args: GetDiskAccessArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskAccessResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:compute/v20200501:getDiskAccess", {
        "diskAccessName": args.diskAccessName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiskAccessArgs {
    /**
     * The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     */
    readonly diskAccessName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * disk access resource.
 */
export interface GetDiskAccessResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported.
     */
    readonly privateEndpointConnections: outputs.compute.v20200501.PrivateEndpointConnectionResponse[];
    /**
     * The disk access resource provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The time when the disk access was created.
     */
    readonly timeCreated: string;
    /**
     * Resource type
     */
    readonly type: string;
}
