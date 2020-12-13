// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190601

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Authorization in an ExpressRouteCircuit resource.
type ExpressRouteCircuitAuthorization struct {
	pulumi.CustomResourceState

	// The authorization key.
	AuthorizationKey pulumi.StringPtrOutput `pulumi:"authorizationKey"`
	// The authorization use status.
	AuthorizationUseStatus pulumi.StringPtrOutput `pulumi:"authorizationUseStatus"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewExpressRouteCircuitAuthorization registers a new resource with the given unique name, arguments, and options.
func NewExpressRouteCircuitAuthorization(ctx *pulumi.Context,
	name string, args *ExpressRouteCircuitAuthorizationArgs, opts ...pulumi.ResourceOption) (*ExpressRouteCircuitAuthorization, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AuthorizationName == nil {
		return nil, errors.New("invalid value for required argument 'AuthorizationName'")
	}
	if args.CircuitName == nil {
		return nil, errors.New("invalid value for required argument 'CircuitName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150501preview:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150615:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160330:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160601:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:ExpressRouteCircuitAuthorization"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:ExpressRouteCircuitAuthorization"),
		},
	})
	opts = append(opts, aliases)
	var resource ExpressRouteCircuitAuthorization
	err := ctx.RegisterResource("azure-nextgen:network/v20190601:ExpressRouteCircuitAuthorization", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetExpressRouteCircuitAuthorization gets an existing ExpressRouteCircuitAuthorization resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetExpressRouteCircuitAuthorization(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ExpressRouteCircuitAuthorizationState, opts ...pulumi.ResourceOption) (*ExpressRouteCircuitAuthorization, error) {
	var resource ExpressRouteCircuitAuthorization
	err := ctx.ReadResource("azure-nextgen:network/v20190601:ExpressRouteCircuitAuthorization", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ExpressRouteCircuitAuthorization resources.
type expressRouteCircuitAuthorizationState struct {
	// The authorization key.
	AuthorizationKey *string `pulumi:"authorizationKey"`
	// The authorization use status.
	AuthorizationUseStatus *string `pulumi:"authorizationUseStatus"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Type of the resource.
	Type *string `pulumi:"type"`
}

type ExpressRouteCircuitAuthorizationState struct {
	// The authorization key.
	AuthorizationKey pulumi.StringPtrInput
	// The authorization use status.
	AuthorizationUseStatus pulumi.StringPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// Type of the resource.
	Type pulumi.StringPtrInput
}

func (ExpressRouteCircuitAuthorizationState) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteCircuitAuthorizationState)(nil)).Elem()
}

type expressRouteCircuitAuthorizationArgs struct {
	// The authorization key.
	AuthorizationKey *string `pulumi:"authorizationKey"`
	// The name of the authorization.
	AuthorizationName string `pulumi:"authorizationName"`
	// The authorization use status.
	AuthorizationUseStatus *string `pulumi:"authorizationUseStatus"`
	// The name of the express route circuit.
	CircuitName string `pulumi:"circuitName"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a ExpressRouteCircuitAuthorization resource.
type ExpressRouteCircuitAuthorizationArgs struct {
	// The authorization key.
	AuthorizationKey pulumi.StringPtrInput
	// The name of the authorization.
	AuthorizationName pulumi.StringInput
	// The authorization use status.
	AuthorizationUseStatus pulumi.StringPtrInput
	// The name of the express route circuit.
	CircuitName pulumi.StringInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
}

func (ExpressRouteCircuitAuthorizationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteCircuitAuthorizationArgs)(nil)).Elem()
}

type ExpressRouteCircuitAuthorizationInput interface {
	pulumi.Input

	ToExpressRouteCircuitAuthorizationOutput() ExpressRouteCircuitAuthorizationOutput
	ToExpressRouteCircuitAuthorizationOutputWithContext(ctx context.Context) ExpressRouteCircuitAuthorizationOutput
}

func (ExpressRouteCircuitAuthorization) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteCircuitAuthorization)(nil)).Elem()
}

func (i ExpressRouteCircuitAuthorization) ToExpressRouteCircuitAuthorizationOutput() ExpressRouteCircuitAuthorizationOutput {
	return i.ToExpressRouteCircuitAuthorizationOutputWithContext(context.Background())
}

func (i ExpressRouteCircuitAuthorization) ToExpressRouteCircuitAuthorizationOutputWithContext(ctx context.Context) ExpressRouteCircuitAuthorizationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ExpressRouteCircuitAuthorizationOutput)
}

type ExpressRouteCircuitAuthorizationOutput struct {
	*pulumi.OutputState
}

func (ExpressRouteCircuitAuthorizationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteCircuitAuthorizationOutput)(nil)).Elem()
}

func (o ExpressRouteCircuitAuthorizationOutput) ToExpressRouteCircuitAuthorizationOutput() ExpressRouteCircuitAuthorizationOutput {
	return o
}

func (o ExpressRouteCircuitAuthorizationOutput) ToExpressRouteCircuitAuthorizationOutputWithContext(ctx context.Context) ExpressRouteCircuitAuthorizationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ExpressRouteCircuitAuthorizationOutput{})
}
