// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180701preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupIntegrationAccountSession(ctx *pulumi.Context, args *LookupIntegrationAccountSessionArgs, opts ...pulumi.InvokeOption) (*LookupIntegrationAccountSessionResult, error) {
	var rv LookupIntegrationAccountSessionResult
	err := ctx.Invoke("azure-nextgen:logic/v20180701preview:getIntegrationAccountSession", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupIntegrationAccountSessionArgs struct {
	// The integration account name.
	IntegrationAccountName string `pulumi:"integrationAccountName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The integration account session name.
	SessionName string `pulumi:"sessionName"`
}

// The integration account session.
type LookupIntegrationAccountSessionResult struct {
	// The changed time.
	ChangedTime string `pulumi:"changedTime"`
	// The session content.
	Content interface{} `pulumi:"content"`
	// The created time.
	CreatedTime string `pulumi:"createdTime"`
	// The resource id.
	Id string `pulumi:"id"`
	// The resource location.
	Location *string `pulumi:"location"`
	// Gets the resource name.
	Name string `pulumi:"name"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Gets the resource type.
	Type string `pulumi:"type"`
}
