// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListWebAppConnectionStringsSlot(ctx *pulumi.Context, args *ListWebAppConnectionStringsSlotArgs, opts ...pulumi.InvokeOption) (*ListWebAppConnectionStringsSlotResult, error) {
	var rv ListWebAppConnectionStringsSlotResult
	err := ctx.Invoke("azure-nextgen:web/v20200901:listWebAppConnectionStringsSlot", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListWebAppConnectionStringsSlotArgs struct {
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the deployment slot. If a slot is not specified, the API will get the connection settings for the production slot.
	Slot string `pulumi:"slot"`
}

// String dictionary resource.
type ListWebAppConnectionStringsSlotResult struct {
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// Connection strings.
	Properties map[string]ConnStringValueTypePairResponse `pulumi:"properties"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type string `pulumi:"type"`
}
