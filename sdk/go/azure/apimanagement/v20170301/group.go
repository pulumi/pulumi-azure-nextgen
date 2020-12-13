// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Contract details.
type Group struct {
	pulumi.CustomResourceState

	// true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
	BuiltIn pulumi.BoolOutput `pulumi:"builtIn"`
	// Group description. Can contain HTML formatting tags.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Group name.
	DisplayName pulumi.StringOutput `pulumi:"displayName"`
	// For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
	ExternalId pulumi.StringPtrOutput `pulumi:"externalId"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewGroup registers a new resource with the given unique name, arguments, and options.
func NewGroup(ctx *pulumi.Context,
	name string, args *GroupArgs, opts ...pulumi.ResourceOption) (*Group, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DisplayName == nil {
		return nil, errors.New("invalid value for required argument 'DisplayName'")
	}
	if args.GroupId == nil {
		return nil, errors.New("invalid value for required argument 'GroupId'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:Group"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20160707:Group"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20161010:Group"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:Group"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:Group"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:Group"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:Group"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:Group"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:Group"),
		},
	})
	opts = append(opts, aliases)
	var resource Group
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20170301:Group", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGroup gets an existing Group resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GroupState, opts ...pulumi.ResourceOption) (*Group, error) {
	var resource Group
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20170301:Group", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Group resources.
type groupState struct {
	// true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
	BuiltIn *bool `pulumi:"builtIn"`
	// Group description. Can contain HTML formatting tags.
	Description *string `pulumi:"description"`
	// Group name.
	DisplayName *string `pulumi:"displayName"`
	// For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
	ExternalId *string `pulumi:"externalId"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
}

type GroupState struct {
	// true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
	BuiltIn pulumi.BoolPtrInput
	// Group description. Can contain HTML formatting tags.
	Description pulumi.StringPtrInput
	// Group name.
	DisplayName pulumi.StringPtrInput
	// For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
	ExternalId pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
}

func (GroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*groupState)(nil)).Elem()
}

type groupArgs struct {
	// Group description.
	Description *string `pulumi:"description"`
	// Group name.
	DisplayName string `pulumi:"displayName"`
	// Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
	ExternalId *string `pulumi:"externalId"`
	// Group identifier. Must be unique in the current API Management service instance.
	GroupId string `pulumi:"groupId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// Group type.
	Type *string `pulumi:"type"`
}

// The set of arguments for constructing a Group resource.
type GroupArgs struct {
	// Group description.
	Description pulumi.StringPtrInput
	// Group name.
	DisplayName pulumi.StringInput
	// Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
	ExternalId pulumi.StringPtrInput
	// Group identifier. Must be unique in the current API Management service instance.
	GroupId pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// Group type.
	Type GroupType
}

func (GroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*groupArgs)(nil)).Elem()
}

type GroupInput interface {
	pulumi.Input

	ToGroupOutput() GroupOutput
	ToGroupOutputWithContext(ctx context.Context) GroupOutput
}

func (Group) ElementType() reflect.Type {
	return reflect.TypeOf((*Group)(nil)).Elem()
}

func (i Group) ToGroupOutput() GroupOutput {
	return i.ToGroupOutputWithContext(context.Background())
}

func (i Group) ToGroupOutputWithContext(ctx context.Context) GroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GroupOutput)
}

type GroupOutput struct {
	*pulumi.OutputState
}

func (GroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GroupOutput)(nil)).Elem()
}

func (o GroupOutput) ToGroupOutput() GroupOutput {
	return o
}

func (o GroupOutput) ToGroupOutputWithContext(ctx context.Context) GroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(GroupOutput{})
}
