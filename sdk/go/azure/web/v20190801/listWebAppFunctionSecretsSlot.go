// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListWebAppFunctionSecretsSlot(ctx *pulumi.Context, args *ListWebAppFunctionSecretsSlotArgs, opts ...pulumi.InvokeOption) (*ListWebAppFunctionSecretsSlotResult, error) {
	var rv ListWebAppFunctionSecretsSlotResult
	err := ctx.Invoke("azure-nextgen:web/v20190801:listWebAppFunctionSecretsSlot", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListWebAppFunctionSecretsSlotArgs struct {
	// Function name.
	FunctionName string `pulumi:"functionName"`
	// Site name.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the deployment slot.
	Slot string `pulumi:"slot"`
}

// Function secrets.
type ListWebAppFunctionSecretsSlotResult struct {
	// Resource Id.
	Id string `pulumi:"id"`
	// Secret key.
	Key *string `pulumi:"key"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// Trigger URL.
	TriggerUrl *string `pulumi:"triggerUrl"`
	// Resource type.
	Type string `pulumi:"type"`
}
