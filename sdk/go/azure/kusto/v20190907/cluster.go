// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190907

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Class representing a Kusto cluster.
type Cluster struct {
	pulumi.CustomResourceState

	// The cluster data ingestion URI.
	DataIngestionUri pulumi.StringOutput `pulumi:"dataIngestionUri"`
	// A boolean value that indicates if the cluster's disks are encrypted.
	EnableDiskEncryption pulumi.BoolPtrOutput `pulumi:"enableDiskEncryption"`
	// A boolean value that indicates if the streaming ingest is enabled.
	EnableStreamingIngest pulumi.BoolPtrOutput `pulumi:"enableStreamingIngest"`
	// The identity of the cluster, if configured.
	Identity IdentityResponsePtrOutput `pulumi:"identity"`
	// KeyVault properties for the cluster encryption.
	KeyVaultProperties KeyVaultPropertiesResponsePtrOutput `pulumi:"keyVaultProperties"`
	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Optimized auto scale definition.
	OptimizedAutoscale OptimizedAutoscaleResponsePtrOutput `pulumi:"optimizedAutoscale"`
	// The provisioned state of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The SKU of the cluster.
	Sku AzureSkuResponseOutput `pulumi:"sku"`
	// The state of the resource.
	State pulumi.StringOutput `pulumi:"state"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The cluster's external tenants.
	TrustedExternalTenants TrustedExternalTenantResponseArrayOutput `pulumi:"trustedExternalTenants"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type pulumi.StringOutput `pulumi:"type"`
	// The cluster URI.
	Uri pulumi.StringOutput `pulumi:"uri"`
	// Virtual network definition.
	VirtualNetworkConfiguration VirtualNetworkConfigurationResponsePtrOutput `pulumi:"virtualNetworkConfiguration"`
	// The availability zones of the cluster.
	Zones pulumi.StringArrayOutput `pulumi:"zones"`
}

// NewCluster registers a new resource with the given unique name, arguments, and options.
func NewCluster(ctx *pulumi.Context,
	name string, args *ClusterArgs, opts ...pulumi.ResourceOption) (*Cluster, error) {
	if args == nil || args.ClusterName == nil {
		return nil, errors.New("missing required argument 'ClusterName'")
	}
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Sku == nil {
		return nil, errors.New("missing required argument 'Sku'")
	}
	if args == nil {
		args = &ClusterArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:kusto/latest:Cluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:kusto/v20170907privatepreview:Cluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:kusto/v20180907preview:Cluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:kusto/v20190121:Cluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:kusto/v20190515:Cluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:kusto/v20191109:Cluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:kusto/v20200215:Cluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:kusto/v20200614:Cluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:kusto/v20200918:Cluster"),
		},
	})
	opts = append(opts, aliases)
	var resource Cluster
	err := ctx.RegisterResource("azure-nextgen:kusto/v20190907:Cluster", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCluster gets an existing Cluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCluster(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ClusterState, opts ...pulumi.ResourceOption) (*Cluster, error) {
	var resource Cluster
	err := ctx.ReadResource("azure-nextgen:kusto/v20190907:Cluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Cluster resources.
type clusterState struct {
	// The cluster data ingestion URI.
	DataIngestionUri *string `pulumi:"dataIngestionUri"`
	// A boolean value that indicates if the cluster's disks are encrypted.
	EnableDiskEncryption *bool `pulumi:"enableDiskEncryption"`
	// A boolean value that indicates if the streaming ingest is enabled.
	EnableStreamingIngest *bool `pulumi:"enableStreamingIngest"`
	// The identity of the cluster, if configured.
	Identity *IdentityResponse `pulumi:"identity"`
	// KeyVault properties for the cluster encryption.
	KeyVaultProperties *KeyVaultPropertiesResponse `pulumi:"keyVaultProperties"`
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// Optimized auto scale definition.
	OptimizedAutoscale *OptimizedAutoscaleResponse `pulumi:"optimizedAutoscale"`
	// The provisioned state of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The SKU of the cluster.
	Sku *AzureSkuResponse `pulumi:"sku"`
	// The state of the resource.
	State *string `pulumi:"state"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The cluster's external tenants.
	TrustedExternalTenants []TrustedExternalTenantResponse `pulumi:"trustedExternalTenants"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type *string `pulumi:"type"`
	// The cluster URI.
	Uri *string `pulumi:"uri"`
	// Virtual network definition.
	VirtualNetworkConfiguration *VirtualNetworkConfigurationResponse `pulumi:"virtualNetworkConfiguration"`
	// The availability zones of the cluster.
	Zones []string `pulumi:"zones"`
}

type ClusterState struct {
	// The cluster data ingestion URI.
	DataIngestionUri pulumi.StringPtrInput
	// A boolean value that indicates if the cluster's disks are encrypted.
	EnableDiskEncryption pulumi.BoolPtrInput
	// A boolean value that indicates if the streaming ingest is enabled.
	EnableStreamingIngest pulumi.BoolPtrInput
	// The identity of the cluster, if configured.
	Identity IdentityResponsePtrInput
	// KeyVault properties for the cluster encryption.
	KeyVaultProperties KeyVaultPropertiesResponsePtrInput
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// Optimized auto scale definition.
	OptimizedAutoscale OptimizedAutoscaleResponsePtrInput
	// The provisioned state of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The SKU of the cluster.
	Sku AzureSkuResponsePtrInput
	// The state of the resource.
	State pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The cluster's external tenants.
	TrustedExternalTenants TrustedExternalTenantResponseArrayInput
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type pulumi.StringPtrInput
	// The cluster URI.
	Uri pulumi.StringPtrInput
	// Virtual network definition.
	VirtualNetworkConfiguration VirtualNetworkConfigurationResponsePtrInput
	// The availability zones of the cluster.
	Zones pulumi.StringArrayInput
}

func (ClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*clusterState)(nil)).Elem()
}

type clusterArgs struct {
	// The name of the Kusto cluster.
	ClusterName string `pulumi:"clusterName"`
	// A boolean value that indicates if the cluster's disks are encrypted.
	EnableDiskEncryption *bool `pulumi:"enableDiskEncryption"`
	// A boolean value that indicates if the streaming ingest is enabled.
	EnableStreamingIngest *bool `pulumi:"enableStreamingIngest"`
	// The identity of the cluster, if configured.
	Identity *Identity `pulumi:"identity"`
	// KeyVault properties for the cluster encryption.
	KeyVaultProperties *KeyVaultProperties `pulumi:"keyVaultProperties"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// Optimized auto scale definition.
	OptimizedAutoscale *OptimizedAutoscale `pulumi:"optimizedAutoscale"`
	// The name of the resource group containing the Kusto cluster.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The SKU of the cluster.
	Sku AzureSku `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The cluster's external tenants.
	TrustedExternalTenants []TrustedExternalTenant `pulumi:"trustedExternalTenants"`
	// Virtual network definition.
	VirtualNetworkConfiguration *VirtualNetworkConfiguration `pulumi:"virtualNetworkConfiguration"`
	// The availability zones of the cluster.
	Zones []string `pulumi:"zones"`
}

// The set of arguments for constructing a Cluster resource.
type ClusterArgs struct {
	// The name of the Kusto cluster.
	ClusterName pulumi.StringInput
	// A boolean value that indicates if the cluster's disks are encrypted.
	EnableDiskEncryption pulumi.BoolPtrInput
	// A boolean value that indicates if the streaming ingest is enabled.
	EnableStreamingIngest pulumi.BoolPtrInput
	// The identity of the cluster, if configured.
	Identity IdentityPtrInput
	// KeyVault properties for the cluster encryption.
	KeyVaultProperties KeyVaultPropertiesPtrInput
	// The geo-location where the resource lives
	Location pulumi.StringInput
	// Optimized auto scale definition.
	OptimizedAutoscale OptimizedAutoscalePtrInput
	// The name of the resource group containing the Kusto cluster.
	ResourceGroupName pulumi.StringInput
	// The SKU of the cluster.
	Sku AzureSkuInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The cluster's external tenants.
	TrustedExternalTenants TrustedExternalTenantArrayInput
	// Virtual network definition.
	VirtualNetworkConfiguration VirtualNetworkConfigurationPtrInput
	// The availability zones of the cluster.
	Zones pulumi.StringArrayInput
}

func (ClusterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*clusterArgs)(nil)).Elem()
}
