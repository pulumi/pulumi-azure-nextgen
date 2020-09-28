// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601preview

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure Cosmos DB SQL Role Definition.
type SqlResourceSqlRoleDefinition struct {
	pulumi.CustomResourceState

	// A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
	AssignableScopes pulumi.StringArrayOutput `pulumi:"assignableScopes"`
	// The name of the database account.
	Name pulumi.StringOutput `pulumi:"name"`
	// The set of operations allowed through this Role Definition.
	Permissions PermissionResponseArrayOutput `pulumi:"permissions"`
	// A user-friendly name for the Role Definition. Must be unique for the database account.
	RoleName pulumi.StringPtrOutput `pulumi:"roleName"`
	// The type of Azure resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewSqlResourceSqlRoleDefinition registers a new resource with the given unique name, arguments, and options.
func NewSqlResourceSqlRoleDefinition(ctx *pulumi.Context,
	name string, args *SqlResourceSqlRoleDefinitionArgs, opts ...pulumi.ResourceOption) (*SqlResourceSqlRoleDefinition, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.RoleDefinitionId == nil {
		return nil, errors.New("missing required argument 'RoleDefinitionId'")
	}
	if args == nil {
		args = &SqlResourceSqlRoleDefinitionArgs{}
	}
	var resource SqlResourceSqlRoleDefinition
	err := ctx.RegisterResource("azure-nextgen:documentdb/v20200601preview:SqlResourceSqlRoleDefinition", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSqlResourceSqlRoleDefinition gets an existing SqlResourceSqlRoleDefinition resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSqlResourceSqlRoleDefinition(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SqlResourceSqlRoleDefinitionState, opts ...pulumi.ResourceOption) (*SqlResourceSqlRoleDefinition, error) {
	var resource SqlResourceSqlRoleDefinition
	err := ctx.ReadResource("azure-nextgen:documentdb/v20200601preview:SqlResourceSqlRoleDefinition", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SqlResourceSqlRoleDefinition resources.
type sqlResourceSqlRoleDefinitionState struct {
	// A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
	AssignableScopes []string `pulumi:"assignableScopes"`
	// The name of the database account.
	Name *string `pulumi:"name"`
	// The set of operations allowed through this Role Definition.
	Permissions []PermissionResponse `pulumi:"permissions"`
	// A user-friendly name for the Role Definition. Must be unique for the database account.
	RoleName *string `pulumi:"roleName"`
	// The type of Azure resource.
	Type *string `pulumi:"type"`
}

type SqlResourceSqlRoleDefinitionState struct {
	// A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
	AssignableScopes pulumi.StringArrayInput
	// The name of the database account.
	Name pulumi.StringPtrInput
	// The set of operations allowed through this Role Definition.
	Permissions PermissionResponseArrayInput
	// A user-friendly name for the Role Definition. Must be unique for the database account.
	RoleName pulumi.StringPtrInput
	// The type of Azure resource.
	Type pulumi.StringPtrInput
}

func (SqlResourceSqlRoleDefinitionState) ElementType() reflect.Type {
	return reflect.TypeOf((*sqlResourceSqlRoleDefinitionState)(nil)).Elem()
}

type sqlResourceSqlRoleDefinitionArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
	AssignableScopes []string `pulumi:"assignableScopes"`
	// The set of operations allowed through this Role Definition.
	Permissions []Permission `pulumi:"permissions"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The GUID for the Role Definition.
	RoleDefinitionId string `pulumi:"roleDefinitionId"`
	// A user-friendly name for the Role Definition. Must be unique for the database account.
	RoleName *string `pulumi:"roleName"`
	// Indicates whether the Role Definition was built-in or user created.
	Type *string `pulumi:"type"`
}

// The set of arguments for constructing a SqlResourceSqlRoleDefinition resource.
type SqlResourceSqlRoleDefinitionArgs struct {
	// Cosmos DB database account name.
	AccountName pulumi.StringInput
	// A set of fully qualified Scopes at or below which Role Assignments may be created using this Role Definition. This will allow application of this Role Definition on the entire database account or any underlying Database / Collection. Must have at least one element. Scopes higher than Database account are not enforceable as assignable Scopes. Note that resources referenced in assignable Scopes need not exist.
	AssignableScopes pulumi.StringArrayInput
	// The set of operations allowed through this Role Definition.
	Permissions PermissionArrayInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The GUID for the Role Definition.
	RoleDefinitionId pulumi.StringInput
	// A user-friendly name for the Role Definition. Must be unique for the database account.
	RoleName pulumi.StringPtrInput
	// Indicates whether the Role Definition was built-in or user created.
	Type pulumi.StringPtrInput
}

func (SqlResourceSqlRoleDefinitionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*sqlResourceSqlRoleDefinitionArgs)(nil)).Elem()
}