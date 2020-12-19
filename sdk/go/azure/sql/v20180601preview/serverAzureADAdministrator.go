// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Azure Active Directory administrator.
type ServerAzureADAdministrator struct {
	pulumi.CustomResourceState

	// Type of the sever administrator.
	AdministratorType pulumi.StringOutput `pulumi:"administratorType"`
	// Login name of the server administrator.
	Login pulumi.StringOutput `pulumi:"login"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// SID (object ID) of the server administrator.
	Sid pulumi.StringOutput `pulumi:"sid"`
	// Tenant ID of the administrator.
	TenantId pulumi.StringPtrOutput `pulumi:"tenantId"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewServerAzureADAdministrator registers a new resource with the given unique name, arguments, and options.
func NewServerAzureADAdministrator(ctx *pulumi.Context,
	name string, args *ServerAzureADAdministratorArgs, opts ...pulumi.ResourceOption) (*ServerAzureADAdministrator, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AdministratorName == nil {
		return nil, errors.New("invalid value for required argument 'AdministratorName'")
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
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/latest:ServerAzureADAdministrator"),
		},
		{
			Type: pulumi.String("azure-nextgen:sql/v20140401:ServerAzureADAdministrator"),
		},
		{
			Type: pulumi.String("azure-nextgen:sql/v20190601preview:ServerAzureADAdministrator"),
		},
		{
			Type: pulumi.String("azure-nextgen:sql/v20200202preview:ServerAzureADAdministrator"),
		},
		{
			Type: pulumi.String("azure-nextgen:sql/v20200801preview:ServerAzureADAdministrator"),
		},
	})
	opts = append(opts, aliases)
	var resource ServerAzureADAdministrator
	err := ctx.RegisterResource("azure-nextgen:sql/v20180601preview:ServerAzureADAdministrator", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetServerAzureADAdministrator gets an existing ServerAzureADAdministrator resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetServerAzureADAdministrator(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ServerAzureADAdministratorState, opts ...pulumi.ResourceOption) (*ServerAzureADAdministrator, error) {
	var resource ServerAzureADAdministrator
	err := ctx.ReadResource("azure-nextgen:sql/v20180601preview:ServerAzureADAdministrator", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ServerAzureADAdministrator resources.
type serverAzureADAdministratorState struct {
	// Type of the sever administrator.
	AdministratorType *string `pulumi:"administratorType"`
	// Login name of the server administrator.
	Login *string `pulumi:"login"`
	// Resource name.
	Name *string `pulumi:"name"`
	// SID (object ID) of the server administrator.
	Sid *string `pulumi:"sid"`
	// Tenant ID of the administrator.
	TenantId *string `pulumi:"tenantId"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type ServerAzureADAdministratorState struct {
	// Type of the sever administrator.
	AdministratorType pulumi.StringPtrInput
	// Login name of the server administrator.
	Login pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// SID (object ID) of the server administrator.
	Sid pulumi.StringPtrInput
	// Tenant ID of the administrator.
	TenantId pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (ServerAzureADAdministratorState) ElementType() reflect.Type {
	return reflect.TypeOf((*serverAzureADAdministratorState)(nil)).Elem()
}

type serverAzureADAdministratorArgs struct {
	AdministratorName string `pulumi:"administratorName"`
	// Type of the sever administrator.
	AdministratorType string `pulumi:"administratorType"`
	// Login name of the server administrator.
	Login string `pulumi:"login"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
	// SID (object ID) of the server administrator.
	Sid string `pulumi:"sid"`
	// Tenant ID of the administrator.
	TenantId *string `pulumi:"tenantId"`
}

// The set of arguments for constructing a ServerAzureADAdministrator resource.
type ServerAzureADAdministratorArgs struct {
	AdministratorName pulumi.StringInput
	// Type of the sever administrator.
	AdministratorType pulumi.StringInput
	// Login name of the server administrator.
	Login pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the server.
	ServerName pulumi.StringInput
	// SID (object ID) of the server administrator.
	Sid pulumi.StringInput
	// Tenant ID of the administrator.
	TenantId pulumi.StringPtrInput
}

func (ServerAzureADAdministratorArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*serverAzureADAdministratorArgs)(nil)).Elem()
}

type ServerAzureADAdministratorInput interface {
	pulumi.Input

	ToServerAzureADAdministratorOutput() ServerAzureADAdministratorOutput
	ToServerAzureADAdministratorOutputWithContext(ctx context.Context) ServerAzureADAdministratorOutput
}

func (*ServerAzureADAdministrator) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerAzureADAdministrator)(nil))
}

func (i *ServerAzureADAdministrator) ToServerAzureADAdministratorOutput() ServerAzureADAdministratorOutput {
	return i.ToServerAzureADAdministratorOutputWithContext(context.Background())
}

func (i *ServerAzureADAdministrator) ToServerAzureADAdministratorOutputWithContext(ctx context.Context) ServerAzureADAdministratorOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerAzureADAdministratorOutput)
}

type ServerAzureADAdministratorOutput struct {
	*pulumi.OutputState
}

func (ServerAzureADAdministratorOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerAzureADAdministrator)(nil))
}

func (o ServerAzureADAdministratorOutput) ToServerAzureADAdministratorOutput() ServerAzureADAdministratorOutput {
	return o
}

func (o ServerAzureADAdministratorOutput) ToServerAzureADAdministratorOutputWithContext(ctx context.Context) ServerAzureADAdministratorOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ServerAzureADAdministratorOutput{})
}
