// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupNamespace(ctx *pulumi.Context, args *LookupNamespaceArgs, opts ...pulumi.InvokeOption) (*LookupNamespaceResult, error) {
	var rv LookupNamespaceResult
	err := ctx.Invoke("azure-nextgen:servicebus/v20180101preview:getNamespace", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupNamespaceArgs struct {
	// The namespace name
	NamespaceName string `pulumi:"namespaceName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Description of a namespace resource.
type LookupNamespaceResult struct {
	// The time the namespace was created
	CreatedAt string `pulumi:"createdAt"`
	// Resource Id
	Id string `pulumi:"id"`
	// Enumerates the possible value of keySource for Encryption
	KeySource *string `pulumi:"keySource"`
	// Properties of KeyVault
	KeyVaultProperties *KeyVaultPropertiesResponse `pulumi:"keyVaultProperties"`
	// The Geo-location where the resource lives
	Location string `pulumi:"location"`
	// Identifier for Azure Insights metrics
	MetricId string `pulumi:"metricId"`
	// Resource name
	Name string `pulumi:"name"`
	// ObjectId from the KeyVault
	PrincipalId *string `pulumi:"principalId"`
	// Provisioning state of the namespace.
	ProvisioningState string `pulumi:"provisioningState"`
	// Endpoint you can use to perform Service Bus operations.
	ServiceBusEndpoint string `pulumi:"serviceBusEndpoint"`
	// Properties of SKU
	Sku *SBSkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// TenantId from the KeyVault
	TenantId *string `pulumi:"tenantId"`
	// Resource type
	Type string `pulumi:"type"`
	// The time the namespace was updated.
	UpdatedAt string `pulumi:"updatedAt"`
	// Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones.
	ZoneRedundant *bool `pulumi:"zoneRedundant"`
}
