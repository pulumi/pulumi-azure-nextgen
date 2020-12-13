// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181001

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Response to get user settings
type UserSettingsWithLocation struct {
	pulumi.CustomResourceState

	// The cloud shell user settings properties.
	Properties UserPropertiesResponseOutput `pulumi:"properties"`
}

// NewUserSettingsWithLocation registers a new resource with the given unique name, arguments, and options.
func NewUserSettingsWithLocation(ctx *pulumi.Context,
	name string, args *UserSettingsWithLocationArgs, opts ...pulumi.ResourceOption) (*UserSettingsWithLocation, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.Properties == nil {
		return nil, errors.New("invalid value for required argument 'Properties'")
	}
	if args.UserSettingsName == nil {
		return nil, errors.New("invalid value for required argument 'UserSettingsName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:portal/latest:UserSettingsWithLocation"),
		},
	})
	opts = append(opts, aliases)
	var resource UserSettingsWithLocation
	err := ctx.RegisterResource("azure-nextgen:portal/v20181001:UserSettingsWithLocation", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetUserSettingsWithLocation gets an existing UserSettingsWithLocation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetUserSettingsWithLocation(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *UserSettingsWithLocationState, opts ...pulumi.ResourceOption) (*UserSettingsWithLocation, error) {
	var resource UserSettingsWithLocation
	err := ctx.ReadResource("azure-nextgen:portal/v20181001:UserSettingsWithLocation", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering UserSettingsWithLocation resources.
type userSettingsWithLocationState struct {
	// The cloud shell user settings properties.
	Properties *UserPropertiesResponse `pulumi:"properties"`
}

type UserSettingsWithLocationState struct {
	// The cloud shell user settings properties.
	Properties UserPropertiesResponsePtrInput
}

func (UserSettingsWithLocationState) ElementType() reflect.Type {
	return reflect.TypeOf((*userSettingsWithLocationState)(nil)).Elem()
}

type userSettingsWithLocationArgs struct {
	// The provider location
	Location string `pulumi:"location"`
	// The cloud shell user settings properties.
	Properties UserProperties `pulumi:"properties"`
	// The name of the user settings
	UserSettingsName string `pulumi:"userSettingsName"`
}

// The set of arguments for constructing a UserSettingsWithLocation resource.
type UserSettingsWithLocationArgs struct {
	// The provider location
	Location pulumi.StringInput
	// The cloud shell user settings properties.
	Properties UserPropertiesInput
	// The name of the user settings
	UserSettingsName pulumi.StringInput
}

func (UserSettingsWithLocationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*userSettingsWithLocationArgs)(nil)).Elem()
}

type UserSettingsWithLocationInput interface {
	pulumi.Input

	ToUserSettingsWithLocationOutput() UserSettingsWithLocationOutput
	ToUserSettingsWithLocationOutputWithContext(ctx context.Context) UserSettingsWithLocationOutput
}

func (UserSettingsWithLocation) ElementType() reflect.Type {
	return reflect.TypeOf((*UserSettingsWithLocation)(nil)).Elem()
}

func (i UserSettingsWithLocation) ToUserSettingsWithLocationOutput() UserSettingsWithLocationOutput {
	return i.ToUserSettingsWithLocationOutputWithContext(context.Background())
}

func (i UserSettingsWithLocation) ToUserSettingsWithLocationOutputWithContext(ctx context.Context) UserSettingsWithLocationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(UserSettingsWithLocationOutput)
}

type UserSettingsWithLocationOutput struct {
	*pulumi.OutputState
}

func (UserSettingsWithLocationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*UserSettingsWithLocationOutput)(nil)).Elem()
}

func (o UserSettingsWithLocationOutput) ToUserSettingsWithLocationOutput() UserSettingsWithLocationOutput {
	return o
}

func (o UserSettingsWithLocationOutput) ToUserSettingsWithLocationOutputWithContext(ctx context.Context) UserSettingsWithLocationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(UserSettingsWithLocationOutput{})
}
