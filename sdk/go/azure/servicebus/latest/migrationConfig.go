// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Single item in List or Get Migration Config operation
// Latest API Version: 2017-04-01.
type MigrationConfig struct {
	pulumi.CustomResourceState

	// State in which Standard to Premium Migration is, possible values : Unknown, Reverting, Completing, Initiating, Syncing, Active
	MigrationState pulumi.StringOutput `pulumi:"migrationState"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Number of entities pending to be replicated.
	PendingReplicationOperationsCount pulumi.IntOutput `pulumi:"pendingReplicationOperationsCount"`
	// Name to access Standard Namespace after migration
	PostMigrationName pulumi.StringOutput `pulumi:"postMigrationName"`
	// Provisioning state of Migration Configuration
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Existing premium Namespace ARM Id name which has no entities, will be used for migration
	TargetNamespace pulumi.StringOutput `pulumi:"targetNamespace"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewMigrationConfig registers a new resource with the given unique name, arguments, and options.
func NewMigrationConfig(ctx *pulumi.Context,
	name string, args *MigrationConfigArgs, opts ...pulumi.ResourceOption) (*MigrationConfig, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ConfigName == nil {
		return nil, errors.New("invalid value for required argument 'ConfigName'")
	}
	if args.NamespaceName == nil {
		return nil, errors.New("invalid value for required argument 'NamespaceName'")
	}
	if args.PostMigrationName == nil {
		return nil, errors.New("invalid value for required argument 'PostMigrationName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.TargetNamespace == nil {
		return nil, errors.New("invalid value for required argument 'TargetNamespace'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20170401:MigrationConfig"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20180101preview:MigrationConfig"),
		},
	})
	opts = append(opts, aliases)
	var resource MigrationConfig
	err := ctx.RegisterResource("azure-nextgen:servicebus/latest:MigrationConfig", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetMigrationConfig gets an existing MigrationConfig resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetMigrationConfig(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *MigrationConfigState, opts ...pulumi.ResourceOption) (*MigrationConfig, error) {
	var resource MigrationConfig
	err := ctx.ReadResource("azure-nextgen:servicebus/latest:MigrationConfig", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering MigrationConfig resources.
type migrationConfigState struct {
	// State in which Standard to Premium Migration is, possible values : Unknown, Reverting, Completing, Initiating, Syncing, Active
	MigrationState *string `pulumi:"migrationState"`
	// Resource name
	Name *string `pulumi:"name"`
	// Number of entities pending to be replicated.
	PendingReplicationOperationsCount *int `pulumi:"pendingReplicationOperationsCount"`
	// Name to access Standard Namespace after migration
	PostMigrationName *string `pulumi:"postMigrationName"`
	// Provisioning state of Migration Configuration
	ProvisioningState *string `pulumi:"provisioningState"`
	// Existing premium Namespace ARM Id name which has no entities, will be used for migration
	TargetNamespace *string `pulumi:"targetNamespace"`
	// Resource type
	Type *string `pulumi:"type"`
}

type MigrationConfigState struct {
	// State in which Standard to Premium Migration is, possible values : Unknown, Reverting, Completing, Initiating, Syncing, Active
	MigrationState pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Number of entities pending to be replicated.
	PendingReplicationOperationsCount pulumi.IntPtrInput
	// Name to access Standard Namespace after migration
	PostMigrationName pulumi.StringPtrInput
	// Provisioning state of Migration Configuration
	ProvisioningState pulumi.StringPtrInput
	// Existing premium Namespace ARM Id name which has no entities, will be used for migration
	TargetNamespace pulumi.StringPtrInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (MigrationConfigState) ElementType() reflect.Type {
	return reflect.TypeOf((*migrationConfigState)(nil)).Elem()
}

type migrationConfigArgs struct {
	// The configuration name. Should always be "$default".
	ConfigName string `pulumi:"configName"`
	// The namespace name
	NamespaceName string `pulumi:"namespaceName"`
	// Name to access Standard Namespace after migration
	PostMigrationName string `pulumi:"postMigrationName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Existing premium Namespace ARM Id name which has no entities, will be used for migration
	TargetNamespace string `pulumi:"targetNamespace"`
}

// The set of arguments for constructing a MigrationConfig resource.
type MigrationConfigArgs struct {
	// The configuration name. Should always be "$default".
	ConfigName pulumi.StringInput
	// The namespace name
	NamespaceName pulumi.StringInput
	// Name to access Standard Namespace after migration
	PostMigrationName pulumi.StringInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// Existing premium Namespace ARM Id name which has no entities, will be used for migration
	TargetNamespace pulumi.StringInput
}

func (MigrationConfigArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*migrationConfigArgs)(nil)).Elem()
}

type MigrationConfigInput interface {
	pulumi.Input

	ToMigrationConfigOutput() MigrationConfigOutput
	ToMigrationConfigOutputWithContext(ctx context.Context) MigrationConfigOutput
}

func (*MigrationConfig) ElementType() reflect.Type {
	return reflect.TypeOf((*MigrationConfig)(nil))
}

func (i *MigrationConfig) ToMigrationConfigOutput() MigrationConfigOutput {
	return i.ToMigrationConfigOutputWithContext(context.Background())
}

func (i *MigrationConfig) ToMigrationConfigOutputWithContext(ctx context.Context) MigrationConfigOutput {
	return pulumi.ToOutputWithContext(ctx, i).(MigrationConfigOutput)
}

type MigrationConfigOutput struct {
	*pulumi.OutputState
}

func (MigrationConfigOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*MigrationConfig)(nil))
}

func (o MigrationConfigOutput) ToMigrationConfigOutput() MigrationConfigOutput {
	return o
}

func (o MigrationConfigOutput) ToMigrationConfigOutputWithContext(ctx context.Context) MigrationConfigOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(MigrationConfigOutput{})
}
