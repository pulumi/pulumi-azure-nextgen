// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Use this function to access the current configuration of the Azure NextGen provider.
func GetClientConfig(ctx *pulumi.Context, opts ...pulumi.InvokeOption) (*GetClientConfigResult, error) {
	var rv GetClientConfigResult
	err := ctx.Invoke("azure-nextgen:authorization/latest:getClientConfig", nil, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// Configuration values returned by getClientConfig.
type GetClientConfigResult struct {
	ClientId       string `pulumi:"clientId"`
	ObjectId       string `pulumi:"objectId"`
	SubscriptionId string `pulumi:"subscriptionId"`
	TenantId       string `pulumi:"tenantId"`
}