// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// App resource payload
// Latest API Version: 2020-07-01.
type App struct {
	pulumi.CustomResourceState

	// The Managed Identity type of the app resource
	Identity ManagedIdentityPropertiesResponsePtrOutput `pulumi:"identity"`
	// The GEO location of the application, always the same with its parent resource
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Properties of the App resource
	Properties AppResourcePropertiesResponseOutput `pulumi:"properties"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewApp registers a new resource with the given unique name, arguments, and options.
func NewApp(ctx *pulumi.Context,
	name string, args *AppArgs, opts ...pulumi.ResourceOption) (*App, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AppName == nil {
		return nil, errors.New("invalid value for required argument 'AppName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:appplatform/v20190501preview:App"),
		},
		{
			Type: pulumi.String("azure-nextgen:appplatform/v20200701:App"),
		},
	})
	opts = append(opts, aliases)
	var resource App
	err := ctx.RegisterResource("azure-nextgen:appplatform/latest:App", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:appplatform/latest:App", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering App resources.
type appState struct {
	// The Managed Identity type of the app resource
	Identity *ManagedIdentityPropertiesResponse `pulumi:"identity"`
	// The GEO location of the application, always the same with its parent resource
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// Properties of the App resource
	Properties *AppResourcePropertiesResponse `pulumi:"properties"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type AppState struct {
	// The Managed Identity type of the app resource
	Identity ManagedIdentityPropertiesResponsePtrInput
	// The GEO location of the application, always the same with its parent resource
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// Properties of the App resource
	Properties AppResourcePropertiesResponsePtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (AppState) ElementType() reflect.Type {
	return reflect.TypeOf((*appState)(nil)).Elem()
}

type appArgs struct {
	// The name of the App resource.
	AppName string `pulumi:"appName"`
	// The Managed Identity type of the app resource
	Identity *ManagedIdentityProperties `pulumi:"identity"`
	// The GEO location of the application, always the same with its parent resource
	Location *string `pulumi:"location"`
	// Properties of the App resource
	Properties *AppResourceProperties `pulumi:"properties"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Service resource.
	ServiceName string `pulumi:"serviceName"`
}

// The set of arguments for constructing a App resource.
type AppArgs struct {
	// The name of the App resource.
	AppName pulumi.StringInput
	// The Managed Identity type of the app resource
	Identity ManagedIdentityPropertiesPtrInput
	// The GEO location of the application, always the same with its parent resource
	Location pulumi.StringPtrInput
	// Properties of the App resource
	Properties AppResourcePropertiesPtrInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the Service resource.
	ServiceName pulumi.StringInput
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
