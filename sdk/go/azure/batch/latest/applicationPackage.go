// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An application package which represents a particular version of an application.
// Latest API Version: 2020-09-01.
type ApplicationPackage struct {
	pulumi.CustomResourceState

	// The ETag of the resource, used for concurrency statements.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The format of the application package, if the package is active.
	Format pulumi.StringOutput `pulumi:"format"`
	// The time at which the package was last activated, if the package is active.
	LastActivationTime pulumi.StringOutput `pulumi:"lastActivationTime"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The current state of the application package.
	State pulumi.StringOutput `pulumi:"state"`
	// The URL for the application package in Azure Storage.
	StorageUrl pulumi.StringOutput `pulumi:"storageUrl"`
	// The UTC time at which the Azure Storage URL will expire.
	StorageUrlExpiry pulumi.StringOutput `pulumi:"storageUrlExpiry"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewApplicationPackage registers a new resource with the given unique name, arguments, and options.
func NewApplicationPackage(ctx *pulumi.Context,
	name string, args *ApplicationPackageArgs, opts ...pulumi.ResourceOption) (*ApplicationPackage, error) {
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
	if args.VersionName == nil {
		return nil, errors.New("invalid value for required argument 'VersionName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:batch/v20151201:ApplicationPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20170101:ApplicationPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20170501:ApplicationPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20170901:ApplicationPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20181201:ApplicationPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20190401:ApplicationPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20190801:ApplicationPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20200301:ApplicationPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20200501:ApplicationPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20200901:ApplicationPackage"),
		},
	})
	opts = append(opts, aliases)
	var resource ApplicationPackage
	err := ctx.RegisterResource("azure-nextgen:batch/latest:ApplicationPackage", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApplicationPackage gets an existing ApplicationPackage resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApplicationPackage(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApplicationPackageState, opts ...pulumi.ResourceOption) (*ApplicationPackage, error) {
	var resource ApplicationPackage
	err := ctx.ReadResource("azure-nextgen:batch/latest:ApplicationPackage", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApplicationPackage resources.
type applicationPackageState struct {
	// The ETag of the resource, used for concurrency statements.
	Etag *string `pulumi:"etag"`
	// The format of the application package, if the package is active.
	Format *string `pulumi:"format"`
	// The time at which the package was last activated, if the package is active.
	LastActivationTime *string `pulumi:"lastActivationTime"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The current state of the application package.
	State *string `pulumi:"state"`
	// The URL for the application package in Azure Storage.
	StorageUrl *string `pulumi:"storageUrl"`
	// The UTC time at which the Azure Storage URL will expire.
	StorageUrlExpiry *string `pulumi:"storageUrlExpiry"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type ApplicationPackageState struct {
	// The ETag of the resource, used for concurrency statements.
	Etag pulumi.StringPtrInput
	// The format of the application package, if the package is active.
	Format pulumi.StringPtrInput
	// The time at which the package was last activated, if the package is active.
	LastActivationTime pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The current state of the application package.
	State pulumi.StringPtrInput
	// The URL for the application package in Azure Storage.
	StorageUrl pulumi.StringPtrInput
	// The UTC time at which the Azure Storage URL will expire.
	StorageUrlExpiry pulumi.StringPtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (ApplicationPackageState) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationPackageState)(nil)).Elem()
}

type applicationPackageArgs struct {
	// The name of the Batch account.
	AccountName string `pulumi:"accountName"`
	// The name of the application. This must be unique within the account.
	ApplicationName string `pulumi:"applicationName"`
	// The name of the resource group that contains the Batch account.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The version of the application.
	VersionName string `pulumi:"versionName"`
}

// The set of arguments for constructing a ApplicationPackage resource.
type ApplicationPackageArgs struct {
	// The name of the Batch account.
	AccountName pulumi.StringInput
	// The name of the application. This must be unique within the account.
	ApplicationName pulumi.StringInput
	// The name of the resource group that contains the Batch account.
	ResourceGroupName pulumi.StringInput
	// The version of the application.
	VersionName pulumi.StringInput
}

func (ApplicationPackageArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationPackageArgs)(nil)).Elem()
}

type ApplicationPackageInput interface {
	pulumi.Input

	ToApplicationPackageOutput() ApplicationPackageOutput
	ToApplicationPackageOutputWithContext(ctx context.Context) ApplicationPackageOutput
}

func (*ApplicationPackage) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationPackage)(nil))
}

func (i *ApplicationPackage) ToApplicationPackageOutput() ApplicationPackageOutput {
	return i.ToApplicationPackageOutputWithContext(context.Background())
}

func (i *ApplicationPackage) ToApplicationPackageOutputWithContext(ctx context.Context) ApplicationPackageOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApplicationPackageOutput)
}

type ApplicationPackageOutput struct {
	*pulumi.OutputState
}

func (ApplicationPackageOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationPackage)(nil))
}

func (o ApplicationPackageOutput) ToApplicationPackageOutput() ApplicationPackageOutput {
	return o
}

func (o ApplicationPackageOutput) ToApplicationPackageOutputWithContext(ctx context.Context) ApplicationPackageOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApplicationPackageOutput{})
}
