// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190401

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Dedicated cloud node model
type DedicatedCloudNode struct {
	pulumi.CustomResourceState

	// Availability Zone id, e.g. "az1"
	AvailabilityZoneId pulumi.StringOutput `pulumi:"availabilityZoneId"`
	// Availability Zone name, e.g. "Availability Zone 1"
	AvailabilityZoneName pulumi.StringOutput `pulumi:"availabilityZoneName"`
	// VMWare Cloud Rack Name
	CloudRackName pulumi.StringOutput `pulumi:"cloudRackName"`
	// date time the resource was created
	Created pulumi.AnyOutput `pulumi:"created"`
	// Azure region
	Location pulumi.StringOutput `pulumi:"location"`
	// SKU's name
	Name pulumi.StringOutput `pulumi:"name"`
	// count of nodes to create
	NodesCount pulumi.IntOutput `pulumi:"nodesCount"`
	// Placement Group id, e.g. "n1"
	PlacementGroupId pulumi.StringOutput `pulumi:"placementGroupId"`
	// Placement Name, e.g. "Placement Group 1"
	PlacementGroupName pulumi.StringOutput `pulumi:"placementGroupName"`
	// Private Cloud Id
	PrivateCloudId pulumi.StringOutput `pulumi:"privateCloudId"`
	// Resource Pool Name
	PrivateCloudName pulumi.StringOutput `pulumi:"privateCloudName"`
	// The provisioning status of the resource
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// purchase id
	PurchaseId pulumi.StringOutput `pulumi:"purchaseId"`
	// Dedicated Cloud Nodes SKU
	Sku SkuResponsePtrOutput `pulumi:"sku"`
	// Node status, indicates is private cloud set up on this node or not
	Status pulumi.StringOutput `pulumi:"status"`
	// Dedicated Cloud Nodes tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// {resourceProviderNamespace}/{resourceType}
	Type pulumi.StringOutput `pulumi:"type"`
	// VMWare Cluster Name
	VmwareClusterName pulumi.StringOutput `pulumi:"vmwareClusterName"`
}

// NewDedicatedCloudNode registers a new resource with the given unique name, arguments, and options.
func NewDedicatedCloudNode(ctx *pulumi.Context,
	name string, args *DedicatedCloudNodeArgs, opts ...pulumi.ResourceOption) (*DedicatedCloudNode, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AvailabilityZoneId == nil {
		return nil, errors.New("invalid value for required argument 'AvailabilityZoneId'")
	}
	if args.DedicatedCloudNodeName == nil {
		return nil, errors.New("invalid value for required argument 'DedicatedCloudNodeName'")
	}
	if args.Id == nil {
		return nil, errors.New("invalid value for required argument 'Id'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.NodesCount == nil {
		return nil, errors.New("invalid value for required argument 'NodesCount'")
	}
	if args.PlacementGroupId == nil {
		return nil, errors.New("invalid value for required argument 'PlacementGroupId'")
	}
	if args.PurchaseId == nil {
		return nil, errors.New("invalid value for required argument 'PurchaseId'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:vmwarecloudsimple/latest:DedicatedCloudNode"),
		},
	})
	opts = append(opts, aliases)
	var resource DedicatedCloudNode
	err := ctx.RegisterResource("azure-nextgen:vmwarecloudsimple/v20190401:DedicatedCloudNode", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDedicatedCloudNode gets an existing DedicatedCloudNode resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDedicatedCloudNode(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DedicatedCloudNodeState, opts ...pulumi.ResourceOption) (*DedicatedCloudNode, error) {
	var resource DedicatedCloudNode
	err := ctx.ReadResource("azure-nextgen:vmwarecloudsimple/v20190401:DedicatedCloudNode", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DedicatedCloudNode resources.
type dedicatedCloudNodeState struct {
	// Availability Zone id, e.g. "az1"
	AvailabilityZoneId *string `pulumi:"availabilityZoneId"`
	// Availability Zone name, e.g. "Availability Zone 1"
	AvailabilityZoneName *string `pulumi:"availabilityZoneName"`
	// VMWare Cloud Rack Name
	CloudRackName *string `pulumi:"cloudRackName"`
	// date time the resource was created
	Created interface{} `pulumi:"created"`
	// Azure region
	Location *string `pulumi:"location"`
	// SKU's name
	Name *string `pulumi:"name"`
	// count of nodes to create
	NodesCount *int `pulumi:"nodesCount"`
	// Placement Group id, e.g. "n1"
	PlacementGroupId *string `pulumi:"placementGroupId"`
	// Placement Name, e.g. "Placement Group 1"
	PlacementGroupName *string `pulumi:"placementGroupName"`
	// Private Cloud Id
	PrivateCloudId *string `pulumi:"privateCloudId"`
	// Resource Pool Name
	PrivateCloudName *string `pulumi:"privateCloudName"`
	// The provisioning status of the resource
	ProvisioningState *string `pulumi:"provisioningState"`
	// purchase id
	PurchaseId *string `pulumi:"purchaseId"`
	// Dedicated Cloud Nodes SKU
	Sku *SkuResponse `pulumi:"sku"`
	// Node status, indicates is private cloud set up on this node or not
	Status *string `pulumi:"status"`
	// Dedicated Cloud Nodes tags
	Tags map[string]string `pulumi:"tags"`
	// {resourceProviderNamespace}/{resourceType}
	Type *string `pulumi:"type"`
	// VMWare Cluster Name
	VmwareClusterName *string `pulumi:"vmwareClusterName"`
}

type DedicatedCloudNodeState struct {
	// Availability Zone id, e.g. "az1"
	AvailabilityZoneId pulumi.StringPtrInput
	// Availability Zone name, e.g. "Availability Zone 1"
	AvailabilityZoneName pulumi.StringPtrInput
	// VMWare Cloud Rack Name
	CloudRackName pulumi.StringPtrInput
	// date time the resource was created
	Created pulumi.Input
	// Azure region
	Location pulumi.StringPtrInput
	// SKU's name
	Name pulumi.StringPtrInput
	// count of nodes to create
	NodesCount pulumi.IntPtrInput
	// Placement Group id, e.g. "n1"
	PlacementGroupId pulumi.StringPtrInput
	// Placement Name, e.g. "Placement Group 1"
	PlacementGroupName pulumi.StringPtrInput
	// Private Cloud Id
	PrivateCloudId pulumi.StringPtrInput
	// Resource Pool Name
	PrivateCloudName pulumi.StringPtrInput
	// The provisioning status of the resource
	ProvisioningState pulumi.StringPtrInput
	// purchase id
	PurchaseId pulumi.StringPtrInput
	// Dedicated Cloud Nodes SKU
	Sku SkuResponsePtrInput
	// Node status, indicates is private cloud set up on this node or not
	Status pulumi.StringPtrInput
	// Dedicated Cloud Nodes tags
	Tags pulumi.StringMapInput
	// {resourceProviderNamespace}/{resourceType}
	Type pulumi.StringPtrInput
	// VMWare Cluster Name
	VmwareClusterName pulumi.StringPtrInput
}

func (DedicatedCloudNodeState) ElementType() reflect.Type {
	return reflect.TypeOf((*dedicatedCloudNodeState)(nil)).Elem()
}

type dedicatedCloudNodeArgs struct {
	// Availability Zone id, e.g. "az1"
	AvailabilityZoneId string `pulumi:"availabilityZoneId"`
	// dedicated cloud node name
	DedicatedCloudNodeName string `pulumi:"dedicatedCloudNodeName"`
	// SKU's id
	Id string `pulumi:"id"`
	// Azure region
	Location string `pulumi:"location"`
	// SKU's name
	Name string `pulumi:"name"`
	// count of nodes to create
	NodesCount int `pulumi:"nodesCount"`
	// Placement Group id, e.g. "n1"
	PlacementGroupId string `pulumi:"placementGroupId"`
	// purchase id
	PurchaseId string `pulumi:"purchaseId"`
	// The name of the resource group
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Dedicated Cloud Nodes SKU
	Sku *Sku `pulumi:"sku"`
	// Dedicated Cloud Nodes tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a DedicatedCloudNode resource.
type DedicatedCloudNodeArgs struct {
	// Availability Zone id, e.g. "az1"
	AvailabilityZoneId pulumi.StringInput
	// dedicated cloud node name
	DedicatedCloudNodeName pulumi.StringInput
	// SKU's id
	Id pulumi.StringInput
	// Azure region
	Location pulumi.StringInput
	// SKU's name
	Name pulumi.StringInput
	// count of nodes to create
	NodesCount pulumi.IntInput
	// Placement Group id, e.g. "n1"
	PlacementGroupId pulumi.StringInput
	// purchase id
	PurchaseId pulumi.StringInput
	// The name of the resource group
	ResourceGroupName pulumi.StringInput
	// Dedicated Cloud Nodes SKU
	Sku SkuPtrInput
	// Dedicated Cloud Nodes tags
	Tags pulumi.StringMapInput
}

func (DedicatedCloudNodeArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dedicatedCloudNodeArgs)(nil)).Elem()
}

type DedicatedCloudNodeInput interface {
	pulumi.Input

	ToDedicatedCloudNodeOutput() DedicatedCloudNodeOutput
	ToDedicatedCloudNodeOutputWithContext(ctx context.Context) DedicatedCloudNodeOutput
}

func (DedicatedCloudNode) ElementType() reflect.Type {
	return reflect.TypeOf((*DedicatedCloudNode)(nil)).Elem()
}

func (i DedicatedCloudNode) ToDedicatedCloudNodeOutput() DedicatedCloudNodeOutput {
	return i.ToDedicatedCloudNodeOutputWithContext(context.Background())
}

func (i DedicatedCloudNode) ToDedicatedCloudNodeOutputWithContext(ctx context.Context) DedicatedCloudNodeOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DedicatedCloudNodeOutput)
}

type DedicatedCloudNodeOutput struct {
	*pulumi.OutputState
}

func (DedicatedCloudNodeOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DedicatedCloudNodeOutput)(nil)).Elem()
}

func (o DedicatedCloudNodeOutput) ToDedicatedCloudNodeOutput() DedicatedCloudNodeOutput {
	return o
}

func (o DedicatedCloudNodeOutput) ToDedicatedCloudNodeOutputWithContext(ctx context.Context) DedicatedCloudNodeOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DedicatedCloudNodeOutput{})
}
