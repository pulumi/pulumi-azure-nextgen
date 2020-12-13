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
    return pulumi.runtime.invoke("azure-nextgen:kusto/v20200918:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * The name of the Kusto cluster.
     */
    readonly clusterName: string;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    readonly resourceGroupName: string;
}

/**
 * Class representing a Kusto cluster.
 */
export interface GetClusterResult {
    /**
     * The cluster data ingestion URI.
     */
    readonly dataIngestionUri: string;
    /**
     * A boolean value that indicates if the cluster's disks are encrypted.
     */
    readonly enableDiskEncryption?: boolean;
    /**
     * A boolean value that indicates if double encryption is enabled.
     */
    readonly enableDoubleEncryption?: boolean;
    /**
     * A boolean value that indicates if the purge operations are enabled.
     */
    readonly enablePurge?: boolean;
    /**
     * A boolean value that indicates if the streaming ingest is enabled.
     */
    readonly enableStreamingIngest?: boolean;
    /**
     * The engine type
     */
    readonly engineType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the cluster, if configured.
     */
    readonly identity?: outputs.kusto.v20200918.IdentityResponse;
    /**
     * KeyVault properties for the cluster encryption.
     */
    readonly keyVaultProperties?: outputs.kusto.v20200918.KeyVaultPropertiesResponse;
    /**
     * List of the cluster's language extensions.
     */
    readonly languageExtensions: outputs.kusto.v20200918.LanguageExtensionsListResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Optimized auto scale definition.
     */
    readonly optimizedAutoscale?: outputs.kusto.v20200918.OptimizedAutoscaleResponse;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The SKU of the cluster.
     */
    readonly sku: outputs.kusto.v20200918.AzureSkuResponse;
    /**
     * The state of the resource.
     */
    readonly state: string;
    /**
     * The reason for the cluster's current state.
     */
    readonly stateReason: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The cluster's external tenants.
     */
    readonly trustedExternalTenants?: outputs.kusto.v20200918.TrustedExternalTenantResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The cluster URI.
     */
    readonly uri: string;
    /**
     * Virtual network definition.
     */
    readonly virtualNetworkConfiguration?: outputs.kusto.v20200918.VirtualNetworkConfigurationResponse;
    /**
     * The availability zones of the cluster.
     */
    readonly zones?: string[];
}
