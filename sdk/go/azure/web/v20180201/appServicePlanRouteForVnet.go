// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Virtual Network route contract used to pass routing information for a Virtual Network.
type AppServicePlanRouteForVnet struct {
	pulumi.CustomResourceState

	// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
	EndAddress pulumi.StringPtrOutput `pulumi:"endAddress"`
	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The type of route this is:
	// DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
	// INHERITED - Routes inherited from the real Virtual Network routes
	// STATIC - Static route set on the app only
	//
	// These values will be used for syncing an app's routes with those from a Virtual Network.
	RouteType pulumi.StringPtrOutput `pulumi:"routeType"`
	// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
	StartAddress pulumi.StringPtrOutput `pulumi:"startAddress"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewAppServicePlanRouteForVnet registers a new resource with the given unique name, arguments, and options.
func NewAppServicePlanRouteForVnet(ctx *pulumi.Context,
	name string, args *AppServicePlanRouteForVnetArgs, opts ...pulumi.ResourceOption) (*AppServicePlanRouteForVnet, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.RouteName == nil {
		return nil, errors.New("invalid value for required argument 'RouteName'")
	}
	if args.VnetName == nil {
		return nil, errors.New("invalid value for required argument 'VnetName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:AppServicePlanRouteForVnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20150801:AppServicePlanRouteForVnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20160901:AppServicePlanRouteForVnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20190801:AppServicePlanRouteForVnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:AppServicePlanRouteForVnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200901:AppServicePlanRouteForVnet"),
		},
	})
	opts = append(opts, aliases)
	var resource AppServicePlanRouteForVnet
	err := ctx.RegisterResource("azure-nextgen:web/v20180201:AppServicePlanRouteForVnet", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAppServicePlanRouteForVnet gets an existing AppServicePlanRouteForVnet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAppServicePlanRouteForVnet(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AppServicePlanRouteForVnetState, opts ...pulumi.ResourceOption) (*AppServicePlanRouteForVnet, error) {
	var resource AppServicePlanRouteForVnet
	err := ctx.ReadResource("azure-nextgen:web/v20180201:AppServicePlanRouteForVnet", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AppServicePlanRouteForVnet resources.
type appServicePlanRouteForVnetState struct {
	// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
	EndAddress *string `pulumi:"endAddress"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// The type of route this is:
	// DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
	// INHERITED - Routes inherited from the real Virtual Network routes
	// STATIC - Static route set on the app only
	//
	// These values will be used for syncing an app's routes with those from a Virtual Network.
	RouteType *string `pulumi:"routeType"`
	// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
	StartAddress *string `pulumi:"startAddress"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type AppServicePlanRouteForVnetState struct {
	// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
	EndAddress pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// The type of route this is:
	// DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
	// INHERITED - Routes inherited from the real Virtual Network routes
	// STATIC - Static route set on the app only
	//
	// These values will be used for syncing an app's routes with those from a Virtual Network.
	RouteType pulumi.StringPtrInput
	// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
	StartAddress pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (AppServicePlanRouteForVnetState) ElementType() reflect.Type {
	return reflect.TypeOf((*appServicePlanRouteForVnetState)(nil)).Elem()
}

type appServicePlanRouteForVnetArgs struct {
	// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
	EndAddress *string `pulumi:"endAddress"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Name of the App Service plan.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the Virtual Network route.
	RouteName string `pulumi:"routeName"`
	// The type of route this is:
	// DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
	// INHERITED - Routes inherited from the real Virtual Network routes
	// STATIC - Static route set on the app only
	//
	// These values will be used for syncing an app's routes with those from a Virtual Network.
	RouteType *string `pulumi:"routeType"`
	// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
	StartAddress *string `pulumi:"startAddress"`
	// Name of the Virtual Network.
	VnetName string `pulumi:"vnetName"`
}

// The set of arguments for constructing a AppServicePlanRouteForVnet resource.
type AppServicePlanRouteForVnetArgs struct {
	// The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
	EndAddress pulumi.StringPtrInput
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Name of the App Service plan.
	Name pulumi.StringInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
	// Name of the Virtual Network route.
	RouteName pulumi.StringInput
	// The type of route this is:
	// DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
	// INHERITED - Routes inherited from the real Virtual Network routes
	// STATIC - Static route set on the app only
	//
	// These values will be used for syncing an app's routes with those from a Virtual Network.
	RouteType pulumi.StringPtrInput
	// The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
	StartAddress pulumi.StringPtrInput
	// Name of the Virtual Network.
	VnetName pulumi.StringInput
}

func (AppServicePlanRouteForVnetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*appServicePlanRouteForVnetArgs)(nil)).Elem()
}

type AppServicePlanRouteForVnetInput interface {
	pulumi.Input

	ToAppServicePlanRouteForVnetOutput() AppServicePlanRouteForVnetOutput
	ToAppServicePlanRouteForVnetOutputWithContext(ctx context.Context) AppServicePlanRouteForVnetOutput
}

func (AppServicePlanRouteForVnet) ElementType() reflect.Type {
	return reflect.TypeOf((*AppServicePlanRouteForVnet)(nil)).Elem()
}

func (i AppServicePlanRouteForVnet) ToAppServicePlanRouteForVnetOutput() AppServicePlanRouteForVnetOutput {
	return i.ToAppServicePlanRouteForVnetOutputWithContext(context.Background())
}

func (i AppServicePlanRouteForVnet) ToAppServicePlanRouteForVnetOutputWithContext(ctx context.Context) AppServicePlanRouteForVnetOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AppServicePlanRouteForVnetOutput)
}

type AppServicePlanRouteForVnetOutput struct {
	*pulumi.OutputState
}

func (AppServicePlanRouteForVnetOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AppServicePlanRouteForVnetOutput)(nil)).Elem()
}

func (o AppServicePlanRouteForVnetOutput) ToAppServicePlanRouteForVnetOutput() AppServicePlanRouteForVnetOutput {
	return o
}

func (o AppServicePlanRouteForVnetOutput) ToAppServicePlanRouteForVnetOutputWithContext(ctx context.Context) AppServicePlanRouteForVnetOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(AppServicePlanRouteForVnetOutput{})
}
