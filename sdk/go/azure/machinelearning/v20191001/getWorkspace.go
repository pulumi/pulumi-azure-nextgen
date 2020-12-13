// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191001

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWorkspace(ctx *pulumi.Context, args *LookupWorkspaceArgs, opts ...pulumi.InvokeOption) (*LookupWorkspaceResult, error) {
	var rv LookupWorkspaceResult
	err := ctx.Invoke("azure-nextgen:machinelearning/v20191001:getWorkspace", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWorkspaceArgs struct {
	// The name of the resource group to which the machine learning workspace belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the machine learning workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// An object that represents a machine learning workspace.
type LookupWorkspaceResult struct {
	// The creation time for this workspace resource.
	CreationTime string `pulumi:"creationTime"`
	// The resource ID.
	Id string `pulumi:"id"`
	// The key vault identifier used for encrypted workspaces.
	KeyVaultIdentifierId *string `pulumi:"keyVaultIdentifierId"`
	// The location of the resource. This cannot be changed after the resource is created.
	Location string `pulumi:"location"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// The email id of the owner for this workspace.
	OwnerEmail string `pulumi:"ownerEmail"`
	// The sku of the workspace.
	Sku *SkuResponse `pulumi:"sku"`
	// The regional endpoint for the machine learning studio service which hosts this workspace.
	StudioEndpoint string `pulumi:"studioEndpoint"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type string `pulumi:"type"`
	// The fully qualified arm id of the storage account associated with this workspace.
	UserStorageAccountId string `pulumi:"userStorageAccountId"`
	// The immutable id associated with this workspace.
	WorkspaceId string `pulumi:"workspaceId"`
	// The current state of workspace resource.
	WorkspaceState string `pulumi:"workspaceState"`
	// The type of this workspace.
	WorkspaceType string `pulumi:"workspaceType"`
}
