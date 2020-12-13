// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201019preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Represents a Workspace definition.
type Workspace struct {
	pulumi.CustomResourceState

	// List of applicationGroup resource Ids.
	ApplicationGroupReferences pulumi.StringArrayOutput `pulumi:"applicationGroupReferences"`
	// Description of Workspace.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Friendly name of Workspace.
	FriendlyName pulumi.StringPtrOutput `pulumi:"friendlyName"`
	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewWorkspace registers a new resource with the given unique name, arguments, and options.
func NewWorkspace(ctx *pulumi.Context,
	name string, args *WorkspaceArgs, opts ...pulumi.ResourceOption) (*Workspace, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.WorkspaceName == nil {
		return nil, errors.New("invalid value for required argument 'WorkspaceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20190123preview:Workspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20190924preview:Workspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20191210preview:Workspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20200921preview:Workspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20201102preview:Workspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20201110preview:Workspace"),
		},
	})
	opts = append(opts, aliases)
	var resource Workspace
	err := ctx.RegisterResource("azure-nextgen:desktopvirtualization/v20201019preview:Workspace", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWorkspace gets an existing Workspace resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWorkspace(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WorkspaceState, opts ...pulumi.ResourceOption) (*Workspace, error) {
	var resource Workspace
	err := ctx.ReadResource("azure-nextgen:desktopvirtualization/v20201019preview:Workspace", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Workspace resources.
type workspaceState struct {
	// List of applicationGroup resource Ids.
	ApplicationGroupReferences []string `pulumi:"applicationGroupReferences"`
	// Description of Workspace.
	Description *string `pulumi:"description"`
	// Friendly name of Workspace.
	FriendlyName *string `pulumi:"friendlyName"`
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type WorkspaceState struct {
	// List of applicationGroup resource Ids.
	ApplicationGroupReferences pulumi.StringArrayInput
	// Description of Workspace.
	Description pulumi.StringPtrInput
	// Friendly name of Workspace.
	FriendlyName pulumi.StringPtrInput
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (WorkspaceState) ElementType() reflect.Type {
	return reflect.TypeOf((*workspaceState)(nil)).Elem()
}

type workspaceArgs struct {
	// List of applicationGroup resource Ids.
	ApplicationGroupReferences []string `pulumi:"applicationGroupReferences"`
	// Description of Workspace.
	Description *string `pulumi:"description"`
	// Friendly name of Workspace.
	FriendlyName *string `pulumi:"friendlyName"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The name of the workspace
	WorkspaceName string `pulumi:"workspaceName"`
}

// The set of arguments for constructing a Workspace resource.
type WorkspaceArgs struct {
	// List of applicationGroup resource Ids.
	ApplicationGroupReferences pulumi.StringArrayInput
	// Description of Workspace.
	Description pulumi.StringPtrInput
	// Friendly name of Workspace.
	FriendlyName pulumi.StringPtrInput
	// The geo-location where the resource lives
	Location pulumi.StringInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The name of the workspace
	WorkspaceName pulumi.StringInput
}

func (WorkspaceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*workspaceArgs)(nil)).Elem()
}

type WorkspaceInput interface {
	pulumi.Input

	ToWorkspaceOutput() WorkspaceOutput
	ToWorkspaceOutputWithContext(ctx context.Context) WorkspaceOutput
}

func (Workspace) ElementType() reflect.Type {
	return reflect.TypeOf((*Workspace)(nil)).Elem()
}

func (i Workspace) ToWorkspaceOutput() WorkspaceOutput {
	return i.ToWorkspaceOutputWithContext(context.Background())
}

func (i Workspace) ToWorkspaceOutputWithContext(ctx context.Context) WorkspaceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkspaceOutput)
}

type WorkspaceOutput struct {
	*pulumi.OutputState
}

func (WorkspaceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WorkspaceOutput)(nil)).Elem()
}

func (o WorkspaceOutput) ToWorkspaceOutput() WorkspaceOutput {
	return o
}

func (o WorkspaceOutput) ToWorkspaceOutputWithContext(ctx context.Context) WorkspaceOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WorkspaceOutput{})
}
