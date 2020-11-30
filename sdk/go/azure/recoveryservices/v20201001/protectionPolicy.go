// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201001

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Base class for backup policy. Workload-specific backup policies are derived from this class.
type ProtectionPolicy struct {
	pulumi.CustomResourceState

	// Optional ETag.
	ETag pulumi.StringPtrOutput `pulumi:"eTag"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name associated with the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// ProtectionPolicyResource properties
	Properties pulumi.AnyOutput `pulumi:"properties"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewProtectionPolicy registers a new resource with the given unique name, arguments, and options.
func NewProtectionPolicy(ctx *pulumi.Context,
	name string, args *ProtectionPolicyArgs, opts ...pulumi.ResourceOption) (*ProtectionPolicy, error) {
	if args == nil || args.PolicyName == nil {
		return nil, errors.New("missing required argument 'PolicyName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.VaultName == nil {
		return nil, errors.New("missing required argument 'VaultName'")
	}
	if args == nil {
		args = &ProtectionPolicyArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/latest:ProtectionPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/v20160601:ProtectionPolicy"),
		},
	})
	opts = append(opts, aliases)
	var resource ProtectionPolicy
	err := ctx.RegisterResource("azure-nextgen:recoveryservices/v20201001:ProtectionPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetProtectionPolicy gets an existing ProtectionPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProtectionPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ProtectionPolicyState, opts ...pulumi.ResourceOption) (*ProtectionPolicy, error) {
	var resource ProtectionPolicy
	err := ctx.ReadResource("azure-nextgen:recoveryservices/v20201001:ProtectionPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ProtectionPolicy resources.
type protectionPolicyState struct {
	// Optional ETag.
	ETag *string `pulumi:"eTag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name associated with the resource.
	Name *string `pulumi:"name"`
	// ProtectionPolicyResource properties
	Properties interface{} `pulumi:"properties"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
	Type *string `pulumi:"type"`
}

type ProtectionPolicyState struct {
	// Optional ETag.
	ETag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name associated with the resource.
	Name pulumi.StringPtrInput
	// ProtectionPolicyResource properties
	Properties pulumi.Input
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
	Type pulumi.StringPtrInput
}

func (ProtectionPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*protectionPolicyState)(nil)).Elem()
}

type protectionPolicyArgs struct {
	// Optional ETag.
	ETag *string `pulumi:"eTag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Backup policy to be created.
	PolicyName string `pulumi:"policyName"`
	// ProtectionPolicyResource properties
	Properties interface{} `pulumi:"properties"`
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The name of the recovery services vault.
	VaultName string `pulumi:"vaultName"`
}

// The set of arguments for constructing a ProtectionPolicy resource.
type ProtectionPolicyArgs struct {
	// Optional ETag.
	ETag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Backup policy to be created.
	PolicyName pulumi.StringInput
	// ProtectionPolicyResource properties
	Properties pulumi.Input
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The name of the recovery services vault.
	VaultName pulumi.StringInput
}

func (ProtectionPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*protectionPolicyArgs)(nil)).Elem()
}

type ProtectionPolicyInput interface {
	pulumi.Input

	ToProtectionPolicyOutput() ProtectionPolicyOutput
	ToProtectionPolicyOutputWithContext(ctx context.Context) ProtectionPolicyOutput
}

func (ProtectionPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*ProtectionPolicy)(nil)).Elem()
}

func (i ProtectionPolicy) ToProtectionPolicyOutput() ProtectionPolicyOutput {
	return i.ToProtectionPolicyOutputWithContext(context.Background())
}

func (i ProtectionPolicy) ToProtectionPolicyOutputWithContext(ctx context.Context) ProtectionPolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProtectionPolicyOutput)
}

type ProtectionPolicyOutput struct {
	*pulumi.OutputState
}

func (ProtectionPolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ProtectionPolicyOutput)(nil)).Elem()
}

func (o ProtectionPolicyOutput) ToProtectionPolicyOutput() ProtectionPolicyOutput {
	return o
}

func (o ProtectionPolicyOutput) ToProtectionPolicyOutputWithContext(ctx context.Context) ProtectionPolicyOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ProtectionPolicyOutput{})
}
