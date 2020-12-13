// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getVirtualNetwork(args: GetVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:devtestlab/v20160515:getVirtualNetwork", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVirtualNetworkArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=externalSubnets)'
     */
    readonly expand?: string;
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the virtual network.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * A virtual network.
 */
export interface GetVirtualNetworkResult {
    /**
     * The allowed subnets of the virtual network.
     */
    readonly allowedSubnets?: outputs.devtestlab.v20160515.SubnetResponse[];
    /**
     * The creation date of the virtual network.
     */
    readonly createdDate: string;
    /**
     * The description of the virtual network.
     */
    readonly description?: string;
    /**
     * The Microsoft.Network resource identifier of the virtual network.
     */
    readonly externalProviderResourceId?: string;
    /**
     * The external subnet properties.
     */
    readonly externalSubnets?: outputs.devtestlab.v20160515.ExternalSubnetResponse[];
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The subnet overrides of the virtual network.
     */
    readonly subnetOverrides?: outputs.devtestlab.v20160515.SubnetOverrideResponse[];
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: string;
}
