// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Contains information about an application in a Batch account.
type Application struct {
	pulumi.CustomResourceState

	// A value indicating whether packages within the application may be overwritten using the same version string.
	AllowUpdates pulumi.BoolPtrOutput `pulumi:"allowUpdates"`
	// The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
	DefaultVersion pulumi.StringPtrOutput `pulumi:"defaultVersion"`
	// The display name for the application.
	DisplayName pulumi.StringPtrOutput `pulumi:"displayName"`
	// The ETag of the resource, used for concurrency statements.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewApplication registers a new resource with the given unique name, arguments, and options.
func NewApplication(ctx *pulumi.Context,
	name string, args *ApplicationArgs, opts ...pulumi.ResourceOption) (*Application, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.ApplicationName == nil {
		return nil, errors.New("invalid value for required argument 'ApplicationName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:batch/latest:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20151201:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20170101:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20170501:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20170901:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20190401:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20190801:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20200301:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20200501:Application"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20200901:Application"),
		},
	})
	opts = append(opts, aliases)
	var resource Application
	err := ctx.RegisterResource("azure-nextgen:batch/v20181201:Application", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApplication gets an existing Application resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApplication(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApplicationState, opts ...pulumi.ResourceOption) (*Application, error) {
	var resource Application
	err := ctx.ReadResource("azure-nextgen:batch/v20181201:Application", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Application resources.
type applicationState struct {
	// A value indicating whether packages within the application may be overwritten using the same version string.
	AllowUpdates *bool `pulumi:"allowUpdates"`
	// The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
	DefaultVersion *string `pulumi:"defaultVersion"`
	// The display name for the application.
	DisplayName *string `pulumi:"displayName"`
	// The ETag of the resource, used for concurrency statements.
	Etag *string `pulumi:"etag"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type ApplicationState struct {
	// A value indicating whether packages within the application may be overwritten using the same version string.
	AllowUpdates pulumi.BoolPtrInput
	// The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
	DefaultVersion pulumi.StringPtrInput
	// The display name for the application.
	DisplayName pulumi.StringPtrInput
	// The ETag of the resource, used for concurrency statements.
	Etag pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (ApplicationState) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationState)(nil)).Elem()
}

type applicationArgs struct {
	// The name of the Batch account.
	AccountName string `pulumi:"accountName"`
	// A value indicating whether packages within the application may be overwritten using the same version string.
	AllowUpdates *bool `pulumi:"allowUpdates"`
	// The name of the application. This must be unique within the account.
	ApplicationName string `pulumi:"applicationName"`
	// The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
	DefaultVersion *string `pulumi:"defaultVersion"`
	// The display name for the application.
	DisplayName *string `pulumi:"displayName"`
	// The name of the resource group that contains the Batch account.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a Application resource.
type ApplicationArgs struct {
	// The name of the Batch account.
	AccountName pulumi.StringInput
	// A value indicating whether packages within the application may be overwritten using the same version string.
	AllowUpdates pulumi.BoolPtrInput
	// The name of the application. This must be unique within the account.
	ApplicationName pulumi.StringInput
	// The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
	DefaultVersion pulumi.StringPtrInput
	// The display name for the application.
	DisplayName pulumi.StringPtrInput
	// The name of the resource group that contains the Batch account.
	ResourceGroupName pulumi.StringInput
}

func (ApplicationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationArgs)(nil)).Elem()
}

type ApplicationInput interface {
	pulumi.Input

	ToApplicationOutput() ApplicationOutput
	ToApplicationOutputWithContext(ctx context.Context) ApplicationOutput
}

func (Application) ElementType() reflect.Type {
	return reflect.TypeOf((*Application)(nil)).Elem()
}

func (i Application) ToApplicationOutput() ApplicationOutput {
	return i.ToApplicationOutputWithContext(context.Background())
}

func (i Application) ToApplicationOutputWithContext(ctx context.Context) ApplicationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApplicationOutput)
}

type ApplicationOutput struct {
	*pulumi.OutputState
}

func (ApplicationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationOutput)(nil)).Elem()
}

func (o ApplicationOutput) ToApplicationOutput() ApplicationOutput {
	return o
}

func (o ApplicationOutput) ToApplicationOutputWithContext(ctx context.Context) ApplicationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApplicationOutput{})
}
