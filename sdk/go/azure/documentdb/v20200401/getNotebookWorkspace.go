// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200401

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupNotebookWorkspace(ctx *pulumi.Context, args *LookupNotebookWorkspaceArgs, opts ...pulumi.InvokeOption) (*LookupNotebookWorkspaceResult, error) {
	var rv LookupNotebookWorkspaceResult
	err := ctx.Invoke("azure-nextgen:documentdb/v20200401:getNotebookWorkspace", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupNotebookWorkspaceArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// The name of the notebook workspace resource.
	NotebookWorkspaceName string `pulumi:"notebookWorkspaceName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A notebook workspace resource
type LookupNotebookWorkspaceResult struct {
	// The unique resource identifier of the database account.
	Id string `pulumi:"id"`
	// The name of the database account.
	Name string `pulumi:"name"`
	// Specifies the endpoint of Notebook server.
	NotebookServerEndpoint string `pulumi:"notebookServerEndpoint"`
	// Status of the notebook workspace. Possible values are: Creating, Online, Deleting, Failed, Updating.
	Status string `pulumi:"status"`
	// The type of Azure resource.
	Type string `pulumi:"type"`
}
