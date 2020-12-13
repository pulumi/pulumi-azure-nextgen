// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150521preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupCustomImageResource(ctx *pulumi.Context, args *LookupCustomImageResourceArgs, opts ...pulumi.InvokeOption) (*LookupCustomImageResourceResult, error) {
	var rv LookupCustomImageResourceResult
	err := ctx.Invoke("azure-nextgen:devtestlab/v20150521preview:getCustomImageResource", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupCustomImageResourceArgs struct {
	// The name of the lab.
	LabName string `pulumi:"labName"`
	// The name of the custom image.
	Name string `pulumi:"name"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A custom image.
type LookupCustomImageResourceResult struct {
	// The author of the custom image.
	Author *string `pulumi:"author"`
	// The creation date of the custom image.
	CreationDate *string `pulumi:"creationDate"`
	// The description of the custom image.
	Description *string `pulumi:"description"`
	// The identifier of the resource.
	Id *string `pulumi:"id"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The OS type of the custom image.
	OsType *string `pulumi:"osType"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// The VHD from which the image is to be created.
	Vhd *CustomImagePropertiesCustomResponse `pulumi:"vhd"`
	// Properties for creating a custom image from a virtual machine.
	Vm *CustomImagePropertiesFromVmResponse `pulumi:"vm"`
}
