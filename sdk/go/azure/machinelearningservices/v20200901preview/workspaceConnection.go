// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Workspace connection.
type WorkspaceConnection struct {
	pulumi.CustomResourceState

	// Authorization type of the workspace connection.
	AuthType pulumi.StringPtrOutput `pulumi:"authType"`
	// Category of the workspace connection.
	Category pulumi.StringPtrOutput `pulumi:"category"`
	// Friendly name of the workspace connection.
	Name pulumi.StringOutput `pulumi:"name"`
	// Target of the workspace connection.
	Target pulumi.StringPtrOutput `pulumi:"target"`
	// Resource type of workspace connection.
	Type pulumi.StringOutput `pulumi:"type"`
	// Value details of the workspace connection.
	Value pulumi.StringPtrOutput `pulumi:"value"`
}

// NewWorkspaceConnection registers a new resource with the given unique name, arguments, and options.
func NewWorkspaceConnection(ctx *pulumi.Context,
	name string, args *WorkspaceConnectionArgs, opts ...pulumi.ResourceOption) (*WorkspaceConnection, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ConnectionName == nil {
		return nil, errors.New("invalid value for required argument 'ConnectionName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.WorkspaceName == nil {
		return nil, errors.New("invalid value for required argument 'WorkspaceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:machinelearningservices/latest:WorkspaceConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:machinelearningservices/v20200601:WorkspaceConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:machinelearningservices/v20200801:WorkspaceConnection"),
		},
	})
	opts = append(opts, aliases)
	var resource WorkspaceConnection
	err := ctx.RegisterResource("azure-nextgen:machinelearningservices/v20200901preview:WorkspaceConnection", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWorkspaceConnection gets an existing WorkspaceConnection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWorkspaceConnection(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WorkspaceConnectionState, opts ...pulumi.ResourceOption) (*WorkspaceConnection, error) {
	var resource WorkspaceConnection
	err := ctx.ReadResource("azure-nextgen:machinelearningservices/v20200901preview:WorkspaceConnection", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WorkspaceConnection resources.
type workspaceConnectionState struct {
	// Authorization type of the workspace connection.
	AuthType *string `pulumi:"authType"`
	// Category of the workspace connection.
	Category *string `pulumi:"category"`
	// Friendly name of the workspace connection.
	Name *string `pulumi:"name"`
	// Target of the workspace connection.
	Target *string `pulumi:"target"`
	// Resource type of workspace connection.
	Type *string `pulumi:"type"`
	// Value details of the workspace connection.
	Value *string `pulumi:"value"`
}

type WorkspaceConnectionState struct {
	// Authorization type of the workspace connection.
	AuthType pulumi.StringPtrInput
	// Category of the workspace connection.
	Category pulumi.StringPtrInput
	// Friendly name of the workspace connection.
	Name pulumi.StringPtrInput
	// Target of the workspace connection.
	Target pulumi.StringPtrInput
	// Resource type of workspace connection.
	Type pulumi.StringPtrInput
	// Value details of the workspace connection.
	Value pulumi.StringPtrInput
}

func (WorkspaceConnectionState) ElementType() reflect.Type {
	return reflect.TypeOf((*workspaceConnectionState)(nil)).Elem()
}

type workspaceConnectionArgs struct {
	// Authorization type of the workspace connection.
	AuthType *string `pulumi:"authType"`
	// Category of the workspace connection.
	Category *string `pulumi:"category"`
	// Friendly name of the workspace connection
	ConnectionName string `pulumi:"connectionName"`
	// Friendly name of the workspace connection
	Name *string `pulumi:"name"`
	// Name of the resource group in which workspace is located.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Target of the workspace connection.
	Target *string `pulumi:"target"`
	// Value details of the workspace connection.
	Value *string `pulumi:"value"`
	// Name of Azure Machine Learning workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// The set of arguments for constructing a WorkspaceConnection resource.
type WorkspaceConnectionArgs struct {
	// Authorization type of the workspace connection.
	AuthType pulumi.StringPtrInput
	// Category of the workspace connection.
	Category pulumi.StringPtrInput
	// Friendly name of the workspace connection
	ConnectionName pulumi.StringInput
	// Friendly name of the workspace connection
	Name pulumi.StringPtrInput
	// Name of the resource group in which workspace is located.
	ResourceGroupName pulumi.StringInput
	// Target of the workspace connection.
	Target pulumi.StringPtrInput
	// Value details of the workspace connection.
	Value pulumi.StringPtrInput
	// Name of Azure Machine Learning workspace.
	WorkspaceName pulumi.StringInput
}

func (WorkspaceConnectionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*workspaceConnectionArgs)(nil)).Elem()
}

type WorkspaceConnectionInput interface {
	pulumi.Input

	ToWorkspaceConnectionOutput() WorkspaceConnectionOutput
	ToWorkspaceConnectionOutputWithContext(ctx context.Context) WorkspaceConnectionOutput
}

func (WorkspaceConnection) ElementType() reflect.Type {
	return reflect.TypeOf((*WorkspaceConnection)(nil)).Elem()
}

func (i WorkspaceConnection) ToWorkspaceConnectionOutput() WorkspaceConnectionOutput {
	return i.ToWorkspaceConnectionOutputWithContext(context.Background())
}

func (i WorkspaceConnection) ToWorkspaceConnectionOutputWithContext(ctx context.Context) WorkspaceConnectionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkspaceConnectionOutput)
}

type WorkspaceConnectionOutput struct {
	*pulumi.OutputState
}

func (WorkspaceConnectionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WorkspaceConnectionOutput)(nil)).Elem()
}

func (o WorkspaceConnectionOutput) ToWorkspaceConnectionOutput() WorkspaceConnectionOutput {
	return o
}

func (o WorkspaceConnectionOutput) ToWorkspaceConnectionOutputWithContext(ctx context.Context) WorkspaceConnectionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WorkspaceConnectionOutput{})
}
