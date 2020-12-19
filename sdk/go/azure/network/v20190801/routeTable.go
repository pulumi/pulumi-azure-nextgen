// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Route table resource.
type RouteTable struct {
	pulumi.CustomResourceState

	// Whether to disable the routes learned by BGP on that route table. True means disable.
	DisableBgpRoutePropagation pulumi.BoolPtrOutput `pulumi:"disableBgpRoutePropagation"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the route table resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Collection of routes contained within a route table.
	Routes RouteResponseArrayOutput `pulumi:"routes"`
	// A collection of references to subnets.
	Subnets SubnetResponseArrayOutput `pulumi:"subnets"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewRouteTable registers a new resource with the given unique name, arguments, and options.
func NewRouteTable(ctx *pulumi.Context,
	name string, args *RouteTableArgs, opts ...pulumi.ResourceOption) (*RouteTable, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.RouteTableName == nil {
		return nil, errors.New("invalid value for required argument 'RouteTableName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150501preview:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150615:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160330:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160601:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:RouteTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:RouteTable"),
		},
	})
	opts = append(opts, aliases)
	var resource RouteTable
	err := ctx.RegisterResource("azure-nextgen:network/v20190801:RouteTable", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRouteTable gets an existing RouteTable resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRouteTable(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RouteTableState, opts ...pulumi.ResourceOption) (*RouteTable, error) {
	var resource RouteTable
	err := ctx.ReadResource("azure-nextgen:network/v20190801:RouteTable", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering RouteTable resources.
type routeTableState struct {
	// Whether to disable the routes learned by BGP on that route table. True means disable.
	DisableBgpRoutePropagation *bool `pulumi:"disableBgpRoutePropagation"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The provisioning state of the route table resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Collection of routes contained within a route table.
	Routes []RouteResponse `pulumi:"routes"`
	// A collection of references to subnets.
	Subnets []SubnetResponse `pulumi:"subnets"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type RouteTableState struct {
	// Whether to disable the routes learned by BGP on that route table. True means disable.
	DisableBgpRoutePropagation pulumi.BoolPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The provisioning state of the route table resource.
	ProvisioningState pulumi.StringPtrInput
	// Collection of routes contained within a route table.
	Routes RouteResponseArrayInput
	// A collection of references to subnets.
	Subnets SubnetResponseArrayInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (RouteTableState) ElementType() reflect.Type {
	return reflect.TypeOf((*routeTableState)(nil)).Elem()
}

type routeTableArgs struct {
	// Whether to disable the routes learned by BGP on that route table. True means disable.
	DisableBgpRoutePropagation *bool `pulumi:"disableBgpRoutePropagation"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the route table.
	RouteTableName string `pulumi:"routeTableName"`
	// Collection of routes contained within a route table.
	Routes []RouteType `pulumi:"routes"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a RouteTable resource.
type RouteTableArgs struct {
	// Whether to disable the routes learned by BGP on that route table. True means disable.
	DisableBgpRoutePropagation pulumi.BoolPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the route table.
	RouteTableName pulumi.StringInput
	// Collection of routes contained within a route table.
	Routes RouteTypeArrayInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (RouteTableArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*routeTableArgs)(nil)).Elem()
}

type RouteTableInput interface {
	pulumi.Input

	ToRouteTableOutput() RouteTableOutput
	ToRouteTableOutputWithContext(ctx context.Context) RouteTableOutput
}

func (*RouteTable) ElementType() reflect.Type {
	return reflect.TypeOf((*RouteTable)(nil))
}

func (i *RouteTable) ToRouteTableOutput() RouteTableOutput {
	return i.ToRouteTableOutputWithContext(context.Background())
}

func (i *RouteTable) ToRouteTableOutputWithContext(ctx context.Context) RouteTableOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RouteTableOutput)
}

type RouteTableOutput struct {
	*pulumi.OutputState
}

func (RouteTableOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*RouteTable)(nil))
}

func (o RouteTableOutput) ToRouteTableOutput() RouteTableOutput {
	return o
}

func (o RouteTableOutput) ToRouteTableOutputWithContext(ctx context.Context) RouteTableOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(RouteTableOutput{})
}
