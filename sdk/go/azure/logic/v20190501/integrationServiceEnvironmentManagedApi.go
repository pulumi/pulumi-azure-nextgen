// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190501

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The managed api definition.
type IntegrationServiceEnvironmentManagedApi struct {
	pulumi.CustomResourceState

	// The resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Gets the resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The api resource properties.
	Properties ApiResourcePropertiesResponseOutput `pulumi:"properties"`
	// The resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Gets the resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewIntegrationServiceEnvironmentManagedApi registers a new resource with the given unique name, arguments, and options.
func NewIntegrationServiceEnvironmentManagedApi(ctx *pulumi.Context,
	name string, args *IntegrationServiceEnvironmentManagedApiArgs, opts ...pulumi.ResourceOption) (*IntegrationServiceEnvironmentManagedApi, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApiName == nil {
		return nil, errors.New("invalid value for required argument 'ApiName'")
	}
	if args.IntegrationServiceEnvironmentName == nil {
		return nil, errors.New("invalid value for required argument 'IntegrationServiceEnvironmentName'")
	}
	if args.ResourceGroup == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroup'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:logic/latest:IntegrationServiceEnvironmentManagedApi"),
		},
	})
	opts = append(opts, aliases)
	var resource IntegrationServiceEnvironmentManagedApi
	err := ctx.RegisterResource("azure-nextgen:logic/v20190501:IntegrationServiceEnvironmentManagedApi", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIntegrationServiceEnvironmentManagedApi gets an existing IntegrationServiceEnvironmentManagedApi resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIntegrationServiceEnvironmentManagedApi(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IntegrationServiceEnvironmentManagedApiState, opts ...pulumi.ResourceOption) (*IntegrationServiceEnvironmentManagedApi, error) {
	var resource IntegrationServiceEnvironmentManagedApi
	err := ctx.ReadResource("azure-nextgen:logic/v20190501:IntegrationServiceEnvironmentManagedApi", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IntegrationServiceEnvironmentManagedApi resources.
type integrationServiceEnvironmentManagedApiState struct {
	// The resource location.
	Location *string `pulumi:"location"`
	// Gets the resource name.
	Name *string `pulumi:"name"`
	// The api resource properties.
	Properties *ApiResourcePropertiesResponse `pulumi:"properties"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Gets the resource type.
	Type *string `pulumi:"type"`
}

type IntegrationServiceEnvironmentManagedApiState struct {
	// The resource location.
	Location pulumi.StringPtrInput
	// Gets the resource name.
	Name pulumi.StringPtrInput
	// The api resource properties.
	Properties ApiResourcePropertiesResponsePtrInput
	// The resource tags.
	Tags pulumi.StringMapInput
	// Gets the resource type.
	Type pulumi.StringPtrInput
}

func (IntegrationServiceEnvironmentManagedApiState) ElementType() reflect.Type {
	return reflect.TypeOf((*integrationServiceEnvironmentManagedApiState)(nil)).Elem()
}

type integrationServiceEnvironmentManagedApiArgs struct {
	// The api name.
	ApiName string `pulumi:"apiName"`
	// The integration service environment name.
	IntegrationServiceEnvironmentName string `pulumi:"integrationServiceEnvironmentName"`
	// The resource group name.
	ResourceGroup string `pulumi:"resourceGroup"`
}

// The set of arguments for constructing a IntegrationServiceEnvironmentManagedApi resource.
type IntegrationServiceEnvironmentManagedApiArgs struct {
	// The api name.
	ApiName pulumi.StringInput
	// The integration service environment name.
	IntegrationServiceEnvironmentName pulumi.StringInput
	// The resource group name.
	ResourceGroup pulumi.StringInput
}

func (IntegrationServiceEnvironmentManagedApiArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*integrationServiceEnvironmentManagedApiArgs)(nil)).Elem()
}

type IntegrationServiceEnvironmentManagedApiInput interface {
	pulumi.Input

	ToIntegrationServiceEnvironmentManagedApiOutput() IntegrationServiceEnvironmentManagedApiOutput
	ToIntegrationServiceEnvironmentManagedApiOutputWithContext(ctx context.Context) IntegrationServiceEnvironmentManagedApiOutput
}

func (IntegrationServiceEnvironmentManagedApi) ElementType() reflect.Type {
	return reflect.TypeOf((*IntegrationServiceEnvironmentManagedApi)(nil)).Elem()
}

func (i IntegrationServiceEnvironmentManagedApi) ToIntegrationServiceEnvironmentManagedApiOutput() IntegrationServiceEnvironmentManagedApiOutput {
	return i.ToIntegrationServiceEnvironmentManagedApiOutputWithContext(context.Background())
}

func (i IntegrationServiceEnvironmentManagedApi) ToIntegrationServiceEnvironmentManagedApiOutputWithContext(ctx context.Context) IntegrationServiceEnvironmentManagedApiOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IntegrationServiceEnvironmentManagedApiOutput)
}

type IntegrationServiceEnvironmentManagedApiOutput struct {
	*pulumi.OutputState
}

func (IntegrationServiceEnvironmentManagedApiOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IntegrationServiceEnvironmentManagedApiOutput)(nil)).Elem()
}

func (o IntegrationServiceEnvironmentManagedApiOutput) ToIntegrationServiceEnvironmentManagedApiOutput() IntegrationServiceEnvironmentManagedApiOutput {
	return o
}

func (o IntegrationServiceEnvironmentManagedApiOutput) ToIntegrationServiceEnvironmentManagedApiOutputWithContext(ctx context.Context) IntegrationServiceEnvironmentManagedApiOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(IntegrationServiceEnvironmentManagedApiOutput{})
}
