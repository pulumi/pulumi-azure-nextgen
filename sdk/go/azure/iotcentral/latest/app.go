// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The IoT Central application.
// Latest API Version: 2018-09-01.
type App struct {
	pulumi.CustomResourceState

	// The ID of the application.
	ApplicationId pulumi.StringOutput `pulumi:"applicationId"`
	// The display name of the application.
	DisplayName pulumi.StringPtrOutput `pulumi:"displayName"`
	// The resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// The ARM resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// A valid instance SKU.
	Sku AppSkuInfoResponseOutput `pulumi:"sku"`
	// The subdomain of the application.
	Subdomain pulumi.StringPtrOutput `pulumi:"subdomain"`
	// The resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
	Template pulumi.StringPtrOutput `pulumi:"template"`
	// The resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewApp registers a new resource with the given unique name, arguments, and options.
func NewApp(ctx *pulumi.Context,
	name string, args *AppArgs, opts ...pulumi.ResourceOption) (*App, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ResourceName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceName'")
	}
	if args.Sku == nil {
		return nil, errors.New("invalid value for required argument 'Sku'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:iotcentral/v20170701privatepreview:App"),
		},
		{
			Type: pulumi.String("azure-nextgen:iotcentral/v20180901:App"),
		},
	})
	opts = append(opts, aliases)
	var resource App
	err := ctx.RegisterResource("azure-nextgen:iotcentral/latest:App", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApp gets an existing App resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApp(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AppState, opts ...pulumi.ResourceOption) (*App, error) {
	var resource App
	err := ctx.ReadResource("azure-nextgen:iotcentral/latest:App", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering App resources.
type appState struct {
	// The ID of the application.
	ApplicationId *string `pulumi:"applicationId"`
	// The display name of the application.
	DisplayName *string `pulumi:"displayName"`
	// The resource location.
	Location *string `pulumi:"location"`
	// The ARM resource name.
	Name *string `pulumi:"name"`
	// A valid instance SKU.
	Sku *AppSkuInfoResponse `pulumi:"sku"`
	// The subdomain of the application.
	Subdomain *string `pulumi:"subdomain"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
	Template *string `pulumi:"template"`
	// The resource type.
	Type *string `pulumi:"type"`
}

type AppState struct {
	// The ID of the application.
	ApplicationId pulumi.StringPtrInput
	// The display name of the application.
	DisplayName pulumi.StringPtrInput
	// The resource location.
	Location pulumi.StringPtrInput
	// The ARM resource name.
	Name pulumi.StringPtrInput
	// A valid instance SKU.
	Sku AppSkuInfoResponsePtrInput
	// The subdomain of the application.
	Subdomain pulumi.StringPtrInput
	// The resource tags.
	Tags pulumi.StringMapInput
	// The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
	Template pulumi.StringPtrInput
	// The resource type.
	Type pulumi.StringPtrInput
}

func (AppState) ElementType() reflect.Type {
	return reflect.TypeOf((*appState)(nil)).Elem()
}

type appArgs struct {
	// The display name of the application.
	DisplayName *string `pulumi:"displayName"`
	// The resource location.
	Location string `pulumi:"location"`
	// The name of the resource group that contains the IoT Central application.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The ARM resource name of the IoT Central application.
	ResourceName string `pulumi:"resourceName"`
	// A valid instance SKU.
	Sku AppSkuInfo `pulumi:"sku"`
	// The subdomain of the application.
	Subdomain *string `pulumi:"subdomain"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
	Template *string `pulumi:"template"`
}

// The set of arguments for constructing a App resource.
type AppArgs struct {
	// The display name of the application.
	DisplayName pulumi.StringPtrInput
	// The resource location.
	Location pulumi.StringInput
	// The name of the resource group that contains the IoT Central application.
	ResourceGroupName pulumi.StringInput
	// The ARM resource name of the IoT Central application.
	ResourceName pulumi.StringInput
	// A valid instance SKU.
	Sku AppSkuInfoInput
	// The subdomain of the application.
	Subdomain pulumi.StringPtrInput
	// The resource tags.
	Tags pulumi.StringMapInput
	// The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
	Template pulumi.StringPtrInput
}

func (AppArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*appArgs)(nil)).Elem()
}

type AppInput interface {
	pulumi.Input

	ToAppOutput() AppOutput
	ToAppOutputWithContext(ctx context.Context) AppOutput
}

func (*App) ElementType() reflect.Type {
	return reflect.TypeOf((*App)(nil))
}

func (i *App) ToAppOutput() AppOutput {
	return i.ToAppOutputWithContext(context.Background())
}

func (i *App) ToAppOutputWithContext(ctx context.Context) AppOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AppOutput)
}

type AppOutput struct {
	*pulumi.OutputState
}

func (AppOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*App)(nil))
}

func (o AppOutput) ToAppOutput() AppOutput {
	return o
}

func (o AppOutput) ToAppOutputWithContext(ctx context.Context) AppOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(AppOutput{})
}
