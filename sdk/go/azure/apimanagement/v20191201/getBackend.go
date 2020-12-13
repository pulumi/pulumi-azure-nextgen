// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupBackend(ctx *pulumi.Context, args *LookupBackendArgs, opts ...pulumi.InvokeOption) (*LookupBackendResult, error) {
	var rv LookupBackendResult
	err := ctx.Invoke("azure-nextgen:apimanagement/v20191201:getBackend", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupBackendArgs struct {
	// Identifier of the Backend entity. Must be unique in the current API Management service instance.
	BackendId string `pulumi:"backendId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// Backend details.
type LookupBackendResult struct {
	// Backend Credentials Contract Properties
	Credentials *BackendCredentialsContractResponse `pulumi:"credentials"`
	// Backend Description.
	Description *string `pulumi:"description"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Backend Properties contract
	Properties BackendPropertiesResponse `pulumi:"properties"`
	// Backend communication protocol.
	Protocol string `pulumi:"protocol"`
	// Backend Proxy Contract Properties
	Proxy *BackendProxyContractResponse `pulumi:"proxy"`
	// Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
	ResourceId *string `pulumi:"resourceId"`
	// Backend Title.
	Title *string `pulumi:"title"`
	// Backend TLS Properties
	Tls *BackendTlsPropertiesResponse `pulumi:"tls"`
	// Resource type for API Management resource.
	Type string `pulumi:"type"`
	// Runtime Url of the Backend.
	Url string `pulumi:"url"`
}
