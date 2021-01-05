// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupBot(ctx *pulumi.Context, args *LookupBotArgs, opts ...pulumi.InvokeOption) (*LookupBotResult, error) {
	var rv LookupBotResult
	err := ctx.Invoke("azure-nextgen:healthbot/latest:getBot", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupBotArgs struct {
	// The name of the Bot resource.
	BotName string `pulumi:"botName"`
	// The name of the Bot resource group in the user subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// HealthBot resource definition
type LookupBotResult struct {
	// Fully qualified resource Id for the resource.
	Id string `pulumi:"id"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The set of properties specific to Healthbot resource.
	Properties HealthBotPropertiesResponse `pulumi:"properties"`
	// SKU of the HealthBot.
	Sku SkuResponse `pulumi:"sku"`
	// Metadata pertaining to creation and last modification of the resource
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type string `pulumi:"type"`
}