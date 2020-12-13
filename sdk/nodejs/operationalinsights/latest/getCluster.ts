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
    return pulumi.runtime.invoke("azure-nextgen:operationalinsights/latest:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * Name of the Log Analytics Cluster.
     */
    readonly clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}

/**
 * The top level Log Analytics cluster resource container.
 */
export interface GetClusterResult {
    /**
     * The list of Log Analytics workspaces associated with the cluster
     */
    readonly associatedWorkspaces?: outputs.operationalinsights.latest.AssociatedWorkspaceResponse[];
    /**
     * Configures whether billing will be only on the cluster or each workspace will be billed by its proportional use. This does not change the overall billing, only how it will be distributed. Default value is 'Cluster'
     */
    readonly billingType?: string;
    /**
     * Additional properties for capacity reservation
     */
    readonly capacityReservationProperties?: outputs.operationalinsights.latest.CapacityReservationPropertiesResponse;
    /**
     * The ID associated with the cluster.
     */
    readonly clusterId: string;
    /**
     * The cluster creation time
     */
    readonly createdDate: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: outputs.operationalinsights.latest.IdentityResponse;
    /**
     * Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones.
     */
    readonly isAvailabilityZonesEnabled?: boolean;
    /**
     * Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true'
     */
    readonly isDoubleEncryptionEnabled?: boolean;
    /**
     * The associated key properties.
     */
    readonly keyVaultProperties?: outputs.operationalinsights.latest.KeyVaultPropertiesResponse;
    /**
     * The last time the cluster was updated.
     */
    readonly lastModifiedDate: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the cluster.
     */
    readonly provisioningState: string;
    /**
     * The sku properties.
     */
    readonly sku?: outputs.operationalinsights.latest.ClusterSkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
