// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190916preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupMultipleActivationKey(ctx *pulumi.Context, args *LookupMultipleActivationKeyArgs, opts ...pulumi.InvokeOption) (*LookupMultipleActivationKeyResult, error) {
	var rv LookupMultipleActivationKeyResult
	err := ctx.Invoke("azure-nextgen:windowsesu/v20190916preview:getMultipleActivationKey", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupMultipleActivationKeyArgs struct {
	// The name of the MAK key.
	MultipleActivationKeyName string `pulumi:"multipleActivationKeyName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// MAK key details.
type LookupMultipleActivationKeyResult struct {
	// Agreement number under which the key is requested.
	AgreementNumber *string `pulumi:"agreementNumber"`
	// End of support of security updates activated by the MAK key.
	ExpirationDate string `pulumi:"expirationDate"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// Number of activations/servers using the MAK key.
	InstalledServerNumber *int `pulumi:"installedServerNumber"`
	// <code> true </code> if user has eligible on-premises Windows physical or virtual machines, and that the requested key will only be used in their organization; <code> false </code> otherwise.
	IsEligible *bool `pulumi:"isEligible"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// MAK 5x5 key.
	MultipleActivationKey string `pulumi:"multipleActivationKey"`
	// The name of the resource
	Name string `pulumi:"name"`
	// Type of OS for which the key is requested.
	OsType            *string `pulumi:"osType"`
	ProvisioningState string  `pulumi:"provisioningState"`
	// Type of support
	SupportType *string `pulumi:"supportType"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
