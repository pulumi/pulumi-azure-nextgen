// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190809preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A cluster resource
type Cluster struct {
	pulumi.CustomResourceState

	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The properties of a cluster resource
	Properties ClusterPropertiesResponseOutput `pulumi:"properties"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
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
	if args.PrivateCloudName == nil {
		return nil, errors.New("invalid value for required argument 'PrivateCloudName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:avs/latest:Cluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:avs/v20200320:Cluster"),
		},
		{
			Type: pulumi.String("azure-nextgen:avs/v20200717preview:Cluster"),
		},
	})
	opts = append(opts, aliases)
	var resource Cluster
	err := ctx.RegisterResource("azure-nextgen:avs/v20190809preview:Cluster", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:avs/v20190809preview:Cluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Cluster resources.
type clusterState struct {
	// Resource name.
	Name *string `pulumi:"name"`
	// The properties of a cluster resource
	Properties *ClusterPropertiesResponse `pulumi:"properties"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type ClusterState struct {
	// Resource name.
	Name pulumi.StringPtrInput
	// The properties of a cluster resource
	Properties ClusterPropertiesResponsePtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (ClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*clusterState)(nil)).Elem()
}

type clusterArgs struct {
	// Name of the cluster in the private cloud
	ClusterName string `pulumi:"clusterName"`
	// The name of the private cloud.
	PrivateCloudName string `pulumi:"privateCloudName"`
	// The properties of a cluster resource
	Properties *ClusterProperties `pulumi:"properties"`
	// Name of the resource group within the Azure subscription
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a Cluster resource.
type ClusterArgs struct {
	// Name of the cluster in the private cloud
	ClusterName pulumi.StringInput
	// The name of the private cloud.
	PrivateCloudName pulumi.StringInput
	// The properties of a cluster resource
	Properties ClusterPropertiesPtrInput
	// Name of the resource group within the Azure subscription
	ResourceGroupName pulumi.StringInput
}

func (ClusterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*clusterArgs)(nil)).Elem()
}

type ClusterInput interface {
	pulumi.Input

	ToClusterOutput() ClusterOutput
	ToClusterOutputWithContext(ctx context.Context) ClusterOutput
}

func (Cluster) ElementType() reflect.Type {
	return reflect.TypeOf((*Cluster)(nil)).Elem()
}

func (i Cluster) ToClusterOutput() ClusterOutput {
	return i.ToClusterOutputWithContext(context.Background())
}

func (i Cluster) ToClusterOutputWithContext(ctx context.Context) ClusterOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ClusterOutput)
}

type ClusterOutput struct {
	*pulumi.OutputState
}

func (ClusterOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ClusterOutput)(nil)).Elem()
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
