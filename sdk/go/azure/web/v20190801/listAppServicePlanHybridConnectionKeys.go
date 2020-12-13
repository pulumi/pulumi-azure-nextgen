// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListAppServicePlanHybridConnectionKeys(ctx *pulumi.Context, args *ListAppServicePlanHybridConnectionKeysArgs, opts ...pulumi.InvokeOption) (*ListAppServicePlanHybridConnectionKeysResult, error) {
	var rv ListAppServicePlanHybridConnectionKeysResult
	err := ctx.Invoke("azure-nextgen:web/v20190801:listAppServicePlanHybridConnectionKeys", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListAppServicePlanHybridConnectionKeysArgs struct {
	// Name of the App Service plan.
	Name string `pulumi:"name"`
	// The name of the Service Bus namespace.
	NamespaceName string `pulumi:"namespaceName"`
	// The name of the Service Bus relay.
	RelayName string `pulumi:"relayName"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection.
type ListAppServicePlanHybridConnectionKeysResult struct {
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// The name of the send key.
	SendKeyName string `pulumi:"sendKeyName"`
	// The value of the send key.
	SendKeyValue string `pulumi:"sendKeyValue"`
	// Resource type.
	Type string `pulumi:"type"`
}
