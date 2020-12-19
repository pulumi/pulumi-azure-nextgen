// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Latest API Version: 2019-04-01.
type Controller struct {
	pulumi.CustomResourceState

	// DNS name for accessing DataPlane services
	DataPlaneFqdn pulumi.StringOutput `pulumi:"dataPlaneFqdn"`
	// DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
	HostSuffix pulumi.StringOutput `pulumi:"hostSuffix"`
	// Region where the Azure resource is located.
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning state of the Azure Dev Spaces Controller.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Model representing SKU for Azure Dev Spaces Controller.
	Sku SkuResponseOutput `pulumi:"sku"`
	// Tags for the Azure resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// DNS of the target container host's API server
	TargetContainerHostApiServerFqdn pulumi.StringOutput `pulumi:"targetContainerHostApiServerFqdn"`
	// Credentials of the target container host (base64).
	TargetContainerHostCredentialsBase64 pulumi.StringOutput `pulumi:"targetContainerHostCredentialsBase64"`
	// Resource ID of the target container host
	TargetContainerHostResourceId pulumi.StringOutput `pulumi:"targetContainerHostResourceId"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewController registers a new resource with the given unique name, arguments, and options.
func NewController(ctx *pulumi.Context,
	name string, args *ControllerArgs, opts ...pulumi.ResourceOption) (*Controller, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Sku == nil {
		return nil, errors.New("invalid value for required argument 'Sku'")
	}
	if args.TargetContainerHostCredentialsBase64 == nil {
		return nil, errors.New("invalid value for required argument 'TargetContainerHostCredentialsBase64'")
	}
	if args.TargetContainerHostResourceId == nil {
		return nil, errors.New("invalid value for required argument 'TargetContainerHostResourceId'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:devspaces/v20190401:Controller"),
		},
	})
	opts = append(opts, aliases)
	var resource Controller
	err := ctx.RegisterResource("azure-nextgen:devspaces/latest:Controller", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetController gets an existing Controller resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetController(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ControllerState, opts ...pulumi.ResourceOption) (*Controller, error) {
	var resource Controller
	err := ctx.ReadResource("azure-nextgen:devspaces/latest:Controller", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Controller resources.
type controllerState struct {
	// DNS name for accessing DataPlane services
	DataPlaneFqdn *string `pulumi:"dataPlaneFqdn"`
	// DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
	HostSuffix *string `pulumi:"hostSuffix"`
	// Region where the Azure resource is located.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// Provisioning state of the Azure Dev Spaces Controller.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Model representing SKU for Azure Dev Spaces Controller.
	Sku *SkuResponse `pulumi:"sku"`
	// Tags for the Azure resource.
	Tags map[string]string `pulumi:"tags"`
	// DNS of the target container host's API server
	TargetContainerHostApiServerFqdn *string `pulumi:"targetContainerHostApiServerFqdn"`
	// Credentials of the target container host (base64).
	TargetContainerHostCredentialsBase64 *string `pulumi:"targetContainerHostCredentialsBase64"`
	// Resource ID of the target container host
	TargetContainerHostResourceId *string `pulumi:"targetContainerHostResourceId"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type ControllerState struct {
	// DNS name for accessing DataPlane services
	DataPlaneFqdn pulumi.StringPtrInput
	// DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
	HostSuffix pulumi.StringPtrInput
	// Region where the Azure resource is located.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// Provisioning state of the Azure Dev Spaces Controller.
	ProvisioningState pulumi.StringPtrInput
	// Model representing SKU for Azure Dev Spaces Controller.
	Sku SkuResponsePtrInput
	// Tags for the Azure resource.
	Tags pulumi.StringMapInput
	// DNS of the target container host's API server
	TargetContainerHostApiServerFqdn pulumi.StringPtrInput
	// Credentials of the target container host (base64).
	TargetContainerHostCredentialsBase64 pulumi.StringPtrInput
	// Resource ID of the target container host
	TargetContainerHostResourceId pulumi.StringPtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (ControllerState) ElementType() reflect.Type {
	return reflect.TypeOf((*controllerState)(nil)).Elem()
}

type controllerArgs struct {
	// Region where the Azure resource is located.
	Location string `pulumi:"location"`
	// Name of the resource.
	Name string `pulumi:"name"`
	// Resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Model representing SKU for Azure Dev Spaces Controller.
	Sku Sku `pulumi:"sku"`
	// Tags for the Azure resource.
	Tags map[string]string `pulumi:"tags"`
	// Credentials of the target container host (base64).
	TargetContainerHostCredentialsBase64 string `pulumi:"targetContainerHostCredentialsBase64"`
	// Resource ID of the target container host
	TargetContainerHostResourceId string `pulumi:"targetContainerHostResourceId"`
}

// The set of arguments for constructing a Controller resource.
type ControllerArgs struct {
	// Region where the Azure resource is located.
	Location pulumi.StringInput
	// Name of the resource.
	Name pulumi.StringInput
	// Resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
	// Model representing SKU for Azure Dev Spaces Controller.
	Sku SkuInput
	// Tags for the Azure resource.
	Tags pulumi.StringMapInput
	// Credentials of the target container host (base64).
	TargetContainerHostCredentialsBase64 pulumi.StringInput
	// Resource ID of the target container host
	TargetContainerHostResourceId pulumi.StringInput
}

func (ControllerArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*controllerArgs)(nil)).Elem()
}

type ControllerInput interface {
	pulumi.Input

	ToControllerOutput() ControllerOutput
	ToControllerOutputWithContext(ctx context.Context) ControllerOutput
}

func (*Controller) ElementType() reflect.Type {
	return reflect.TypeOf((*Controller)(nil))
}

func (i *Controller) ToControllerOutput() ControllerOutput {
	return i.ToControllerOutputWithContext(context.Background())
}

func (i *Controller) ToControllerOutputWithContext(ctx context.Context) ControllerOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ControllerOutput)
}

type ControllerOutput struct {
	*pulumi.OutputState
}

func (ControllerOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Controller)(nil))
}

func (o ControllerOutput) ToControllerOutput() ControllerOutput {
	return o
}

func (o ControllerOutput) ToControllerOutputWithContext(ctx context.Context) ControllerOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ControllerOutput{})
}
