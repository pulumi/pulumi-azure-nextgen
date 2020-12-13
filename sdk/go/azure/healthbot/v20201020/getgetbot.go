// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201020

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func Getgetbot(ctx *pulumi.Context, args *GetgetbotArgs, opts ...pulumi.InvokeOption) (*GetgetbotResult, error) {
	var rv GetgetbotResult
	err := ctx.Invoke("azure-nextgen:healthbot/v20201020:getgetbot", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type GetgetbotArgs struct {
	// The name of the Bot resource group in the user subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Bot resource.
	ResourceName string `pulumi:"resourceName"`
}

// Bot resource definition
type GetgetbotResult struct {
	// Fully qualified resource Id for the resource.
	Id string `pulumi:"id"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The set of properties specific to healthcare bot resource.
	Properties HealthBotPropertiesResponse `pulumi:"properties"`
	// SKU of the HealthBot.
	Sku *SkuResponse `pulumi:"sku"`
	// Metadata pertaining to creation and last modification of the resource
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type string `pulumi:"type"`
}
