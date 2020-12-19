// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170907privatepreview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Class representing a Kusto cluster.
type Cluster struct {
	pulumi.CustomResourceState

	// The cluster data ingestion URI.
	DataIngestionUri pulumi.StringOutput `pulumi:"dataIngestionUri"`
	// An ETag of the resource created.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
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
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
	// The cluster URI.
	Uri pulumi.StringOutput `pulumi:"uri"`
}

// NewCluster registers a new resource with the given unique name, arguments, and options.
func NewCluster(ctx *pulumi.Context,
	name string, args *ClusterArgs, opts ...pulumi.ResourceOption) (*Cluster, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ClusterName == nil {
		return nil, errors.New("invalid value for required argument 'ClusterName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Sku == nil {
		return nil, errors.New("invalid value for required argument 'Sku'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:kusto/latest:Cluster"),
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
			Type: pulumi.String("azure-nextgen:kusto/v20190907:Cluster"),
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
	err := ctx.RegisterResource("azure-nextgen:kusto/v20170907privatepreview:Cluster", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:kusto/v20170907privatepreview:Cluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Cluster resources.
type clusterState struct {
	// The cluster data ingestion URI.
	DataIngestionUri *string `pulumi:"dataIngestionUri"`
	// An ETag of the resource created.
	Etag *string `pulumi:"etag"`
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The name of the resource
	Name *string `pulumi:"name"`
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
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
	// The cluster URI.
	Uri *string `pulumi:"uri"`
}

type ClusterState struct {
	// The cluster data ingestion URI.
	DataIngestionUri pulumi.StringPtrInput
	// An ETag of the resource created.
	Etag pulumi.StringPtrInput
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
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
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
	// The cluster URI.
	Uri pulumi.StringPtrInput
}

func (ClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*clusterState)(nil)).Elem()
}

type clusterArgs struct {
	// The name of the Kusto cluster.
	ClusterName string `pulumi:"clusterName"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource group containing the Kusto cluster.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The SKU of the cluster.
	Sku AzureSku `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The cluster's external tenants.
	TrustedExternalTenants []TrustedExternalTenant `pulumi:"trustedExternalTenants"`
}

// The set of arguments for constructing a Cluster resource.
type ClusterArgs struct {
	// The name of the Kusto cluster.
	ClusterName pulumi.StringInput
	// The geo-location where the resource lives
	Location pulumi.StringInput
	// The name of the resource group containing the Kusto cluster.
	ResourceGroupName pulumi.StringInput
	// The SKU of the cluster.
	Sku AzureSkuInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The cluster's external tenants.
	TrustedExternalTenants TrustedExternalTenantArrayInput
}

func (ClusterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*clusterArgs)(nil)).Elem()
}

type ClusterInput interface {
	pulumi.Input

	ToClusterOutput() ClusterOutput
	ToClusterOutputWithContext(ctx context.Context) ClusterOutput
}

func (*Cluster) ElementType() reflect.Type {
	return reflect.TypeOf((*Cluster)(nil))
}

func (i *Cluster) ToClusterOutput() ClusterOutput {
	return i.ToClusterOutputWithContext(context.Background())
}

func (i *Cluster) ToClusterOutputWithContext(ctx context.Context) ClusterOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ClusterOutput)
}

type ClusterOutput struct {
	*pulumi.OutputState
}

func (ClusterOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Cluster)(nil))
}

func (o ClusterOutput) ToClusterOutput() ClusterOutput {
	return o
}

func (o ClusterOutput) ToClusterOutputWithContext(ctx context.Context) ClusterOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ClusterOutput{})
}
