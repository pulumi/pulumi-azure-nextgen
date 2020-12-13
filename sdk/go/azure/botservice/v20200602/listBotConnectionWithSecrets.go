// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200602

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListBotConnectionWithSecrets(ctx *pulumi.Context, args *ListBotConnectionWithSecretsArgs, opts ...pulumi.InvokeOption) (*ListBotConnectionWithSecretsResult, error) {
	var rv ListBotConnectionWithSecretsResult
	err := ctx.Invoke("azure-nextgen:botservice/v20200602:listBotConnectionWithSecrets", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListBotConnectionWithSecretsArgs struct {
	// The name of the Bot Service Connection Setting resource.
	ConnectionName string `pulumi:"connectionName"`
	// The name of the Bot resource group in the user subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Bot resource.
	ResourceName string `pulumi:"resourceName"`
}

// Bot channel resource definition
type ListBotConnectionWithSecretsResult struct {
	// Entity Tag
	Etag *string `pulumi:"etag"`
	// Specifies the resource ID.
	Id string `pulumi:"id"`
	// Required. Gets or sets the Kind of the resource.
	Kind *string `pulumi:"kind"`
	// Specifies the location of the resource.
	Location *string `pulumi:"location"`
	// Specifies the name of the resource.
	Name string `pulumi:"name"`
	// The set of properties specific to bot channel resource
	Properties ConnectionSettingPropertiesResponse `pulumi:"properties"`
	// Gets or sets the SKU of the resource.
	Sku *SkuResponse `pulumi:"sku"`
	// Contains resource tags defined as key/value pairs.
	Tags map[string]string `pulumi:"tags"`
	// Specifies the type of the resource.
	Type string `pulumi:"type"`
}
