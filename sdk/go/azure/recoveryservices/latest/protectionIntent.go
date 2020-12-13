// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Base class for backup ProtectionIntent.
type ProtectionIntent struct {
	pulumi.CustomResourceState

	// Optional ETag.
	ETag pulumi.StringPtrOutput `pulumi:"eTag"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name associated with the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// ProtectionIntentResource properties
	Properties pulumi.AnyOutput `pulumi:"properties"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewProtectionIntent registers a new resource with the given unique name, arguments, and options.
func NewProtectionIntent(ctx *pulumi.Context,
	name string, args *ProtectionIntentArgs, opts ...pulumi.ResourceOption) (*ProtectionIntent, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.FabricName == nil {
		return nil, errors.New("invalid value for required argument 'FabricName'")
	}
	if args.IntentObjectName == nil {
		return nil, errors.New("invalid value for required argument 'IntentObjectName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VaultName == nil {
		return nil, errors.New("invalid value for required argument 'VaultName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/v20170701:ProtectionIntent"),
		},
	})
	opts = append(opts, aliases)
	var resource ProtectionIntent
	err := ctx.RegisterResource("azure-nextgen:recoveryservices/latest:ProtectionIntent", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetProtectionIntent gets an existing ProtectionIntent resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProtectionIntent(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ProtectionIntentState, opts ...pulumi.ResourceOption) (*ProtectionIntent, error) {
	var resource ProtectionIntent
	err := ctx.ReadResource("azure-nextgen:recoveryservices/latest:ProtectionIntent", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ProtectionIntent resources.
type protectionIntentState struct {
	// Optional ETag.
	ETag *string `pulumi:"eTag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name associated with the resource.
	Name *string `pulumi:"name"`
	// ProtectionIntentResource properties
	Properties interface{} `pulumi:"properties"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
	Type *string `pulumi:"type"`
}

type ProtectionIntentState struct {
	// Optional ETag.
	ETag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name associated with the resource.
	Name pulumi.StringPtrInput
	// ProtectionIntentResource properties
	Properties pulumi.Input
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
	Type pulumi.StringPtrInput
}

func (ProtectionIntentState) ElementType() reflect.Type {
	return reflect.TypeOf((*protectionIntentState)(nil)).Elem()
}

type protectionIntentArgs struct {
	// Optional ETag.
	ETag *string `pulumi:"eTag"`
	// Fabric name associated with the backup item.
	FabricName string `pulumi:"fabricName"`
	// Intent object name.
	IntentObjectName string `pulumi:"intentObjectName"`
	// Resource location.
	Location *string `pulumi:"location"`
	// ProtectionIntentResource properties
	Properties interface{} `pulumi:"properties"`
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The name of the recovery services vault.
	VaultName string `pulumi:"vaultName"`
}

// The set of arguments for constructing a ProtectionIntent resource.
type ProtectionIntentArgs struct {
	// Optional ETag.
	ETag pulumi.StringPtrInput
	// Fabric name associated with the backup item.
	FabricName pulumi.StringInput
	// Intent object name.
	IntentObjectName pulumi.StringInput
	// Resource location.
	Location pulumi.StringPtrInput
	// ProtectionIntentResource properties
	Properties pulumi.Input
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The name of the recovery services vault.
	VaultName pulumi.StringInput
}

func (ProtectionIntentArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*protectionIntentArgs)(nil)).Elem()
}

type ProtectionIntentInput interface {
	pulumi.Input

	ToProtectionIntentOutput() ProtectionIntentOutput
	ToProtectionIntentOutputWithContext(ctx context.Context) ProtectionIntentOutput
}

func (ProtectionIntent) ElementType() reflect.Type {
	return reflect.TypeOf((*ProtectionIntent)(nil)).Elem()
}

func (i ProtectionIntent) ToProtectionIntentOutput() ProtectionIntentOutput {
	return i.ToProtectionIntentOutputWithContext(context.Background())
}

func (i ProtectionIntent) ToProtectionIntentOutputWithContext(ctx context.Context) ProtectionIntentOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProtectionIntentOutput)
}

type ProtectionIntentOutput struct {
	*pulumi.OutputState
}

func (ProtectionIntentOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ProtectionIntentOutput)(nil)).Elem()
}

func (o ProtectionIntentOutput) ToProtectionIntentOutput() ProtectionIntentOutput {
	return o
}

func (o ProtectionIntentOutput) ToProtectionIntentOutputWithContext(ctx context.Context) ProtectionIntentOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ProtectionIntentOutput{})
}
