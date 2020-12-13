// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApplication(ctx *pulumi.Context, args *LookupApplicationArgs, opts ...pulumi.InvokeOption) (*LookupApplicationResult, error) {
	var rv LookupApplicationResult
	err := ctx.Invoke("azure-nextgen:servicefabric/v20191101preview:getApplication", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApplicationArgs struct {
	// The name of the application resource.
	ApplicationName string `pulumi:"applicationName"`
	// The name of the cluster resource.
	ClusterName string `pulumi:"clusterName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The application resource.
type LookupApplicationResult struct {
	// Azure resource etag.
	Etag string `pulumi:"etag"`
	// Azure resource identifier.
	Id string `pulumi:"id"`
	// Describes the managed identities for an Azure resource.
	Identity *ManagedIdentityResponse `pulumi:"identity"`
	// It will be deprecated in New API, resource location depends on the parent resource.
	Location *string `pulumi:"location"`
	// List of user assigned identities for the application, each mapped to a friendly name.
	ManagedIdentities []ApplicationUserAssignedIdentityResponse `pulumi:"managedIdentities"`
	// The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
	MaximumNodes *int `pulumi:"maximumNodes"`
	// List of application capacity metric description.
	Metrics []ApplicationMetricDescriptionResponse `pulumi:"metrics"`
	// The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
	MinimumNodes *int `pulumi:"minimumNodes"`
	// Azure resource name.
	Name string `pulumi:"name"`
	// List of application parameters with overridden values from their default values specified in the application manifest.
	Parameters map[string]string `pulumi:"parameters"`
	// The current deployment or provisioning state, which only appears in the response
	ProvisioningState string `pulumi:"provisioningState"`
	// Remove the current application capacity settings.
	RemoveApplicationCapacity *bool `pulumi:"removeApplicationCapacity"`
	// Azure resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Azure resource type.
	Type string `pulumi:"type"`
	// The application type name as defined in the application manifest.
	TypeName *string `pulumi:"typeName"`
	// The version of the application type as defined in the application manifest.
	TypeVersion *string `pulumi:"typeVersion"`
	// Describes the policy for a monitored application upgrade.
	UpgradePolicy *ApplicationUpgradePolicyResponse `pulumi:"upgradePolicy"`
}
