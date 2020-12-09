// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171201preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Represents a Configuration.
type Configuration struct {
	pulumi.CustomResourceState

	// Allowed values of the configuration.
	AllowedValues pulumi.StringOutput `pulumi:"allowedValues"`
	// Data type of the configuration.
	DataType pulumi.StringOutput `pulumi:"dataType"`
	// Default value of the configuration.
	DefaultValue pulumi.StringOutput `pulumi:"defaultValue"`
	// Description of the configuration.
	Description pulumi.StringOutput `pulumi:"description"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Source of the configuration.
	Source pulumi.StringPtrOutput `pulumi:"source"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
	// Value of the configuration.
	Value pulumi.StringPtrOutput `pulumi:"value"`
}

// NewConfiguration registers a new resource with the given unique name, arguments, and options.
func NewConfiguration(ctx *pulumi.Context,
	name string, args *ConfigurationArgs, opts ...pulumi.ResourceOption) (*Configuration, error) {
	if args == nil || args.ConfigurationName == nil {
		return nil, errors.New("missing required argument 'ConfigurationName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServerName == nil {
		return nil, errors.New("missing required argument 'ServerName'")
	}
	if args == nil {
		args = &ConfigurationArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:dbformysql/latest:Configuration"),
		},
		{
			Type: pulumi.String("azure-nextgen:dbformysql/v20171201:Configuration"),
		},
	})
	opts = append(opts, aliases)
	var resource Configuration
	err := ctx.RegisterResource("azure-nextgen:dbformysql/v20171201preview:Configuration", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetConfiguration gets an existing Configuration resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetConfiguration(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ConfigurationState, opts ...pulumi.ResourceOption) (*Configuration, error) {
	var resource Configuration
	err := ctx.ReadResource("azure-nextgen:dbformysql/v20171201preview:Configuration", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Configuration resources.
type configurationState struct {
	// Allowed values of the configuration.
	AllowedValues *string `pulumi:"allowedValues"`
	// Data type of the configuration.
	DataType *string `pulumi:"dataType"`
	// Default value of the configuration.
	DefaultValue *string `pulumi:"defaultValue"`
	// Description of the configuration.
	Description *string `pulumi:"description"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// Source of the configuration.
	Source *string `pulumi:"source"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
	// Value of the configuration.
	Value *string `pulumi:"value"`
}

type ConfigurationState struct {
	// Allowed values of the configuration.
	AllowedValues pulumi.StringPtrInput
	// Data type of the configuration.
	DataType pulumi.StringPtrInput
	// Default value of the configuration.
	DefaultValue pulumi.StringPtrInput
	// Description of the configuration.
	Description pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// Source of the configuration.
	Source pulumi.StringPtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
	// Value of the configuration.
	Value pulumi.StringPtrInput
}

func (ConfigurationState) ElementType() reflect.Type {
	return reflect.TypeOf((*configurationState)(nil)).Elem()
}

type configurationArgs struct {
	// The name of the server configuration.
	ConfigurationName string `pulumi:"configurationName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
	// Source of the configuration.
	Source *string `pulumi:"source"`
	// Value of the configuration.
	Value *string `pulumi:"value"`
}

// The set of arguments for constructing a Configuration resource.
type ConfigurationArgs struct {
	// The name of the server configuration.
	ConfigurationName pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the server.
	ServerName pulumi.StringInput
	// Source of the configuration.
	Source pulumi.StringPtrInput
	// Value of the configuration.
	Value pulumi.StringPtrInput
}

func (ConfigurationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*configurationArgs)(nil)).Elem()
}

type ConfigurationInput interface {
	pulumi.Input

	ToConfigurationOutput() ConfigurationOutput
	ToConfigurationOutputWithContext(ctx context.Context) ConfigurationOutput
}

func (Configuration) ElementType() reflect.Type {
	return reflect.TypeOf((*Configuration)(nil)).Elem()
}

func (i Configuration) ToConfigurationOutput() ConfigurationOutput {
	return i.ToConfigurationOutputWithContext(context.Background())
}

func (i Configuration) ToConfigurationOutputWithContext(ctx context.Context) ConfigurationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ConfigurationOutput)
}

type ConfigurationOutput struct {
	*pulumi.OutputState
}

func (ConfigurationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ConfigurationOutput)(nil)).Elem()
}

func (o ConfigurationOutput) ToConfigurationOutput() ConfigurationOutput {
	return o
}

func (o ConfigurationOutput) ToConfigurationOutputWithContext(ctx context.Context) ConfigurationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ConfigurationOutput{})
}