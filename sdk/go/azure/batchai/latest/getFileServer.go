// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupFileServer(ctx *pulumi.Context, args *LookupFileServerArgs, opts ...pulumi.InvokeOption) (*LookupFileServerResult, error) {
	var rv LookupFileServerResult
	err := ctx.Invoke("azure-nextgen:batchai/latest:getFileServer", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupFileServerArgs struct {
	// The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
	FileServerName string `pulumi:"fileServerName"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
	WorkspaceName string `pulumi:"workspaceName"`
}

// File Server information.
type LookupFileServerResult struct {
	// Time when the FileServer was created.
	CreationTime string `pulumi:"creationTime"`
	// Information about disks attached to File Server VM.
	DataDisks *DataDisksResponse `pulumi:"dataDisks"`
	// The ID of the resource.
	Id string `pulumi:"id"`
	// File Server mount settings.
	MountSettings MountSettingsResponse `pulumi:"mountSettings"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// Provisioning state of the File Server. Possible values: creating - The File Server is getting created; updating - The File Server creation has been accepted and it is getting updated; deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted; failed - The File Server creation has failed with the specified error code. Details about the error code are specified in the message field; succeeded - The File Server creation has succeeded.
	ProvisioningState string `pulumi:"provisioningState"`
	// Time when the provisioning state was changed.
	ProvisioningStateTransitionTime string `pulumi:"provisioningStateTransitionTime"`
	// SSH configuration for accessing the File Server node.
	SshConfiguration *SshConfigurationResponse `pulumi:"sshConfiguration"`
	// File Server virtual network subnet resource ID.
	Subnet *ResourceIdResponse `pulumi:"subnet"`
	// The type of the resource.
	Type string `pulumi:"type"`
	// VM size of the File Server.
	VmSize *string `pulumi:"vmSize"`
}
