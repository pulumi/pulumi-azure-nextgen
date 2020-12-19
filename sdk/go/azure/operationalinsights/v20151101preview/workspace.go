// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20151101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The top level Workspace resource container.
type Workspace struct {
	pulumi.CustomResourceState

	// This is a read-only property. Represents the ID associated with the workspace.
	CustomerId pulumi.StringOutput `pulumi:"customerId"`
	// The ETag of the workspace.
	ETag pulumi.StringPtrOutput `pulumi:"eTag"`
	// Resource location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// This is a legacy property and is not used anymore. Kept here for backward compatibility.
	PortalUrl pulumi.StringOutput `pulumi:"portalUrl"`
	// The provisioning state of the workspace.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// The workspace data retention in days. -1 means Unlimited retention for the Unlimited Sku. 730 days is the maximum allowed for all other Skus.
	RetentionInDays pulumi.IntPtrOutput `pulumi:"retentionInDays"`
	// The SKU of the workspace.
	Sku SkuResponsePtrOutput `pulumi:"sku"`
	// This is a read-only legacy property. It is always set to 'Azure' by the service. Kept here for backward compatibility.
	Source pulumi.StringOutput `pulumi:"source"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewWorkspace registers a new resource with the given unique name, arguments, and options.
func NewWorkspace(ctx *pulumi.Context,
	name string, args *WorkspaceArgs, opts ...pulumi.ResourceOption) (*Workspace, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.WorkspaceName == nil {
		return nil, errors.New("invalid value for required argument 'WorkspaceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:operationalinsights/latest:Workspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:operationalinsights/v20200301preview:Workspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:operationalinsights/v20200801:Workspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:operationalinsights/v20201001:Workspace"),
		},
	})
	opts = append(opts, aliases)
	var resource Workspace
	err := ctx.RegisterResource("azure-nextgen:operationalinsights/v20151101preview:Workspace", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:operationalinsights/v20151101preview:Workspace", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Workspace resources.
type workspaceState struct {
	// This is a read-only property. Represents the ID associated with the workspace.
	CustomerId *string `pulumi:"customerId"`
	// The ETag of the workspace.
	ETag *string `pulumi:"eTag"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// This is a legacy property and is not used anymore. Kept here for backward compatibility.
	PortalUrl *string `pulumi:"portalUrl"`
	// The provisioning state of the workspace.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The workspace data retention in days. -1 means Unlimited retention for the Unlimited Sku. 730 days is the maximum allowed for all other Skus.
	RetentionInDays *int `pulumi:"retentionInDays"`
	// The SKU of the workspace.
	Sku *SkuResponse `pulumi:"sku"`
	// This is a read-only legacy property. It is always set to 'Azure' by the service. Kept here for backward compatibility.
	Source *string `pulumi:"source"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type WorkspaceState struct {
	// This is a read-only property. Represents the ID associated with the workspace.
	CustomerId pulumi.StringPtrInput
	// The ETag of the workspace.
	ETag pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// This is a legacy property and is not used anymore. Kept here for backward compatibility.
	PortalUrl pulumi.StringPtrInput
	// The provisioning state of the workspace.
	ProvisioningState pulumi.StringPtrInput
	// The workspace data retention in days. -1 means Unlimited retention for the Unlimited Sku. 730 days is the maximum allowed for all other Skus.
	RetentionInDays pulumi.IntPtrInput
	// The SKU of the workspace.
	Sku SkuResponsePtrInput
	// This is a read-only legacy property. It is always set to 'Azure' by the service. Kept here for backward compatibility.
	Source pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (WorkspaceState) ElementType() reflect.Type {
	return reflect.TypeOf((*workspaceState)(nil)).Elem()
}

type workspaceArgs struct {
	// The ETag of the workspace.
	ETag *string `pulumi:"eTag"`
	// Resource location
	Location *string `pulumi:"location"`
	// The provisioning state of the workspace.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The resource group name of the workspace.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The workspace data retention in days. -1 means Unlimited retention for the Unlimited Sku. 730 days is the maximum allowed for all other Skus.
	RetentionInDays *int `pulumi:"retentionInDays"`
	// The SKU of the workspace.
	Sku *Sku `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// The name of the workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// The set of arguments for constructing a Workspace resource.
type WorkspaceArgs struct {
	// The ETag of the workspace.
	ETag pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// The provisioning state of the workspace.
	ProvisioningState pulumi.StringPtrInput
	// The resource group name of the workspace.
	ResourceGroupName pulumi.StringInput
	// The workspace data retention in days. -1 means Unlimited retention for the Unlimited Sku. 730 days is the maximum allowed for all other Skus.
	RetentionInDays pulumi.IntPtrInput
	// The SKU of the workspace.
	Sku SkuPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// The name of the workspace.
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

func (*Workspace) ElementType() reflect.Type {
	return reflect.TypeOf((*Workspace)(nil))
}

func (i *Workspace) ToWorkspaceOutput() WorkspaceOutput {
	return i.ToWorkspaceOutputWithContext(context.Background())
}

func (i *Workspace) ToWorkspaceOutputWithContext(ctx context.Context) WorkspaceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkspaceOutput)
}

type WorkspaceOutput struct {
	*pulumi.OutputState
}

func (WorkspaceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Workspace)(nil))
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
