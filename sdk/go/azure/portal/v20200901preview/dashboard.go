// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The shared dashboard resource definition.
type Dashboard struct {
	pulumi.CustomResourceState

	// The dashboard lenses.
	Lenses DashboardLensResponseArrayOutput `pulumi:"lenses"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// The dashboard metadata.
	Metadata pulumi.MapOutput `pulumi:"metadata"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDashboard registers a new resource with the given unique name, arguments, and options.
func NewDashboard(ctx *pulumi.Context,
	name string, args *DashboardArgs, opts ...pulumi.ResourceOption) (*Dashboard, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DashboardName == nil {
		return nil, errors.New("invalid value for required argument 'DashboardName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:portal/v20150801preview:Dashboard"),
		},
		{
			Type: pulumi.String("azure-nextgen:portal/v20181001preview:Dashboard"),
		},
		{
			Type: pulumi.String("azure-nextgen:portal/v20190101preview:Dashboard"),
		},
	})
	opts = append(opts, aliases)
	var resource Dashboard
	err := ctx.RegisterResource("azure-nextgen:portal/v20200901preview:Dashboard", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDashboard gets an existing Dashboard resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDashboard(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DashboardState, opts ...pulumi.ResourceOption) (*Dashboard, error) {
	var resource Dashboard
	err := ctx.ReadResource("azure-nextgen:portal/v20200901preview:Dashboard", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Dashboard resources.
type dashboardState struct {
	// The dashboard lenses.
	Lenses []DashboardLensResponse `pulumi:"lenses"`
	// Resource location
	Location *string `pulumi:"location"`
	// The dashboard metadata.
	Metadata map[string]interface{} `pulumi:"metadata"`
	// Resource name
	Name *string `pulumi:"name"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type DashboardState struct {
	// The dashboard lenses.
	Lenses DashboardLensResponseArrayInput
	// Resource location
	Location pulumi.StringPtrInput
	// The dashboard metadata.
	Metadata pulumi.MapInput
	// Resource name
	Name pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (DashboardState) ElementType() reflect.Type {
	return reflect.TypeOf((*dashboardState)(nil)).Elem()
}

type dashboardArgs struct {
	// The name of the dashboard.
	DashboardName string `pulumi:"dashboardName"`
	// The dashboard lenses.
	Lenses []DashboardLens `pulumi:"lenses"`
	// Resource location
	Location string `pulumi:"location"`
	// The dashboard metadata.
	Metadata map[string]interface{} `pulumi:"metadata"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Dashboard resource.
type DashboardArgs struct {
	// The name of the dashboard.
	DashboardName pulumi.StringInput
	// The dashboard lenses.
	Lenses DashboardLensArrayInput
	// Resource location
	Location pulumi.StringInput
	// The dashboard metadata.
	Metadata pulumi.MapInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Resource tags
	Tags pulumi.StringMapInput
}

func (DashboardArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dashboardArgs)(nil)).Elem()
}

type DashboardInput interface {
	pulumi.Input

	ToDashboardOutput() DashboardOutput
	ToDashboardOutputWithContext(ctx context.Context) DashboardOutput
}

func (*Dashboard) ElementType() reflect.Type {
	return reflect.TypeOf((*Dashboard)(nil))
}

func (i *Dashboard) ToDashboardOutput() DashboardOutput {
	return i.ToDashboardOutputWithContext(context.Background())
}

func (i *Dashboard) ToDashboardOutputWithContext(ctx context.Context) DashboardOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DashboardOutput)
}

type DashboardOutput struct {
	*pulumi.OutputState
}

func (DashboardOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Dashboard)(nil))
}

func (o DashboardOutput) ToDashboardOutput() DashboardOutput {
	return o
}

func (o DashboardOutput) ToDashboardOutputWithContext(ctx context.Context) DashboardOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DashboardOutput{})
}
