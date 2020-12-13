// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An application type version resource for the specified application type name resource.
type ApplicationTypeVersion struct {
	pulumi.CustomResourceState

	// The URL to the application package
	AppPackageUrl pulumi.StringOutput `pulumi:"appPackageUrl"`
	// List of application type parameters that can be overridden when creating or updating the application.
	DefaultParameterList pulumi.StringMapOutput `pulumi:"defaultParameterList"`
	// Azure resource etag.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// It will be deprecated in New API, resource location depends on the parent resource.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Azure resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The current deployment or provisioning state, which only appears in the response
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Azure resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Azure resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewApplicationTypeVersion registers a new resource with the given unique name, arguments, and options.
func NewApplicationTypeVersion(ctx *pulumi.Context,
	name string, args *ApplicationTypeVersionArgs, opts ...pulumi.ResourceOption) (*ApplicationTypeVersion, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AppPackageUrl == nil {
		return nil, errors.New("invalid value for required argument 'AppPackageUrl'")
	}
	if args.ApplicationTypeName == nil {
		return nil, errors.New("invalid value for required argument 'ApplicationTypeName'")
	}
	if args.ClusterName == nil {
		return nil, errors.New("invalid value for required argument 'ClusterName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Version == nil {
		return nil, errors.New("invalid value for required argument 'Version'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:servicefabric/latest:ApplicationTypeVersion"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicefabric/v20170701preview:ApplicationTypeVersion"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicefabric/v20190301:ApplicationTypeVersion"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicefabric/v20190301preview:ApplicationTypeVersion"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicefabric/v20190601preview:ApplicationTypeVersion"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicefabric/v20191101preview:ApplicationTypeVersion"),
		},
	})
	opts = append(opts, aliases)
	var resource ApplicationTypeVersion
	err := ctx.RegisterResource("azure-nextgen:servicefabric/v20200301:ApplicationTypeVersion", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApplicationTypeVersion gets an existing ApplicationTypeVersion resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApplicationTypeVersion(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApplicationTypeVersionState, opts ...pulumi.ResourceOption) (*ApplicationTypeVersion, error) {
	var resource ApplicationTypeVersion
	err := ctx.ReadResource("azure-nextgen:servicefabric/v20200301:ApplicationTypeVersion", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApplicationTypeVersion resources.
type applicationTypeVersionState struct {
	// The URL to the application package
	AppPackageUrl *string `pulumi:"appPackageUrl"`
	// List of application type parameters that can be overridden when creating or updating the application.
	DefaultParameterList map[string]string `pulumi:"defaultParameterList"`
	// Azure resource etag.
	Etag *string `pulumi:"etag"`
	// It will be deprecated in New API, resource location depends on the parent resource.
	Location *string `pulumi:"location"`
	// Azure resource name.
	Name *string `pulumi:"name"`
	// The current deployment or provisioning state, which only appears in the response
	ProvisioningState *string `pulumi:"provisioningState"`
	// Azure resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Azure resource type.
	Type *string `pulumi:"type"`
}

type ApplicationTypeVersionState struct {
	// The URL to the application package
	AppPackageUrl pulumi.StringPtrInput
	// List of application type parameters that can be overridden when creating or updating the application.
	DefaultParameterList pulumi.StringMapInput
	// Azure resource etag.
	Etag pulumi.StringPtrInput
	// It will be deprecated in New API, resource location depends on the parent resource.
	Location pulumi.StringPtrInput
	// Azure resource name.
	Name pulumi.StringPtrInput
	// The current deployment or provisioning state, which only appears in the response
	ProvisioningState pulumi.StringPtrInput
	// Azure resource tags.
	Tags pulumi.StringMapInput
	// Azure resource type.
	Type pulumi.StringPtrInput
}

func (ApplicationTypeVersionState) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationTypeVersionState)(nil)).Elem()
}

type applicationTypeVersionArgs struct {
	// The URL to the application package
	AppPackageUrl string `pulumi:"appPackageUrl"`
	// The name of the application type name resource.
	ApplicationTypeName string `pulumi:"applicationTypeName"`
	// The name of the cluster resource.
	ClusterName string `pulumi:"clusterName"`
	// It will be deprecated in New API, resource location depends on the parent resource.
	Location *string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Azure resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The application type version.
	Version string `pulumi:"version"`
}

// The set of arguments for constructing a ApplicationTypeVersion resource.
type ApplicationTypeVersionArgs struct {
	// The URL to the application package
	AppPackageUrl pulumi.StringInput
	// The name of the application type name resource.
	ApplicationTypeName pulumi.StringInput
	// The name of the cluster resource.
	ClusterName pulumi.StringInput
	// It will be deprecated in New API, resource location depends on the parent resource.
	Location pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Azure resource tags.
	Tags pulumi.StringMapInput
	// The application type version.
	Version pulumi.StringInput
}

func (ApplicationTypeVersionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationTypeVersionArgs)(nil)).Elem()
}

type ApplicationTypeVersionInput interface {
	pulumi.Input

	ToApplicationTypeVersionOutput() ApplicationTypeVersionOutput
	ToApplicationTypeVersionOutputWithContext(ctx context.Context) ApplicationTypeVersionOutput
}

func (ApplicationTypeVersion) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationTypeVersion)(nil)).Elem()
}

func (i ApplicationTypeVersion) ToApplicationTypeVersionOutput() ApplicationTypeVersionOutput {
	return i.ToApplicationTypeVersionOutputWithContext(context.Background())
}

func (i ApplicationTypeVersion) ToApplicationTypeVersionOutputWithContext(ctx context.Context) ApplicationTypeVersionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApplicationTypeVersionOutput)
}

type ApplicationTypeVersionOutput struct {
	*pulumi.OutputState
}

func (ApplicationTypeVersionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationTypeVersionOutput)(nil)).Elem()
}

func (o ApplicationTypeVersionOutput) ToApplicationTypeVersionOutput() ApplicationTypeVersionOutput {
	return o
}

func (o ApplicationTypeVersionOutput) ToApplicationTypeVersionOutputWithContext(ctx context.Context) ApplicationTypeVersionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApplicationTypeVersionOutput{})
}
