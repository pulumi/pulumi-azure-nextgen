// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150801preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupConnection(ctx *pulumi.Context, args *LookupConnectionArgs, opts ...pulumi.InvokeOption) (*LookupConnectionResult, error) {
	var rv LookupConnectionResult
	err := ctx.Invoke("azure-nextgen:web/v20150801preview:getConnection", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupConnectionArgs struct {
	// The connection name.
	ConnectionName string `pulumi:"connectionName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// API Connection
type LookupConnectionResult struct {
	// expanded connection provider name
	Api *ExpandedParentApiEntityResponse `pulumi:"api"`
	// Timestamp of last connection change.
	ChangedTime *string `pulumi:"changedTime"`
	// Timestamp of the connection creation
	CreatedTime *string `pulumi:"createdTime"`
	// Custom login setting values.
	CustomParameterValues map[string]ParameterCustomLoginSettingValuesResponse `pulumi:"customParameterValues"`
	// display name
	DisplayName *string `pulumi:"displayName"`
	// Time in UTC when the first expiration of OAuth tokens
	FirstExpirationTime *string `pulumi:"firstExpirationTime"`
	// Resource Id
	Id *string `pulumi:"id"`
	// List of Keywords that tag the acl
	Keywords []string `pulumi:"keywords"`
	// Kind of resource
	Kind *string `pulumi:"kind"`
	// Resource Location
	Location string      `pulumi:"location"`
	Metadata interface{} `pulumi:"metadata"`
	// Resource Name
	Name *string `pulumi:"name"`
	// Tokens/Claim
	NonSecretParameterValues map[string]interface{} `pulumi:"nonSecretParameterValues"`
	// Tokens/Claim
	ParameterValues map[string]interface{} `pulumi:"parameterValues"`
	// Status of the connection
	Statuses []ConnectionStatusResponse `pulumi:"statuses"`
	// Resource tags
	Tags     map[string]string `pulumi:"tags"`
	TenantId *string           `pulumi:"tenantId"`
	// Resource type
	Type *string `pulumi:"type"`
}
