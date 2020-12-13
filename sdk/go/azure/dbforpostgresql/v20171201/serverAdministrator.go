// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Represents a and external administrator to be created.
type ServerAdministrator struct {
	pulumi.CustomResourceState

	// The type of administrator.
	AdministratorType pulumi.StringOutput `pulumi:"administratorType"`
	// The server administrator login account name.
	Login pulumi.StringOutput `pulumi:"login"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The server administrator Sid (Secure ID).
	Sid pulumi.StringOutput `pulumi:"sid"`
	// The server Active Directory Administrator tenant id.
	TenantId pulumi.StringOutput `pulumi:"tenantId"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewServerAdministrator registers a new resource with the given unique name, arguments, and options.
func NewServerAdministrator(ctx *pulumi.Context,
	name string, args *ServerAdministratorArgs, opts ...pulumi.ResourceOption) (*ServerAdministrator, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AdministratorType == nil {
		return nil, errors.New("invalid value for required argument 'AdministratorType'")
	}
	if args.Login == nil {
		return nil, errors.New("invalid value for required argument 'Login'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServerName == nil {
		return nil, errors.New("invalid value for required argument 'ServerName'")
	}
	if args.Sid == nil {
		return nil, errors.New("invalid value for required argument 'Sid'")
	}
	if args.TenantId == nil {
		return nil, errors.New("invalid value for required argument 'TenantId'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:dbforpostgresql/latest:ServerAdministrator"),
		},
		{
			Type: pulumi.String("azure-nextgen:dbforpostgresql/v20171201preview:ServerAdministrator"),
		},
	})
	opts = append(opts, aliases)
	var resource ServerAdministrator
	err := ctx.RegisterResource("azure-nextgen:dbforpostgresql/v20171201:ServerAdministrator", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetServerAdministrator gets an existing ServerAdministrator resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetServerAdministrator(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ServerAdministratorState, opts ...pulumi.ResourceOption) (*ServerAdministrator, error) {
	var resource ServerAdministrator
	err := ctx.ReadResource("azure-nextgen:dbforpostgresql/v20171201:ServerAdministrator", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ServerAdministrator resources.
type serverAdministratorState struct {
	// The type of administrator.
	AdministratorType *string `pulumi:"administratorType"`
	// The server administrator login account name.
	Login *string `pulumi:"login"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The server administrator Sid (Secure ID).
	Sid *string `pulumi:"sid"`
	// The server Active Directory Administrator tenant id.
	TenantId *string `pulumi:"tenantId"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type ServerAdministratorState struct {
	// The type of administrator.
	AdministratorType pulumi.StringPtrInput
	// The server administrator login account name.
	Login pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The server administrator Sid (Secure ID).
	Sid pulumi.StringPtrInput
	// The server Active Directory Administrator tenant id.
	TenantId pulumi.StringPtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (ServerAdministratorState) ElementType() reflect.Type {
	return reflect.TypeOf((*serverAdministratorState)(nil)).Elem()
}

type serverAdministratorArgs struct {
	// The type of administrator.
	AdministratorType string `pulumi:"administratorType"`
	// The server administrator login account name.
	Login string `pulumi:"login"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
	// The server administrator Sid (Secure ID).
	Sid string `pulumi:"sid"`
	// The server Active Directory Administrator tenant id.
	TenantId string `pulumi:"tenantId"`
}

// The set of arguments for constructing a ServerAdministrator resource.
type ServerAdministratorArgs struct {
	// The type of administrator.
	AdministratorType pulumi.StringInput
	// The server administrator login account name.
	Login pulumi.StringInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The name of the server.
	ServerName pulumi.StringInput
	// The server administrator Sid (Secure ID).
	Sid pulumi.StringInput
	// The server Active Directory Administrator tenant id.
	TenantId pulumi.StringInput
}

func (ServerAdministratorArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*serverAdministratorArgs)(nil)).Elem()
}

type ServerAdministratorInput interface {
	pulumi.Input

	ToServerAdministratorOutput() ServerAdministratorOutput
	ToServerAdministratorOutputWithContext(ctx context.Context) ServerAdministratorOutput
}

func (ServerAdministrator) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerAdministrator)(nil)).Elem()
}

func (i ServerAdministrator) ToServerAdministratorOutput() ServerAdministratorOutput {
	return i.ToServerAdministratorOutputWithContext(context.Background())
}

func (i ServerAdministrator) ToServerAdministratorOutputWithContext(ctx context.Context) ServerAdministratorOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerAdministratorOutput)
}

type ServerAdministratorOutput struct {
	*pulumi.OutputState
}

func (ServerAdministratorOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerAdministratorOutput)(nil)).Elem()
}

func (o ServerAdministratorOutput) ToServerAdministratorOutput() ServerAdministratorOutput {
	return o
}

func (o ServerAdministratorOutput) ToServerAdministratorOutputWithContext(ctx context.Context) ServerAdministratorOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ServerAdministratorOutput{})
}
