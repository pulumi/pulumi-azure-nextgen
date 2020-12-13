// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A DDoS custom policy in a resource group.
type DdosCustomPolicy struct {
	pulumi.CustomResourceState

	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The protocol-specific DDoS policy customization parameters.
	ProtocolCustomSettings ProtocolCustomSettingsFormatResponseArrayOutput `pulumi:"protocolCustomSettings"`
	// The provisioning state of the DDoS custom policy resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
	PublicIPAddresses SubResourceResponseArrayOutput `pulumi:"publicIPAddresses"`
	// The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
	ResourceGuid pulumi.StringOutput `pulumi:"resourceGuid"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDdosCustomPolicy registers a new resource with the given unique name, arguments, and options.
func NewDdosCustomPolicy(ctx *pulumi.Context,
	name string, args *DdosCustomPolicyArgs, opts ...pulumi.ResourceOption) (*DdosCustomPolicy, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DdosCustomPolicyName == nil {
		return nil, errors.New("invalid value for required argument 'DdosCustomPolicyName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:DdosCustomPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:DdosCustomPolicy"),
		},
	})
	opts = append(opts, aliases)
	var resource DdosCustomPolicy
	err := ctx.RegisterResource("azure-nextgen:network/v20181201:DdosCustomPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDdosCustomPolicy gets an existing DdosCustomPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDdosCustomPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DdosCustomPolicyState, opts ...pulumi.ResourceOption) (*DdosCustomPolicy, error) {
	var resource DdosCustomPolicy
	err := ctx.ReadResource("azure-nextgen:network/v20181201:DdosCustomPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DdosCustomPolicy resources.
type ddosCustomPolicyState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The protocol-specific DDoS policy customization parameters.
	ProtocolCustomSettings []ProtocolCustomSettingsFormatResponse `pulumi:"protocolCustomSettings"`
	// The provisioning state of the DDoS custom policy resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
	PublicIPAddresses []SubResourceResponse `pulumi:"publicIPAddresses"`
	// The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type DdosCustomPolicyState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The protocol-specific DDoS policy customization parameters.
	ProtocolCustomSettings ProtocolCustomSettingsFormatResponseArrayInput
	// The provisioning state of the DDoS custom policy resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
	PublicIPAddresses SubResourceResponseArrayInput
	// The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
	ResourceGuid pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (DdosCustomPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*ddosCustomPolicyState)(nil)).Elem()
}

type ddosCustomPolicyArgs struct {
	// The name of the DDoS custom policy.
	DdosCustomPolicyName string `pulumi:"ddosCustomPolicyName"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The protocol-specific DDoS policy customization parameters.
	ProtocolCustomSettings []ProtocolCustomSettingsFormat `pulumi:"protocolCustomSettings"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a DdosCustomPolicy resource.
type DdosCustomPolicyArgs struct {
	// The name of the DDoS custom policy.
	DdosCustomPolicyName pulumi.StringInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The protocol-specific DDoS policy customization parameters.
	ProtocolCustomSettings ProtocolCustomSettingsFormatArrayInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (DdosCustomPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ddosCustomPolicyArgs)(nil)).Elem()
}

type DdosCustomPolicyInput interface {
	pulumi.Input

	ToDdosCustomPolicyOutput() DdosCustomPolicyOutput
	ToDdosCustomPolicyOutputWithContext(ctx context.Context) DdosCustomPolicyOutput
}

func (DdosCustomPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*DdosCustomPolicy)(nil)).Elem()
}

func (i DdosCustomPolicy) ToDdosCustomPolicyOutput() DdosCustomPolicyOutput {
	return i.ToDdosCustomPolicyOutputWithContext(context.Background())
}

func (i DdosCustomPolicy) ToDdosCustomPolicyOutputWithContext(ctx context.Context) DdosCustomPolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DdosCustomPolicyOutput)
}

type DdosCustomPolicyOutput struct {
	*pulumi.OutputState
}

func (DdosCustomPolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DdosCustomPolicyOutput)(nil)).Elem()
}

func (o DdosCustomPolicyOutput) ToDdosCustomPolicyOutput() DdosCustomPolicyOutput {
	return o
}

func (o DdosCustomPolicyOutput) ToDdosCustomPolicyOutputWithContext(ctx context.Context) DdosCustomPolicyOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DdosCustomPolicyOutput{})
}
