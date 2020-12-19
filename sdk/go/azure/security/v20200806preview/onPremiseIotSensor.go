// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200806preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// On-premise IoT sensor
type OnPremiseIotSensor struct {
	pulumi.CustomResourceState

	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewOnPremiseIotSensor registers a new resource with the given unique name, arguments, and options.
func NewOnPremiseIotSensor(ctx *pulumi.Context,
	name string, args *OnPremiseIotSensorArgs, opts ...pulumi.ResourceOption) (*OnPremiseIotSensor, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.OnPremiseIotSensorName == nil {
		return nil, errors.New("invalid value for required argument 'OnPremiseIotSensorName'")
	}
	var resource OnPremiseIotSensor
	err := ctx.RegisterResource("azure-nextgen:security/v20200806preview:OnPremiseIotSensor", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetOnPremiseIotSensor gets an existing OnPremiseIotSensor resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetOnPremiseIotSensor(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *OnPremiseIotSensorState, opts ...pulumi.ResourceOption) (*OnPremiseIotSensor, error) {
	var resource OnPremiseIotSensor
	err := ctx.ReadResource("azure-nextgen:security/v20200806preview:OnPremiseIotSensor", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering OnPremiseIotSensor resources.
type onPremiseIotSensorState struct {
	// Resource name
	Name *string `pulumi:"name"`
	// Resource type
	Type *string `pulumi:"type"`
}

type OnPremiseIotSensorState struct {
	// Resource name
	Name pulumi.StringPtrInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (OnPremiseIotSensorState) ElementType() reflect.Type {
	return reflect.TypeOf((*onPremiseIotSensorState)(nil)).Elem()
}

type onPremiseIotSensorArgs struct {
	// Name of the on-premise IoT sensor
	OnPremiseIotSensorName string `pulumi:"onPremiseIotSensorName"`
}

// The set of arguments for constructing a OnPremiseIotSensor resource.
type OnPremiseIotSensorArgs struct {
	// Name of the on-premise IoT sensor
	OnPremiseIotSensorName pulumi.StringInput
}

func (OnPremiseIotSensorArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*onPremiseIotSensorArgs)(nil)).Elem()
}

type OnPremiseIotSensorInput interface {
	pulumi.Input

	ToOnPremiseIotSensorOutput() OnPremiseIotSensorOutput
	ToOnPremiseIotSensorOutputWithContext(ctx context.Context) OnPremiseIotSensorOutput
}

func (*OnPremiseIotSensor) ElementType() reflect.Type {
	return reflect.TypeOf((*OnPremiseIotSensor)(nil))
}

func (i *OnPremiseIotSensor) ToOnPremiseIotSensorOutput() OnPremiseIotSensorOutput {
	return i.ToOnPremiseIotSensorOutputWithContext(context.Background())
}

func (i *OnPremiseIotSensor) ToOnPremiseIotSensorOutputWithContext(ctx context.Context) OnPremiseIotSensorOutput {
	return pulumi.ToOutputWithContext(ctx, i).(OnPremiseIotSensorOutput)
}

type OnPremiseIotSensorOutput struct {
	*pulumi.OutputState
}

func (OnPremiseIotSensorOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*OnPremiseIotSensor)(nil))
}

func (o OnPremiseIotSensorOutput) ToOnPremiseIotSensorOutput() OnPremiseIotSensorOutput {
	return o
}

func (o OnPremiseIotSensorOutput) ToOnPremiseIotSensorOutputWithContext(ctx context.Context) OnPremiseIotSensorOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(OnPremiseIotSensorOutput{})
}
