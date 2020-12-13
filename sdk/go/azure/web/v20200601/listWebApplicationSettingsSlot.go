// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListWebApplicationSettingsSlot(ctx *pulumi.Context, args *ListWebApplicationSettingsSlotArgs, opts ...pulumi.InvokeOption) (*ListWebApplicationSettingsSlotResult, error) {
	var rv ListWebApplicationSettingsSlotResult
	err := ctx.Invoke("azure-nextgen:web/v20200601:listWebApplicationSettingsSlot", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListWebApplicationSettingsSlotArgs struct {
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the deployment slot. If a slot is not specified, the API will get the application settings for the production slot.
	Slot string `pulumi:"slot"`
}

// String dictionary resource.
type ListWebApplicationSettingsSlotResult struct {
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// Settings.
	Properties map[string]string `pulumi:"properties"`
	// Resource type.
	Type string `pulumi:"type"`
}
