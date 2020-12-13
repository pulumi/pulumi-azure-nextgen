// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:avs/v20200320:getCluster", {
        "clusterName": args.clusterName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * Name of the cluster in the private cloud
     */
    readonly clusterName: string;
    /**
     * Name of the private cloud
     */
    readonly privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}

/**
 * A cluster resource
 */
export interface GetClusterResult {
    /**
     * The identity
     */
    readonly clusterId: number;
    /**
     * The cluster size
     */
    readonly clusterSize: number;
    /**
     * The hosts
     */
    readonly hosts: string[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The state of the cluster provisioning
     */
    readonly provisioningState: string;
    /**
     * The cluster SKU
     */
    readonly sku: outputs.avs.v20200320.SkuResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
