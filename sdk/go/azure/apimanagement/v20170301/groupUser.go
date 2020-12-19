// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// User details.
type GroupUser struct {
	pulumi.CustomResourceState

	// Email address.
	Email pulumi.StringPtrOutput `pulumi:"email"`
	// First name.
	FirstName pulumi.StringPtrOutput `pulumi:"firstName"`
	// Collection of groups user is part of.
	Groups GroupContractResponseArrayOutput `pulumi:"groups"`
	// Collection of user identities.
	Identities UserIdentityContractResponseArrayOutput `pulumi:"identities"`
	// Last name.
	LastName pulumi.StringPtrOutput `pulumi:"lastName"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Optional note about a user set by the administrator.
	Note pulumi.StringPtrOutput `pulumi:"note"`
	// Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	RegistrationDate pulumi.StringPtrOutput `pulumi:"registrationDate"`
	// Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
	State pulumi.StringPtrOutput `pulumi:"state"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewGroupUser registers a new resource with the given unique name, arguments, and options.
func NewGroupUser(ctx *pulumi.Context,
	name string, args *GroupUserArgs, opts ...pulumi.ResourceOption) (*GroupUser, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
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
	if args.Uid == nil {
		return nil, errors.New("invalid value for required argument 'Uid'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:GroupUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:GroupUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:GroupUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:GroupUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:GroupUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:GroupUser"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:GroupUser"),
		},
	})
	opts = append(opts, aliases)
	var resource GroupUser
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20170301:GroupUser", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGroupUser gets an existing GroupUser resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGroupUser(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GroupUserState, opts ...pulumi.ResourceOption) (*GroupUser, error) {
	var resource GroupUser
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20170301:GroupUser", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering GroupUser resources.
type groupUserState struct {
	// Email address.
	Email *string `pulumi:"email"`
	// First name.
	FirstName *string `pulumi:"firstName"`
	// Collection of groups user is part of.
	Groups []GroupContractResponse `pulumi:"groups"`
	// Collection of user identities.
	Identities []UserIdentityContractResponse `pulumi:"identities"`
	// Last name.
	LastName *string `pulumi:"lastName"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Optional note about a user set by the administrator.
	Note *string `pulumi:"note"`
	// Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	RegistrationDate *string `pulumi:"registrationDate"`
	// Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
	State *string `pulumi:"state"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
}

type GroupUserState struct {
	// Email address.
	Email pulumi.StringPtrInput
	// First name.
	FirstName pulumi.StringPtrInput
	// Collection of groups user is part of.
	Groups GroupContractResponseArrayInput
	// Collection of user identities.
	Identities UserIdentityContractResponseArrayInput
	// Last name.
	LastName pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Optional note about a user set by the administrator.
	Note pulumi.StringPtrInput
	// Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	RegistrationDate pulumi.StringPtrInput
	// Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
	State pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
}

func (GroupUserState) ElementType() reflect.Type {
	return reflect.TypeOf((*groupUserState)(nil)).Elem()
}

type groupUserArgs struct {
	// Group identifier. Must be unique in the current API Management service instance.
	GroupId string `pulumi:"groupId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// User identifier. Must be unique in the current API Management service instance.
	Uid string `pulumi:"uid"`
}

// The set of arguments for constructing a GroupUser resource.
type GroupUserArgs struct {
	// Group identifier. Must be unique in the current API Management service instance.
	GroupId pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// User identifier. Must be unique in the current API Management service instance.
	Uid pulumi.StringInput
}

func (GroupUserArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*groupUserArgs)(nil)).Elem()
}

type GroupUserInput interface {
	pulumi.Input

	ToGroupUserOutput() GroupUserOutput
	ToGroupUserOutputWithContext(ctx context.Context) GroupUserOutput
}

func (*GroupUser) ElementType() reflect.Type {
	return reflect.TypeOf((*GroupUser)(nil))
}

func (i *GroupUser) ToGroupUserOutput() GroupUserOutput {
	return i.ToGroupUserOutputWithContext(context.Background())
}

func (i *GroupUser) ToGroupUserOutputWithContext(ctx context.Context) GroupUserOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GroupUserOutput)
}

type GroupUserOutput struct {
	*pulumi.OutputState
}

func (GroupUserOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GroupUser)(nil))
}

func (o GroupUserOutput) ToGroupUserOutput() GroupUserOutput {
	return o
}

func (o GroupUserOutput) ToGroupUserOutputWithContext(ctx context.Context) GroupUserOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(GroupUserOutput{})
}
