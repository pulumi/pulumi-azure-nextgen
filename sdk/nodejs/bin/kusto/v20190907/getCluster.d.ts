import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult>;
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
     * A boolean value that indicates if the streaming ingest is enabled.
     */
    readonly enableStreamingIngest?: boolean;
    /**
     * The identity of the cluster, if configured.
     */
    readonly identity?: outputs.kusto.v20190907.IdentityResponse;
    /**
     * KeyVault properties for the cluster encryption.
     */
    readonly keyVaultProperties?: outputs.kusto.v20190907.KeyVaultPropertiesResponse;
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
    readonly optimizedAutoscale?: outputs.kusto.v20190907.OptimizedAutoscaleResponse;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The SKU of the cluster.
     */
    readonly sku: outputs.kusto.v20190907.AzureSkuResponse;
    /**
     * The state of the resource.
     */
    readonly state: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The cluster's external tenants.
     */
    readonly trustedExternalTenants?: outputs.kusto.v20190907.TrustedExternalTenantResponse[];
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * The cluster URI.
     */
    readonly uri: string;
    /**
     * Virtual network definition.
     */
    readonly virtualNetworkConfiguration?: outputs.kusto.v20190907.VirtualNetworkConfigurationResponse;
    /**
     * The availability zones of the cluster.
     */
    readonly zones?: string[];
}
