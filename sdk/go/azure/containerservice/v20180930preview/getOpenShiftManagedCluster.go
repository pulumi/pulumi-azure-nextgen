// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180930preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupOpenShiftManagedCluster(ctx *pulumi.Context, args *LookupOpenShiftManagedClusterArgs, opts ...pulumi.InvokeOption) (*LookupOpenShiftManagedClusterResult, error) {
	var rv LookupOpenShiftManagedClusterResult
	err := ctx.Invoke("azure-nextgen:containerservice/v20180930preview:getOpenShiftManagedCluster", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupOpenShiftManagedClusterArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the OpenShift managed cluster resource.
	ResourceName string `pulumi:"resourceName"`
}

// OpenShift Managed cluster.
type LookupOpenShiftManagedClusterResult struct {
	// Configuration of OpenShift cluster VMs.
	AgentPoolProfiles []OpenShiftManagedClusterAgentPoolProfileResponse `pulumi:"agentPoolProfiles"`
	// Configures OpenShift authentication.
	AuthProfile *OpenShiftManagedClusterAuthProfileResponse `pulumi:"authProfile"`
	// User-specified FQDN for OpenShift API server loadbalancer internal hostname.
	Fqdn *string `pulumi:"fqdn"`
	// Resource Id
	Id string `pulumi:"id"`
	// Resource location
	Location string `pulumi:"location"`
	// Configuration for OpenShift master VMs.
	MasterPoolProfile *OpenShiftManagedClusterMasterPoolProfileResponse `pulumi:"masterPoolProfile"`
	// Resource name
	Name string `pulumi:"name"`
	// Configuration for OpenShift networking.
	NetworkProfile *NetworkProfileResponse `pulumi:"networkProfile"`
	// Version of OpenShift specified when creating the cluster.
	OpenShiftVersion string `pulumi:"openShiftVersion"`
	// Define the resource plan as required by ARM for billing purposes
	Plan *PurchasePlanResponse `pulumi:"plan"`
	// The current deployment or provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Optional user-specified FQDN for OpenShift API server.
	PublicHostname *string `pulumi:"publicHostname"`
	// Configuration for OpenShift router(s).
	RouterProfiles []OpenShiftRouterProfileResponse `pulumi:"routerProfiles"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
