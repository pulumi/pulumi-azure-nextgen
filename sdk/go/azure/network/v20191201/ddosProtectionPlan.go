// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A DDoS protection plan in a resource group.
type DdosProtectionPlan struct {
	pulumi.CustomResourceState

	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the DDoS protection plan resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
	ResourceGuid pulumi.StringOutput `pulumi:"resourceGuid"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.
	VirtualNetworks SubResourceResponseArrayOutput `pulumi:"virtualNetworks"`
}

// NewDdosProtectionPlan registers a new resource with the given unique name, arguments, and options.
func NewDdosProtectionPlan(ctx *pulumi.Context,
	name string, args *DdosProtectionPlanArgs, opts ...pulumi.ResourceOption) (*DdosProtectionPlan, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DdosProtectionPlanName == nil {
		return nil, errors.New("invalid value for required argument 'DdosProtectionPlanName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:DdosProtectionPlan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:DdosProtectionPlan"),
		},
	})
	opts = append(opts, aliases)
	var resource DdosProtectionPlan
	err := ctx.RegisterResource("azure-nextgen:network/v20191201:DdosProtectionPlan", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDdosProtectionPlan gets an existing DdosProtectionPlan resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDdosProtectionPlan(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DdosProtectionPlanState, opts ...pulumi.ResourceOption) (*DdosProtectionPlan, error) {
	var resource DdosProtectionPlan
	err := ctx.ReadResource("azure-nextgen:network/v20191201:DdosProtectionPlan", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DdosProtectionPlan resources.
type ddosProtectionPlanState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The provisioning state of the DDoS protection plan resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.
	VirtualNetworks []SubResourceResponse `pulumi:"virtualNetworks"`
}

type DdosProtectionPlanState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The provisioning state of the DDoS protection plan resource.
	ProvisioningState pulumi.StringPtrInput
	// The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
	ResourceGuid pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.
	VirtualNetworks SubResourceResponseArrayInput
}

func (DdosProtectionPlanState) ElementType() reflect.Type {
	return reflect.TypeOf((*ddosProtectionPlanState)(nil)).Elem()
}

type ddosProtectionPlanArgs struct {
	// The name of the DDoS protection plan.
	DdosProtectionPlanName string `pulumi:"ddosProtectionPlanName"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a DdosProtectionPlan resource.
type DdosProtectionPlanArgs struct {
	// The name of the DDoS protection plan.
	DdosProtectionPlanName pulumi.StringInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (DdosProtectionPlanArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ddosProtectionPlanArgs)(nil)).Elem()
}

type DdosProtectionPlanInput interface {
	pulumi.Input

	ToDdosProtectionPlanOutput() DdosProtectionPlanOutput
	ToDdosProtectionPlanOutputWithContext(ctx context.Context) DdosProtectionPlanOutput
}

func (*DdosProtectionPlan) ElementType() reflect.Type {
	return reflect.TypeOf((*DdosProtectionPlan)(nil))
}

func (i *DdosProtectionPlan) ToDdosProtectionPlanOutput() DdosProtectionPlanOutput {
	return i.ToDdosProtectionPlanOutputWithContext(context.Background())
}

func (i *DdosProtectionPlan) ToDdosProtectionPlanOutputWithContext(ctx context.Context) DdosProtectionPlanOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DdosProtectionPlanOutput)
}

type DdosProtectionPlanOutput struct {
	*pulumi.OutputState
}

func (DdosProtectionPlanOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DdosProtectionPlan)(nil))
}

func (o DdosProtectionPlanOutput) ToDdosProtectionPlanOutput() DdosProtectionPlanOutput {
	return o
}

func (o DdosProtectionPlanOutput) ToDdosProtectionPlanOutputWithContext(ctx context.Context) DdosProtectionPlanOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DdosProtectionPlanOutput{})
}
