// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWorkspace(ctx *pulumi.Context, args *LookupWorkspaceArgs, opts ...pulumi.InvokeOption) (*LookupWorkspaceResult, error) {
	var rv LookupWorkspaceResult
	err := ctx.Invoke("azure-nextgen:machinelearningservices/v20200301:getWorkspace", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWorkspaceArgs struct {
	// Name of the resource group in which workspace is located.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of Azure Machine Learning workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// An object that represents a machine learning workspace.
type LookupWorkspaceResult struct {
	// The flag to indicate whether to allow public access when behind VNet.
	AllowPublicAccessWhenBehindVnet *bool `pulumi:"allowPublicAccessWhenBehindVnet"`
	// ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
	ApplicationInsights *string `pulumi:"applicationInsights"`
	// ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
	ContainerRegistry *string `pulumi:"containerRegistry"`
	// The creation time of the machine learning workspace in ISO8601 format.
	CreationTime string `pulumi:"creationTime"`
	// The description of this workspace.
	Description *string `pulumi:"description"`
	// Url for the discovery service to identify regional endpoints for machine learning experimentation services
	DiscoveryUrl *string `pulumi:"discoveryUrl"`
	// The encryption settings of Azure ML workspace.
	Encryption *EncryptionPropertyResponse `pulumi:"encryption"`
	// The friendly name for this workspace. This name in mutable
	FriendlyName *string `pulumi:"friendlyName"`
	// The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
	HbiWorkspace *bool `pulumi:"hbiWorkspace"`
	// Specifies the resource ID.
	Id string `pulumi:"id"`
	// The identity of the resource.
	Identity *IdentityResponse `pulumi:"identity"`
	// The compute name for image build
	ImageBuildCompute *string `pulumi:"imageBuildCompute"`
	// ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
	KeyVault *string `pulumi:"keyVault"`
	// Specifies the location of the resource.
	Location *string `pulumi:"location"`
	// Specifies the name of the resource.
	Name string `pulumi:"name"`
	// The notebook info of Azure ML workspace.
	NotebookInfo NotebookResourceInfoResponse `pulumi:"notebookInfo"`
	// The list of private endpoint connections in the workspace.
	PrivateEndpointConnections []PrivateEndpointConnectionResponse `pulumi:"privateEndpointConnections"`
	// Count of private connections in the workspace
	PrivateLinkCount int `pulumi:"privateLinkCount"`
	// The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
	ProvisioningState string `pulumi:"provisioningState"`
	// The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
	ServiceProvisionedResourceGroup string `pulumi:"serviceProvisionedResourceGroup"`
	// The list of shared private link resources in this workspace.
	SharedPrivateLinkResources []SharedPrivateLinkResourceResponse `pulumi:"sharedPrivateLinkResources"`
	// The sku of the workspace.
	Sku *SkuResponse `pulumi:"sku"`
	// ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
	StorageAccount *string `pulumi:"storageAccount"`
	// Contains resource tags defined as key/value pairs.
	Tags map[string]string `pulumi:"tags"`
	// Specifies the type of the resource.
	Type string `pulumi:"type"`
	// The immutable id associated with this workspace.
	WorkspaceId string `pulumi:"workspaceId"`
}
