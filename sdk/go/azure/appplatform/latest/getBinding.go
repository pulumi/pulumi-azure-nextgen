// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupBinding(ctx *pulumi.Context, args *LookupBindingArgs, opts ...pulumi.InvokeOption) (*LookupBindingResult, error) {
	var rv LookupBindingResult
	err := ctx.Invoke("azure-nextgen:appplatform/latest:getBinding", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupBindingArgs struct {
	// The name of the App resource.
	AppName string `pulumi:"appName"`
	// The name of the Binding resource.
	BindingName string `pulumi:"bindingName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Service resource.
	ServiceName string `pulumi:"serviceName"`
}

// Binding resource payload
type LookupBindingResult struct {
	// Fully qualified resource Id for the resource.
	Id string `pulumi:"id"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// Properties of the Binding resource
	Properties BindingResourcePropertiesResponse `pulumi:"properties"`
	// The type of the resource.
	Type string `pulumi:"type"`
}
