// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupOpenShiftCluster(ctx *pulumi.Context, args *LookupOpenShiftClusterArgs, opts ...pulumi.InvokeOption) (*LookupOpenShiftClusterResult, error) {
	var rv LookupOpenShiftClusterResult
	err := ctx.Invoke("azure-nextgen:redhatopenshift/latest:getOpenShiftCluster", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupOpenShiftClusterArgs struct {
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the OpenShift cluster resource.
	ResourceName string `pulumi:"resourceName"`
}

// OpenShiftCluster represents an Azure Red Hat OpenShift cluster.
type LookupOpenShiftClusterResult struct {
	// The cluster API server profile.
	ApiserverProfile *APIServerProfileResponse `pulumi:"apiserverProfile"`
	// The cluster profile.
	ClusterProfile *ClusterProfileResponse `pulumi:"clusterProfile"`
	// The console profile.
	ConsoleProfile *ConsoleProfileResponse `pulumi:"consoleProfile"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The cluster ingress profiles.
	IngressProfiles []IngressProfileResponse `pulumi:"ingressProfiles"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The cluster master profile.
	MasterProfile *MasterProfileResponse `pulumi:"masterProfile"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The cluster network profile.
	NetworkProfile *NetworkProfileResponse `pulumi:"networkProfile"`
	// The cluster provisioning state (immutable).
	ProvisioningState *string `pulumi:"provisioningState"`
	// The cluster service principal profile.
	ServicePrincipalProfile *ServicePrincipalProfileResponse `pulumi:"servicePrincipalProfile"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
	// The cluster worker profiles.
	WorkerProfiles []WorkerProfileResponse `pulumi:"workerProfiles"`
}
