// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupLinkedServer(ctx *pulumi.Context, args *LookupLinkedServerArgs, opts ...pulumi.InvokeOption) (*LookupLinkedServerResult, error) {
	var rv LookupLinkedServerResult
	err := ctx.Invoke("azure-nextgen:cache/v20180301:getLinkedServer", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupLinkedServerArgs struct {
	// The name of the linked server.
	LinkedServerName string `pulumi:"linkedServerName"`
	// The name of the redis cache.
	Name string `pulumi:"name"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Response to put/get linked server (with properties) for Redis cache.
type LookupLinkedServerResult struct {
	// Resource ID.
	Id string `pulumi:"id"`
	// Fully qualified resourceId of the linked redis cache.
	LinkedRedisCacheId string `pulumi:"linkedRedisCacheId"`
	// Location of the linked redis cache.
	LinkedRedisCacheLocation string `pulumi:"linkedRedisCacheLocation"`
	// Resource name.
	Name string `pulumi:"name"`
	// Terminal state of the link between primary and secondary redis cache.
	ProvisioningState string `pulumi:"provisioningState"`
	// Role of the linked server.
	ServerRole string `pulumi:"serverRole"`
	// Resource type.
	Type string `pulumi:"type"`
}
