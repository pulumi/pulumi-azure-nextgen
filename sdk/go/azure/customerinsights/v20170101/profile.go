// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170101

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The profile resource format.
type Profile struct {
	pulumi.CustomResourceState

	// The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
	ApiEntitySetName pulumi.StringPtrOutput `pulumi:"apiEntitySetName"`
	// The attributes for the Type.
	Attributes pulumi.StringArrayMapOutput `pulumi:"attributes"`
	// Localized descriptions for the property.
	Description pulumi.StringMapOutput `pulumi:"description"`
	// Localized display names for the property.
	DisplayName pulumi.StringMapOutput `pulumi:"displayName"`
	// Type of entity.
	EntityType pulumi.StringPtrOutput `pulumi:"entityType"`
	// The properties of the Profile.
	Fields PropertyDefinitionResponseArrayOutput `pulumi:"fields"`
	// The instance count.
	InstancesCount pulumi.IntPtrOutput `pulumi:"instancesCount"`
	// Large Image associated with the Property or EntityType.
	LargeImage pulumi.StringPtrOutput `pulumi:"largeImage"`
	// The last changed time for the type definition.
	LastChangedUtc pulumi.StringOutput `pulumi:"lastChangedUtc"`
	// Any custom localized attributes for the Type.
	LocalizedAttributes pulumi.StringMapMapOutput `pulumi:"localizedAttributes"`
	// Medium Image associated with the Property or EntityType.
	MediumImage pulumi.StringPtrOutput `pulumi:"mediumImage"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning state.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The schema org link. This helps ACI identify and suggest semantic models.
	SchemaItemTypeLink pulumi.StringPtrOutput `pulumi:"schemaItemTypeLink"`
	// Small Image associated with the Property or EntityType.
	SmallImage pulumi.StringPtrOutput `pulumi:"smallImage"`
	// The strong IDs.
	StrongIds StrongIdResponseArrayOutput `pulumi:"strongIds"`
	// The hub name.
	TenantId pulumi.StringOutput `pulumi:"tenantId"`
	// The timestamp property name. Represents the time when the interaction or profile update happened.
	TimestampFieldName pulumi.StringPtrOutput `pulumi:"timestampFieldName"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The name of the entity.
	TypeName pulumi.StringPtrOutput `pulumi:"typeName"`
}

// NewProfile registers a new resource with the given unique name, arguments, and options.
func NewProfile(ctx *pulumi.Context,
	name string, args *ProfileArgs, opts ...pulumi.ResourceOption) (*Profile, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.HubName == nil {
		return nil, errors.New("invalid value for required argument 'HubName'")
	}
	if args.ProfileName == nil {
		return nil, errors.New("invalid value for required argument 'ProfileName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:customerinsights/latest:Profile"),
		},
		{
			Type: pulumi.String("azure-nextgen:customerinsights/v20170426:Profile"),
		},
	})
	opts = append(opts, aliases)
	var resource Profile
	err := ctx.RegisterResource("azure-nextgen:customerinsights/v20170101:Profile", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetProfile gets an existing Profile resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProfile(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ProfileState, opts ...pulumi.ResourceOption) (*Profile, error) {
	var resource Profile
	err := ctx.ReadResource("azure-nextgen:customerinsights/v20170101:Profile", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Profile resources.
type profileState struct {
	// The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
	ApiEntitySetName *string `pulumi:"apiEntitySetName"`
	// The attributes for the Type.
	Attributes map[string][]string `pulumi:"attributes"`
	// Localized descriptions for the property.
	Description map[string]string `pulumi:"description"`
	// Localized display names for the property.
	DisplayName map[string]string `pulumi:"displayName"`
	// Type of entity.
	EntityType *string `pulumi:"entityType"`
	// The properties of the Profile.
	Fields []PropertyDefinitionResponse `pulumi:"fields"`
	// The instance count.
	InstancesCount *int `pulumi:"instancesCount"`
	// Large Image associated with the Property or EntityType.
	LargeImage *string `pulumi:"largeImage"`
	// The last changed time for the type definition.
	LastChangedUtc *string `pulumi:"lastChangedUtc"`
	// Any custom localized attributes for the Type.
	LocalizedAttributes map[string]map[string]string `pulumi:"localizedAttributes"`
	// Medium Image associated with the Property or EntityType.
	MediumImage *string `pulumi:"mediumImage"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Provisioning state.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The schema org link. This helps ACI identify and suggest semantic models.
	SchemaItemTypeLink *string `pulumi:"schemaItemTypeLink"`
	// Small Image associated with the Property or EntityType.
	SmallImage *string `pulumi:"smallImage"`
	// The strong IDs.
	StrongIds []StrongIdResponse `pulumi:"strongIds"`
	// The hub name.
	TenantId *string `pulumi:"tenantId"`
	// The timestamp property name. Represents the time when the interaction or profile update happened.
	TimestampFieldName *string `pulumi:"timestampFieldName"`
	// Resource type.
	Type *string `pulumi:"type"`
	// The name of the entity.
	TypeName *string `pulumi:"typeName"`
}

type ProfileState struct {
	// The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
	ApiEntitySetName pulumi.StringPtrInput
	// The attributes for the Type.
	Attributes pulumi.StringArrayMapInput
	// Localized descriptions for the property.
	Description pulumi.StringMapInput
	// Localized display names for the property.
	DisplayName pulumi.StringMapInput
	// Type of entity.
	EntityType pulumi.StringPtrInput
	// The properties of the Profile.
	Fields PropertyDefinitionResponseArrayInput
	// The instance count.
	InstancesCount pulumi.IntPtrInput
	// Large Image associated with the Property or EntityType.
	LargeImage pulumi.StringPtrInput
	// The last changed time for the type definition.
	LastChangedUtc pulumi.StringPtrInput
	// Any custom localized attributes for the Type.
	LocalizedAttributes pulumi.StringMapMapInput
	// Medium Image associated with the Property or EntityType.
	MediumImage pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Provisioning state.
	ProvisioningState pulumi.StringPtrInput
	// The schema org link. This helps ACI identify and suggest semantic models.
	SchemaItemTypeLink pulumi.StringPtrInput
	// Small Image associated with the Property or EntityType.
	SmallImage pulumi.StringPtrInput
	// The strong IDs.
	StrongIds StrongIdResponseArrayInput
	// The hub name.
	TenantId pulumi.StringPtrInput
	// The timestamp property name. Represents the time when the interaction or profile update happened.
	TimestampFieldName pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// The name of the entity.
	TypeName pulumi.StringPtrInput
}

func (ProfileState) ElementType() reflect.Type {
	return reflect.TypeOf((*profileState)(nil)).Elem()
}

type profileArgs struct {
	// The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
	ApiEntitySetName *string `pulumi:"apiEntitySetName"`
	// The attributes for the Type.
	Attributes map[string][]string `pulumi:"attributes"`
	// Localized descriptions for the property.
	Description map[string]string `pulumi:"description"`
	// Localized display names for the property.
	DisplayName map[string]string `pulumi:"displayName"`
	// Type of entity.
	EntityType *string `pulumi:"entityType"`
	// The properties of the Profile.
	Fields []PropertyDefinition `pulumi:"fields"`
	// The name of the hub.
	HubName string `pulumi:"hubName"`
	// The instance count.
	InstancesCount *int `pulumi:"instancesCount"`
	// Large Image associated with the Property or EntityType.
	LargeImage *string `pulumi:"largeImage"`
	// Any custom localized attributes for the Type.
	LocalizedAttributes map[string]map[string]string `pulumi:"localizedAttributes"`
	// Medium Image associated with the Property or EntityType.
	MediumImage *string `pulumi:"mediumImage"`
	// The name of the profile.
	ProfileName string `pulumi:"profileName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The schema org link. This helps ACI identify and suggest semantic models.
	SchemaItemTypeLink *string `pulumi:"schemaItemTypeLink"`
	// Small Image associated with the Property or EntityType.
	SmallImage *string `pulumi:"smallImage"`
	// The strong IDs.
	StrongIds []StrongId `pulumi:"strongIds"`
	// The timestamp property name. Represents the time when the interaction or profile update happened.
	TimestampFieldName *string `pulumi:"timestampFieldName"`
	// The name of the entity.
	TypeName *string `pulumi:"typeName"`
}

// The set of arguments for constructing a Profile resource.
type ProfileArgs struct {
	// The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
	ApiEntitySetName pulumi.StringPtrInput
	// The attributes for the Type.
	Attributes pulumi.StringArrayMapInput
	// Localized descriptions for the property.
	Description pulumi.StringMapInput
	// Localized display names for the property.
	DisplayName pulumi.StringMapInput
	// Type of entity.
	EntityType *EntityTypes
	// The properties of the Profile.
	Fields PropertyDefinitionArrayInput
	// The name of the hub.
	HubName pulumi.StringInput
	// The instance count.
	InstancesCount pulumi.IntPtrInput
	// Large Image associated with the Property or EntityType.
	LargeImage pulumi.StringPtrInput
	// Any custom localized attributes for the Type.
	LocalizedAttributes pulumi.StringMapMapInput
	// Medium Image associated with the Property or EntityType.
	MediumImage pulumi.StringPtrInput
	// The name of the profile.
	ProfileName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The schema org link. This helps ACI identify and suggest semantic models.
	SchemaItemTypeLink pulumi.StringPtrInput
	// Small Image associated with the Property or EntityType.
	SmallImage pulumi.StringPtrInput
	// The strong IDs.
	StrongIds StrongIdArrayInput
	// The timestamp property name. Represents the time when the interaction or profile update happened.
	TimestampFieldName pulumi.StringPtrInput
	// The name of the entity.
	TypeName pulumi.StringPtrInput
}

func (ProfileArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*profileArgs)(nil)).Elem()
}

type ProfileInput interface {
	pulumi.Input

	ToProfileOutput() ProfileOutput
	ToProfileOutputWithContext(ctx context.Context) ProfileOutput
}

func (*Profile) ElementType() reflect.Type {
	return reflect.TypeOf((*Profile)(nil))
}

func (i *Profile) ToProfileOutput() ProfileOutput {
	return i.ToProfileOutputWithContext(context.Background())
}

func (i *Profile) ToProfileOutputWithContext(ctx context.Context) ProfileOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProfileOutput)
}

type ProfileOutput struct {
	*pulumi.OutputState
}

func (ProfileOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Profile)(nil))
}

func (o ProfileOutput) ToProfileOutput() ProfileOutput {
	return o
}

func (o ProfileOutput) ToProfileOutputWithContext(ctx context.Context) ProfileOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ProfileOutput{})
}
