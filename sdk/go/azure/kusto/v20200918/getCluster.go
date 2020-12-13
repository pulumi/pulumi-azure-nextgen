// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200918

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupCluster(ctx *pulumi.Context, args *LookupClusterArgs, opts ...pulumi.InvokeOption) (*LookupClusterResult, error) {
	var rv LookupClusterResult
	err := ctx.Invoke("azure-nextgen:kusto/v20200918:getCluster", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupClusterArgs struct {
	// The name of the Kusto cluster.
	ClusterName string `pulumi:"clusterName"`
	// The name of the resource group containing the Kusto cluster.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Class representing a Kusto cluster.
type LookupClusterResult struct {
	// The cluster data ingestion URI.
	DataIngestionUri string `pulumi:"dataIngestionUri"`
	// A boolean value that indicates if the cluster's disks are encrypted.
	EnableDiskEncryption *bool `pulumi:"enableDiskEncryption"`
	// A boolean value that indicates if double encryption is enabled.
	EnableDoubleEncryption *bool `pulumi:"enableDoubleEncryption"`
	// A boolean value that indicates if the purge operations are enabled.
	EnablePurge *bool `pulumi:"enablePurge"`
	// A boolean value that indicates if the streaming ingest is enabled.
	EnableStreamingIngest *bool `pulumi:"enableStreamingIngest"`
	// The engine type
	EngineType *string `pulumi:"engineType"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The identity of the cluster, if configured.
	Identity *IdentityResponse `pulumi:"identity"`
	// KeyVault properties for the cluster encryption.
	KeyVaultProperties *KeyVaultPropertiesResponse `pulumi:"keyVaultProperties"`
	// List of the cluster's language extensions.
	LanguageExtensions LanguageExtensionsListResponse `pulumi:"languageExtensions"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// Optimized auto scale definition.
	OptimizedAutoscale *OptimizedAutoscaleResponse `pulumi:"optimizedAutoscale"`
	// The provisioned state of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The SKU of the cluster.
	Sku AzureSkuResponse `pulumi:"sku"`
	// The state of the resource.
	State string `pulumi:"state"`
	// The reason for the cluster's current state.
	StateReason string `pulumi:"stateReason"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The cluster's external tenants.
	TrustedExternalTenants []TrustedExternalTenantResponse `pulumi:"trustedExternalTenants"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
	// The cluster URI.
	Uri string `pulumi:"uri"`
	// Virtual network definition.
	VirtualNetworkConfiguration *VirtualNetworkConfigurationResponse `pulumi:"virtualNetworkConfiguration"`
	// The availability zones of the cluster.
	Zones []string `pulumi:"zones"`
}
