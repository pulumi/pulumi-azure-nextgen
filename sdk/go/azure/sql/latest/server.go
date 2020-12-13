// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Represents a server.
type Server struct {
	pulumi.CustomResourceState

	// Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
	AdministratorLogin pulumi.StringPtrOutput `pulumi:"administratorLogin"`
	// The administrator login password (required for server creation).
	AdministratorLoginPassword pulumi.StringPtrOutput `pulumi:"administratorLoginPassword"`
	// The display name of the Azure Active Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators
	ExternalAdministratorLogin pulumi.StringOutput `pulumi:"externalAdministratorLogin"`
	// The ID of the Active Azure Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators.
	ExternalAdministratorSid pulumi.StringOutput `pulumi:"externalAdministratorSid"`
	// The fully qualified domain name of the server.
	FullyQualifiedDomainName pulumi.StringOutput `pulumi:"fullyQualifiedDomainName"`
	// Kind of sql server.  This is metadata used for the Azure portal experience.
	Kind pulumi.StringOutput `pulumi:"kind"`
	// Resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The state of the server.
	State pulumi.StringOutput `pulumi:"state"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The version of the server.
	Version pulumi.StringPtrOutput `pulumi:"version"`
}

// NewServer registers a new resource with the given unique name, arguments, and options.
func NewServer(ctx *pulumi.Context,
	name string, args *ServerArgs, opts ...pulumi.ResourceOption) (*Server, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServerName == nil {
		return nil, errors.New("invalid value for required argument 'ServerName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20140401:Server"),
		},
		{
			Type: pulumi.String("azure-nextgen:sql/v20150501preview:Server"),
		},
		{
			Type: pulumi.String("azure-nextgen:sql/v20190601preview:Server"),
		},
		{
			Type: pulumi.String("azure-nextgen:sql/v20200801preview:Server"),
		},
	})
	opts = append(opts, aliases)
	var resource Server
	err := ctx.RegisterResource("azure-nextgen:sql/latest:Server", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetServer gets an existing Server resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetServer(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ServerState, opts ...pulumi.ResourceOption) (*Server, error) {
	var resource Server
	err := ctx.ReadResource("azure-nextgen:sql/latest:Server", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Server resources.
type serverState struct {
	// Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
	AdministratorLogin *string `pulumi:"administratorLogin"`
	// The administrator login password (required for server creation).
	AdministratorLoginPassword *string `pulumi:"administratorLoginPassword"`
	// The display name of the Azure Active Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators
	ExternalAdministratorLogin *string `pulumi:"externalAdministratorLogin"`
	// The ID of the Active Azure Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators.
	ExternalAdministratorSid *string `pulumi:"externalAdministratorSid"`
	// The fully qualified domain name of the server.
	FullyQualifiedDomainName *string `pulumi:"fullyQualifiedDomainName"`
	// Kind of sql server.  This is metadata used for the Azure portal experience.
	Kind *string `pulumi:"kind"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The state of the server.
	State *string `pulumi:"state"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// The version of the server.
	Version *string `pulumi:"version"`
}

type ServerState struct {
	// Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
	AdministratorLogin pulumi.StringPtrInput
	// The administrator login password (required for server creation).
	AdministratorLoginPassword pulumi.StringPtrInput
	// The display name of the Azure Active Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators
	ExternalAdministratorLogin pulumi.StringPtrInput
	// The ID of the Active Azure Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators.
	ExternalAdministratorSid pulumi.StringPtrInput
	// The fully qualified domain name of the server.
	FullyQualifiedDomainName pulumi.StringPtrInput
	// Kind of sql server.  This is metadata used for the Azure portal experience.
	Kind pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The state of the server.
	State pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// The version of the server.
	Version pulumi.StringPtrInput
}

func (ServerState) ElementType() reflect.Type {
	return reflect.TypeOf((*serverState)(nil)).Elem()
}

type serverArgs struct {
	// Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
	AdministratorLogin *string `pulumi:"administratorLogin"`
	// The administrator login password (required for server creation).
	AdministratorLoginPassword *string `pulumi:"administratorLoginPassword"`
	// Resource location.
	Location string `pulumi:"location"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The version of the server.
	Version *string `pulumi:"version"`
}

// The set of arguments for constructing a Server resource.
type ServerArgs struct {
	// Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
	AdministratorLogin pulumi.StringPtrInput
	// The administrator login password (required for server creation).
	AdministratorLoginPassword pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the server.
	ServerName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The version of the server.
	Version pulumi.StringPtrInput
}

func (ServerArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*serverArgs)(nil)).Elem()
}

type ServerInput interface {
	pulumi.Input

	ToServerOutput() ServerOutput
	ToServerOutputWithContext(ctx context.Context) ServerOutput
}

func (Server) ElementType() reflect.Type {
	return reflect.TypeOf((*Server)(nil)).Elem()
}

func (i Server) ToServerOutput() ServerOutput {
	return i.ToServerOutputWithContext(context.Background())
}

func (i Server) ToServerOutputWithContext(ctx context.Context) ServerOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerOutput)
}

type ServerOutput struct {
	*pulumi.OutputState
}

func (ServerOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerOutput)(nil)).Elem()
}

func (o ServerOutput) ToServerOutput() ServerOutput {
	return o
}

func (o ServerOutput) ToServerOutputWithContext(ctx context.Context) ServerOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ServerOutput{})
}
