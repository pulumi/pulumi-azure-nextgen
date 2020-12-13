// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The User registered to a lab
type User struct {
	pulumi.CustomResourceState

	// The user email address, as it was specified during registration.
	Email pulumi.StringOutput `pulumi:"email"`
	// The user family name, as it was specified during registration.
	FamilyName pulumi.StringOutput `pulumi:"familyName"`
	// The user given name, as it was specified during registration.
	GivenName pulumi.StringOutput `pulumi:"givenName"`
	// The details of the latest operation. ex: status, error
	LatestOperationResult LatestOperationResultResponseOutput `pulumi:"latestOperationResult"`
	// The location of the resource.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// The tags of the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The user tenant ID, as it was specified during registration.
	TenantId pulumi.StringOutput `pulumi:"tenantId"`
	// How long the user has used his VMs in this lab
	TotalUsage pulumi.StringOutput `pulumi:"totalUsage"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringPtrOutput `pulumi:"uniqueIdentifier"`
}

// NewUser registers a new resource with the given unique name, arguments, and options.
func NewUser(ctx *pulumi.Context,
	name string, args *UserArgs, opts ...pulumi.ResourceOption) (*User, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.LabAccountName == nil {
		return nil, errors.New("invalid value for required argument 'LabAccountName'")
	}
	if args.LabName == nil {
		return nil, errors.New("invalid value for required argument 'LabName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.UserName == nil {
		return nil, errors.New("invalid value for required argument 'UserName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:labservices/v20181015:User"),
		},
	})
	opts = append(opts, aliases)
	var resource User
	err := ctx.RegisterResource("azure-nextgen:labservices/latest:User", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetUser gets an existing User resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetUser(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *UserState, opts ...pulumi.ResourceOption) (*User, error) {
	var resource User
	err := ctx.ReadResource("azure-nextgen:labservices/latest:User", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering User resources.
type userState struct {
	// The user email address, as it was specified during registration.
	Email *string `pulumi:"email"`
	// The user family name, as it was specified during registration.
	FamilyName *string `pulumi:"familyName"`
	// The user given name, as it was specified during registration.
	GivenName *string `pulumi:"givenName"`
	// The details of the latest operation. ex: status, error
	LatestOperationResult *LatestOperationResultResponse `pulumi:"latestOperationResult"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The user tenant ID, as it was specified during registration.
	TenantId *string `pulumi:"tenantId"`
	// How long the user has used his VMs in this lab
	TotalUsage *string `pulumi:"totalUsage"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier *string `pulumi:"uniqueIdentifier"`
}

type UserState struct {
	// The user email address, as it was specified during registration.
	Email pulumi.StringPtrInput
	// The user family name, as it was specified during registration.
	FamilyName pulumi.StringPtrInput
	// The user given name, as it was specified during registration.
	GivenName pulumi.StringPtrInput
	// The details of the latest operation. ex: status, error
	LatestOperationResult LatestOperationResultResponsePtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The user tenant ID, as it was specified during registration.
	TenantId pulumi.StringPtrInput
	// How long the user has used his VMs in this lab
	TotalUsage pulumi.StringPtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringPtrInput
}

func (UserState) ElementType() reflect.Type {
	return reflect.TypeOf((*userState)(nil)).Elem()
}

type userArgs struct {
	// The name of the lab Account.
	LabAccountName string `pulumi:"labAccountName"`
	// The name of the lab.
	LabName string `pulumi:"labName"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier *string `pulumi:"uniqueIdentifier"`
	// The name of the user.
	UserName string `pulumi:"userName"`
}

// The set of arguments for constructing a User resource.
type UserArgs struct {
	// The name of the lab Account.
	LabAccountName pulumi.StringInput
	// The name of the lab.
	LabName pulumi.StringInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringPtrInput
	// The name of the user.
	UserName pulumi.StringInput
}

func (UserArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*userArgs)(nil)).Elem()
}

type UserInput interface {
	pulumi.Input

	ToUserOutput() UserOutput
	ToUserOutputWithContext(ctx context.Context) UserOutput
}

func (User) ElementType() reflect.Type {
	return reflect.TypeOf((*User)(nil)).Elem()
}

func (i User) ToUserOutput() UserOutput {
	return i.ToUserOutputWithContext(context.Background())
}

func (i User) ToUserOutputWithContext(ctx context.Context) UserOutput {
	return pulumi.ToOutputWithContext(ctx, i).(UserOutput)
}

type UserOutput struct {
	*pulumi.OutputState
}

func (UserOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*UserOutput)(nil)).Elem()
}

func (o UserOutput) ToUserOutput() UserOutput {
	return o
}

func (o UserOutput) ToUserOutputWithContext(ctx context.Context) UserOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(UserOutput{})
}
