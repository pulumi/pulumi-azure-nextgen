// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20140401

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Represents a disaster recovery configuration.
type DisasterRecoveryConfiguration struct {
	pulumi.CustomResourceState

	// Whether or not failover can be done automatically.
	AutoFailover pulumi.StringOutput `pulumi:"autoFailover"`
	// How aggressive the automatic failover should be.
	FailoverPolicy pulumi.StringOutput `pulumi:"failoverPolicy"`
	// Location of the server that contains this disaster recovery configuration.
	Location pulumi.StringOutput `pulumi:"location"`
	// Logical name of the server.
	LogicalServerName pulumi.StringOutput `pulumi:"logicalServerName"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Logical name of the partner server.
	PartnerLogicalServerName pulumi.StringOutput `pulumi:"partnerLogicalServerName"`
	// Id of the partner server.
	PartnerServerId pulumi.StringOutput `pulumi:"partnerServerId"`
	// The role of the current server in the disaster recovery configuration.
	Role pulumi.StringOutput `pulumi:"role"`
	// The status of the disaster recovery configuration.
	Status pulumi.StringOutput `pulumi:"status"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDisasterRecoveryConfiguration registers a new resource with the given unique name, arguments, and options.
func NewDisasterRecoveryConfiguration(ctx *pulumi.Context,
	name string, args *DisasterRecoveryConfigurationArgs, opts ...pulumi.ResourceOption) (*DisasterRecoveryConfiguration, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DisasterRecoveryConfigurationName == nil {
		return nil, errors.New("invalid value for required argument 'DisasterRecoveryConfigurationName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServerName == nil {
		return nil, errors.New("invalid value for required argument 'ServerName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/latest:DisasterRecoveryConfiguration"),
		},
	})
	opts = append(opts, aliases)
	var resource DisasterRecoveryConfiguration
	err := ctx.RegisterResource("azure-nextgen:sql/v20140401:DisasterRecoveryConfiguration", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDisasterRecoveryConfiguration gets an existing DisasterRecoveryConfiguration resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDisasterRecoveryConfiguration(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DisasterRecoveryConfigurationState, opts ...pulumi.ResourceOption) (*DisasterRecoveryConfiguration, error) {
	var resource DisasterRecoveryConfiguration
	err := ctx.ReadResource("azure-nextgen:sql/v20140401:DisasterRecoveryConfiguration", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DisasterRecoveryConfiguration resources.
type disasterRecoveryConfigurationState struct {
	// Whether or not failover can be done automatically.
	AutoFailover *string `pulumi:"autoFailover"`
	// How aggressive the automatic failover should be.
	FailoverPolicy *string `pulumi:"failoverPolicy"`
	// Location of the server that contains this disaster recovery configuration.
	Location *string `pulumi:"location"`
	// Logical name of the server.
	LogicalServerName *string `pulumi:"logicalServerName"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Logical name of the partner server.
	PartnerLogicalServerName *string `pulumi:"partnerLogicalServerName"`
	// Id of the partner server.
	PartnerServerId *string `pulumi:"partnerServerId"`
	// The role of the current server in the disaster recovery configuration.
	Role *string `pulumi:"role"`
	// The status of the disaster recovery configuration.
	Status *string `pulumi:"status"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type DisasterRecoveryConfigurationState struct {
	// Whether or not failover can be done automatically.
	AutoFailover pulumi.StringPtrInput
	// How aggressive the automatic failover should be.
	FailoverPolicy pulumi.StringPtrInput
	// Location of the server that contains this disaster recovery configuration.
	Location pulumi.StringPtrInput
	// Logical name of the server.
	LogicalServerName pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Logical name of the partner server.
	PartnerLogicalServerName pulumi.StringPtrInput
	// Id of the partner server.
	PartnerServerId pulumi.StringPtrInput
	// The role of the current server in the disaster recovery configuration.
	Role pulumi.StringPtrInput
	// The status of the disaster recovery configuration.
	Status pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (DisasterRecoveryConfigurationState) ElementType() reflect.Type {
	return reflect.TypeOf((*disasterRecoveryConfigurationState)(nil)).Elem()
}

type disasterRecoveryConfigurationArgs struct {
	// The name of the disaster recovery configuration to be created/updated.
	DisasterRecoveryConfigurationName string `pulumi:"disasterRecoveryConfigurationName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
}

// The set of arguments for constructing a DisasterRecoveryConfiguration resource.
type DisasterRecoveryConfigurationArgs struct {
	// The name of the disaster recovery configuration to be created/updated.
	DisasterRecoveryConfigurationName pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the server.
	ServerName pulumi.StringInput
}

func (DisasterRecoveryConfigurationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*disasterRecoveryConfigurationArgs)(nil)).Elem()
}

type DisasterRecoveryConfigurationInput interface {
	pulumi.Input

	ToDisasterRecoveryConfigurationOutput() DisasterRecoveryConfigurationOutput
	ToDisasterRecoveryConfigurationOutputWithContext(ctx context.Context) DisasterRecoveryConfigurationOutput
}

func (DisasterRecoveryConfiguration) ElementType() reflect.Type {
	return reflect.TypeOf((*DisasterRecoveryConfiguration)(nil)).Elem()
}

func (i DisasterRecoveryConfiguration) ToDisasterRecoveryConfigurationOutput() DisasterRecoveryConfigurationOutput {
	return i.ToDisasterRecoveryConfigurationOutputWithContext(context.Background())
}

func (i DisasterRecoveryConfiguration) ToDisasterRecoveryConfigurationOutputWithContext(ctx context.Context) DisasterRecoveryConfigurationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DisasterRecoveryConfigurationOutput)
}

type DisasterRecoveryConfigurationOutput struct {
	*pulumi.OutputState
}

func (DisasterRecoveryConfigurationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DisasterRecoveryConfigurationOutput)(nil)).Elem()
}

func (o DisasterRecoveryConfigurationOutput) ToDisasterRecoveryConfigurationOutput() DisasterRecoveryConfigurationOutput {
	return o
}

func (o DisasterRecoveryConfigurationOutput) ToDisasterRecoveryConfigurationOutputWithContext(ctx context.Context) DisasterRecoveryConfigurationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DisasterRecoveryConfigurationOutput{})
}
