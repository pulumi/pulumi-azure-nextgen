// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801preview

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The peering service prefix class.
type PeeringServicePrefix struct {
	pulumi.CustomResourceState

	// The prefix learned type
	LearnedType pulumi.StringPtrOutput `pulumi:"learnedType"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Valid route prefix
	Prefix pulumi.StringPtrOutput `pulumi:"prefix"`
	// The prefix validation state
	PrefixValidationState pulumi.StringPtrOutput `pulumi:"prefixValidationState"`
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPeeringServicePrefix registers a new resource with the given unique name, arguments, and options.
func NewPeeringServicePrefix(ctx *pulumi.Context,
	name string, args *PeeringServicePrefixArgs, opts ...pulumi.ResourceOption) (*PeeringServicePrefix, error) {
	if args == nil || args.PeeringServiceName == nil {
		return nil, errors.New("missing required argument 'PeeringServiceName'")
	}
	if args == nil || args.PrefixName == nil {
		return nil, errors.New("missing required argument 'PrefixName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &PeeringServicePrefixArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:peering/latest:PeeringServicePrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:peering/v20190901preview:PeeringServicePrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:peering/v20200101preview:PeeringServicePrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:peering/v20200401:PeeringServicePrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:peering/v20201001:PeeringServicePrefix"),
		},
	})
	opts = append(opts, aliases)
	var resource PeeringServicePrefix
	err := ctx.RegisterResource("azure-nextgen:peering/v20190801preview:PeeringServicePrefix", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPeeringServicePrefix gets an existing PeeringServicePrefix resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPeeringServicePrefix(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PeeringServicePrefixState, opts ...pulumi.ResourceOption) (*PeeringServicePrefix, error) {
	var resource PeeringServicePrefix
	err := ctx.ReadResource("azure-nextgen:peering/v20190801preview:PeeringServicePrefix", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PeeringServicePrefix resources.
type peeringServicePrefixState struct {
	// The prefix learned type
	LearnedType *string `pulumi:"learnedType"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// Valid route prefix
	Prefix *string `pulumi:"prefix"`
	// The prefix validation state
	PrefixValidationState *string `pulumi:"prefixValidationState"`
	// The provisioning state of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type PeeringServicePrefixState struct {
	// The prefix learned type
	LearnedType pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// Valid route prefix
	Prefix pulumi.StringPtrInput
	// The prefix validation state
	PrefixValidationState pulumi.StringPtrInput
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (PeeringServicePrefixState) ElementType() reflect.Type {
	return reflect.TypeOf((*peeringServicePrefixState)(nil)).Elem()
}

type peeringServicePrefixArgs struct {
	// The prefix learned type
	LearnedType *string `pulumi:"learnedType"`
	// The peering service name.
	PeeringServiceName string `pulumi:"peeringServiceName"`
	// Valid route prefix
	Prefix *string `pulumi:"prefix"`
	// The prefix name
	PrefixName string `pulumi:"prefixName"`
	// The prefix validation state
	PrefixValidationState *string `pulumi:"prefixValidationState"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a PeeringServicePrefix resource.
type PeeringServicePrefixArgs struct {
	// The prefix learned type
	LearnedType pulumi.StringPtrInput
	// The peering service name.
	PeeringServiceName pulumi.StringInput
	// Valid route prefix
	Prefix pulumi.StringPtrInput
	// The prefix name
	PrefixName pulumi.StringInput
	// The prefix validation state
	PrefixValidationState pulumi.StringPtrInput
	// The resource group name.
	ResourceGroupName pulumi.StringInput
}

func (PeeringServicePrefixArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*peeringServicePrefixArgs)(nil)).Elem()
}
