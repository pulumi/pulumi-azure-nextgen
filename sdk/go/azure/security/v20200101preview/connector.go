// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The connector setting
type Connector struct {
	pulumi.CustomResourceState

	// Settings for authentication management, these settings are relevant only for the cloud connector.
	AuthenticationDetails pulumi.AnyOutput `pulumi:"authenticationDetails"`
	// Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute).
	HybridComputeSettings HybridComputeSettingsPropertiesResponsePtrOutput `pulumi:"hybridComputeSettings"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewConnector registers a new resource with the given unique name, arguments, and options.
func NewConnector(ctx *pulumi.Context,
	name string, args *ConnectorArgs, opts ...pulumi.ResourceOption) (*Connector, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ConnectorName == nil {
		return nil, errors.New("invalid value for required argument 'ConnectorName'")
	}
	var resource Connector
	err := ctx.RegisterResource("azure-nextgen:security/v20200101preview:Connector", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetConnector gets an existing Connector resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetConnector(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ConnectorState, opts ...pulumi.ResourceOption) (*Connector, error) {
	var resource Connector
	err := ctx.ReadResource("azure-nextgen:security/v20200101preview:Connector", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Connector resources.
type connectorState struct {
	// Settings for authentication management, these settings are relevant only for the cloud connector.
	AuthenticationDetails interface{} `pulumi:"authenticationDetails"`
	// Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute).
	HybridComputeSettings *HybridComputeSettingsPropertiesResponse `pulumi:"hybridComputeSettings"`
	// Resource name
	Name *string `pulumi:"name"`
	// Resource type
	Type *string `pulumi:"type"`
}

type ConnectorState struct {
	// Settings for authentication management, these settings are relevant only for the cloud connector.
	AuthenticationDetails pulumi.Input
	// Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute).
	HybridComputeSettings HybridComputeSettingsPropertiesResponsePtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (ConnectorState) ElementType() reflect.Type {
	return reflect.TypeOf((*connectorState)(nil)).Elem()
}

type connectorArgs struct {
	// Settings for authentication management, these settings are relevant only for the cloud connector.
	AuthenticationDetails interface{} `pulumi:"authenticationDetails"`
	// Name of the cloud account connector
	ConnectorName string `pulumi:"connectorName"`
	// Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute).
	HybridComputeSettings *HybridComputeSettingsProperties `pulumi:"hybridComputeSettings"`
}

// The set of arguments for constructing a Connector resource.
type ConnectorArgs struct {
	// Settings for authentication management, these settings are relevant only for the cloud connector.
	AuthenticationDetails pulumi.Input
	// Name of the cloud account connector
	ConnectorName pulumi.StringInput
	// Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute).
	HybridComputeSettings HybridComputeSettingsPropertiesPtrInput
}

func (ConnectorArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*connectorArgs)(nil)).Elem()
}

type ConnectorInput interface {
	pulumi.Input

	ToConnectorOutput() ConnectorOutput
	ToConnectorOutputWithContext(ctx context.Context) ConnectorOutput
}

func (Connector) ElementType() reflect.Type {
	return reflect.TypeOf((*Connector)(nil)).Elem()
}

func (i Connector) ToConnectorOutput() ConnectorOutput {
	return i.ToConnectorOutputWithContext(context.Background())
}

func (i Connector) ToConnectorOutputWithContext(ctx context.Context) ConnectorOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ConnectorOutput)
}

type ConnectorOutput struct {
	*pulumi.OutputState
}

func (ConnectorOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ConnectorOutput)(nil)).Elem()
}

func (o ConnectorOutput) ToConnectorOutput() ConnectorOutput {
	return o
}

func (o ConnectorOutput) ToConnectorOutputWithContext(ctx context.Context) ConnectorOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ConnectorOutput{})
}
