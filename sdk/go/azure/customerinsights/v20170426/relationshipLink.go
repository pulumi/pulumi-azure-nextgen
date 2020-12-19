// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170426

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The relationship link resource format.
type RelationshipLink struct {
	pulumi.CustomResourceState

	// Localized descriptions for the Relationship Link.
	Description pulumi.StringMapOutput `pulumi:"description"`
	// Localized display name for the Relationship Link.
	DisplayName pulumi.StringMapOutput `pulumi:"displayName"`
	// The InteractionType associated with the Relationship Link.
	InteractionType pulumi.StringOutput `pulumi:"interactionType"`
	// The name of the Relationship Link.
	LinkName pulumi.StringOutput `pulumi:"linkName"`
	// The mappings between Interaction and Relationship fields.
	Mappings RelationshipLinkFieldMappingResponseArrayOutput `pulumi:"mappings"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The property references for the Profile of the Relationship.
	ProfilePropertyReferences ParticipantProfilePropertyReferenceResponseArrayOutput `pulumi:"profilePropertyReferences"`
	// Provisioning state.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The property references for the Related Profile of the Relationship.
	RelatedProfilePropertyReferences ParticipantProfilePropertyReferenceResponseArrayOutput `pulumi:"relatedProfilePropertyReferences"`
	// The relationship guid id.
	RelationshipGuidId pulumi.StringOutput `pulumi:"relationshipGuidId"`
	// The Relationship associated with the Link.
	RelationshipName pulumi.StringOutput `pulumi:"relationshipName"`
	// The hub name.
	TenantId pulumi.StringOutput `pulumi:"tenantId"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewRelationshipLink registers a new resource with the given unique name, arguments, and options.
func NewRelationshipLink(ctx *pulumi.Context,
	name string, args *RelationshipLinkArgs, opts ...pulumi.ResourceOption) (*RelationshipLink, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.HubName == nil {
		return nil, errors.New("invalid value for required argument 'HubName'")
	}
	if args.InteractionType == nil {
		return nil, errors.New("invalid value for required argument 'InteractionType'")
	}
	if args.ProfilePropertyReferences == nil {
		return nil, errors.New("invalid value for required argument 'ProfilePropertyReferences'")
	}
	if args.RelatedProfilePropertyReferences == nil {
		return nil, errors.New("invalid value for required argument 'RelatedProfilePropertyReferences'")
	}
	if args.RelationshipLinkName == nil {
		return nil, errors.New("invalid value for required argument 'RelationshipLinkName'")
	}
	if args.RelationshipName == nil {
		return nil, errors.New("invalid value for required argument 'RelationshipName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:customerinsights/latest:RelationshipLink"),
		},
		{
			Type: pulumi.String("azure-nextgen:customerinsights/v20170101:RelationshipLink"),
		},
	})
	opts = append(opts, aliases)
	var resource RelationshipLink
	err := ctx.RegisterResource("azure-nextgen:customerinsights/v20170426:RelationshipLink", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRelationshipLink gets an existing RelationshipLink resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRelationshipLink(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RelationshipLinkState, opts ...pulumi.ResourceOption) (*RelationshipLink, error) {
	var resource RelationshipLink
	err := ctx.ReadResource("azure-nextgen:customerinsights/v20170426:RelationshipLink", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering RelationshipLink resources.
type relationshipLinkState struct {
	// Localized descriptions for the Relationship Link.
	Description map[string]string `pulumi:"description"`
	// Localized display name for the Relationship Link.
	DisplayName map[string]string `pulumi:"displayName"`
	// The InteractionType associated with the Relationship Link.
	InteractionType *string `pulumi:"interactionType"`
	// The name of the Relationship Link.
	LinkName *string `pulumi:"linkName"`
	// The mappings between Interaction and Relationship fields.
	Mappings []RelationshipLinkFieldMappingResponse `pulumi:"mappings"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The property references for the Profile of the Relationship.
	ProfilePropertyReferences []ParticipantProfilePropertyReferenceResponse `pulumi:"profilePropertyReferences"`
	// Provisioning state.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The property references for the Related Profile of the Relationship.
	RelatedProfilePropertyReferences []ParticipantProfilePropertyReferenceResponse `pulumi:"relatedProfilePropertyReferences"`
	// The relationship guid id.
	RelationshipGuidId *string `pulumi:"relationshipGuidId"`
	// The Relationship associated with the Link.
	RelationshipName *string `pulumi:"relationshipName"`
	// The hub name.
	TenantId *string `pulumi:"tenantId"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type RelationshipLinkState struct {
	// Localized descriptions for the Relationship Link.
	Description pulumi.StringMapInput
	// Localized display name for the Relationship Link.
	DisplayName pulumi.StringMapInput
	// The InteractionType associated with the Relationship Link.
	InteractionType pulumi.StringPtrInput
	// The name of the Relationship Link.
	LinkName pulumi.StringPtrInput
	// The mappings between Interaction and Relationship fields.
	Mappings RelationshipLinkFieldMappingResponseArrayInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The property references for the Profile of the Relationship.
	ProfilePropertyReferences ParticipantProfilePropertyReferenceResponseArrayInput
	// Provisioning state.
	ProvisioningState pulumi.StringPtrInput
	// The property references for the Related Profile of the Relationship.
	RelatedProfilePropertyReferences ParticipantProfilePropertyReferenceResponseArrayInput
	// The relationship guid id.
	RelationshipGuidId pulumi.StringPtrInput
	// The Relationship associated with the Link.
	RelationshipName pulumi.StringPtrInput
	// The hub name.
	TenantId pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (RelationshipLinkState) ElementType() reflect.Type {
	return reflect.TypeOf((*relationshipLinkState)(nil)).Elem()
}

type relationshipLinkArgs struct {
	// Localized descriptions for the Relationship Link.
	Description map[string]string `pulumi:"description"`
	// Localized display name for the Relationship Link.
	DisplayName map[string]string `pulumi:"displayName"`
	// The name of the hub.
	HubName string `pulumi:"hubName"`
	// The InteractionType associated with the Relationship Link.
	InteractionType string `pulumi:"interactionType"`
	// The mappings between Interaction and Relationship fields.
	Mappings []RelationshipLinkFieldMapping `pulumi:"mappings"`
	// The property references for the Profile of the Relationship.
	ProfilePropertyReferences []ParticipantProfilePropertyReference `pulumi:"profilePropertyReferences"`
	// The property references for the Related Profile of the Relationship.
	RelatedProfilePropertyReferences []ParticipantProfilePropertyReference `pulumi:"relatedProfilePropertyReferences"`
	// The name of the relationship link.
	RelationshipLinkName string `pulumi:"relationshipLinkName"`
	// The Relationship associated with the Link.
	RelationshipName string `pulumi:"relationshipName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a RelationshipLink resource.
type RelationshipLinkArgs struct {
	// Localized descriptions for the Relationship Link.
	Description pulumi.StringMapInput
	// Localized display name for the Relationship Link.
	DisplayName pulumi.StringMapInput
	// The name of the hub.
	HubName pulumi.StringInput
	// The InteractionType associated with the Relationship Link.
	InteractionType pulumi.StringInput
	// The mappings between Interaction and Relationship fields.
	Mappings RelationshipLinkFieldMappingArrayInput
	// The property references for the Profile of the Relationship.
	ProfilePropertyReferences ParticipantProfilePropertyReferenceArrayInput
	// The property references for the Related Profile of the Relationship.
	RelatedProfilePropertyReferences ParticipantProfilePropertyReferenceArrayInput
	// The name of the relationship link.
	RelationshipLinkName pulumi.StringInput
	// The Relationship associated with the Link.
	RelationshipName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
}

func (RelationshipLinkArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*relationshipLinkArgs)(nil)).Elem()
}

type RelationshipLinkInput interface {
	pulumi.Input

	ToRelationshipLinkOutput() RelationshipLinkOutput
	ToRelationshipLinkOutputWithContext(ctx context.Context) RelationshipLinkOutput
}

func (*RelationshipLink) ElementType() reflect.Type {
	return reflect.TypeOf((*RelationshipLink)(nil))
}

func (i *RelationshipLink) ToRelationshipLinkOutput() RelationshipLinkOutput {
	return i.ToRelationshipLinkOutputWithContext(context.Background())
}

func (i *RelationshipLink) ToRelationshipLinkOutputWithContext(ctx context.Context) RelationshipLinkOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RelationshipLinkOutput)
}

type RelationshipLinkOutput struct {
	*pulumi.OutputState
}

func (RelationshipLinkOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*RelationshipLink)(nil))
}

func (o RelationshipLinkOutput) ToRelationshipLinkOutput() RelationshipLinkOutput {
	return o
}

func (o RelationshipLinkOutput) ToRelationshipLinkOutputWithContext(ctx context.Context) RelationshipLinkOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(RelationshipLinkOutput{})
}
