// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171001

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An application security group in a resource group.
type ApplicationSecurityGroup struct {
	pulumi.CustomResourceState

	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
	ResourceGuid pulumi.StringOutput `pulumi:"resourceGuid"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewApplicationSecurityGroup registers a new resource with the given unique name, arguments, and options.
func NewApplicationSecurityGroup(ctx *pulumi.Context,
	name string, args *ApplicationSecurityGroupArgs, opts ...pulumi.ResourceOption) (*ApplicationSecurityGroup, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApplicationSecurityGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ApplicationSecurityGroupName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:ApplicationSecurityGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:ApplicationSecurityGroup"),
		},
	})
	opts = append(opts, aliases)
	var resource ApplicationSecurityGroup
	err := ctx.RegisterResource("azure-nextgen:network/v20171001:ApplicationSecurityGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApplicationSecurityGroup gets an existing ApplicationSecurityGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApplicationSecurityGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApplicationSecurityGroupState, opts ...pulumi.ResourceOption) (*ApplicationSecurityGroup, error) {
	var resource ApplicationSecurityGroup
	err := ctx.ReadResource("azure-nextgen:network/v20171001:ApplicationSecurityGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApplicationSecurityGroup resources.
type applicationSecurityGroupState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type ApplicationSecurityGroupState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
	ResourceGuid pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (ApplicationSecurityGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationSecurityGroupState)(nil)).Elem()
}

type applicationSecurityGroupArgs struct {
	// The name of the application security group.
	ApplicationSecurityGroupName string `pulumi:"applicationSecurityGroupName"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a ApplicationSecurityGroup resource.
type ApplicationSecurityGroupArgs struct {
	// The name of the application security group.
	ApplicationSecurityGroupName pulumi.StringInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (ApplicationSecurityGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationSecurityGroupArgs)(nil)).Elem()
}

type ApplicationSecurityGroupInput interface {
	pulumi.Input

	ToApplicationSecurityGroupOutput() ApplicationSecurityGroupOutput
	ToApplicationSecurityGroupOutputWithContext(ctx context.Context) ApplicationSecurityGroupOutput
}

func (*ApplicationSecurityGroup) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationSecurityGroup)(nil))
}

func (i *ApplicationSecurityGroup) ToApplicationSecurityGroupOutput() ApplicationSecurityGroupOutput {
	return i.ToApplicationSecurityGroupOutputWithContext(context.Background())
}

func (i *ApplicationSecurityGroup) ToApplicationSecurityGroupOutputWithContext(ctx context.Context) ApplicationSecurityGroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApplicationSecurityGroupOutput)
}

type ApplicationSecurityGroupOutput struct {
	*pulumi.OutputState
}

func (ApplicationSecurityGroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationSecurityGroup)(nil))
}

func (o ApplicationSecurityGroupOutput) ToApplicationSecurityGroupOutput() ApplicationSecurityGroupOutput {
	return o
}

func (o ApplicationSecurityGroupOutput) ToApplicationSecurityGroupOutputWithContext(ctx context.Context) ApplicationSecurityGroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApplicationSecurityGroupOutput{})
}
