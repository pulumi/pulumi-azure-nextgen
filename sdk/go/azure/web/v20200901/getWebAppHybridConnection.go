// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWebAppHybridConnection(ctx *pulumi.Context, args *LookupWebAppHybridConnectionArgs, opts ...pulumi.InvokeOption) (*LookupWebAppHybridConnectionResult, error) {
	var rv LookupWebAppHybridConnectionResult
	err := ctx.Invoke("azure-nextgen:web/v20200901:getWebAppHybridConnection", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWebAppHybridConnectionArgs struct {
	// The name of the web app.
	Name string `pulumi:"name"`
	// The namespace for this hybrid connection.
	NamespaceName string `pulumi:"namespaceName"`
	// The relay name for this hybrid connection.
	RelayName string `pulumi:"relayName"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Hybrid Connection contract. This is used to configure a Hybrid Connection.
type LookupWebAppHybridConnectionResult struct {
	// The hostname of the endpoint.
	Hostname *string `pulumi:"hostname"`
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// The port of the endpoint.
	Port *int `pulumi:"port"`
	// The ARM URI to the Service Bus relay.
	RelayArmUri *string `pulumi:"relayArmUri"`
	// The name of the Service Bus relay.
	RelayName *string `pulumi:"relayName"`
	// The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
	SendKeyName *string `pulumi:"sendKeyName"`
	// The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
	// normally, use the POST /listKeys API instead.
	SendKeyValue *string `pulumi:"sendKeyValue"`
	// The name of the Service Bus namespace.
	ServiceBusNamespace *string `pulumi:"serviceBusNamespace"`
	// The suffix for the service bus endpoint. By default this is .servicebus.windows.net
	ServiceBusSuffix *string `pulumi:"serviceBusSuffix"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type string `pulumi:"type"`
}
