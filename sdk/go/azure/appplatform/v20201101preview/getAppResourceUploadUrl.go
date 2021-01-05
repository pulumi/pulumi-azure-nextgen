// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func GetAppResourceUploadUrl(ctx *pulumi.Context, args *GetAppResourceUploadUrlArgs, opts ...pulumi.InvokeOption) (*GetAppResourceUploadUrlResult, error) {
	var rv GetAppResourceUploadUrlResult
	err := ctx.Invoke("azure-nextgen:appplatform/v20201101preview:getAppResourceUploadUrl", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type GetAppResourceUploadUrlArgs struct {
	// The name of the App resource.
	AppName string `pulumi:"appName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Service resource.
	ServiceName string `pulumi:"serviceName"`
}

// Resource upload definition payload
type GetAppResourceUploadUrlResult struct {
	// Source relative path
	RelativePath *string `pulumi:"relativePath"`
	// Upload URL
	UploadUrl *string `pulumi:"uploadUrl"`
}
