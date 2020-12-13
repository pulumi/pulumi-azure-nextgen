// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupManagedCluster(ctx *pulumi.Context, args *LookupManagedClusterArgs, opts ...pulumi.InvokeOption) (*LookupManagedClusterResult, error) {
	var rv LookupManagedClusterResult
	err := ctx.Invoke("azure-nextgen:containerservice/v20190201:getManagedCluster", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupManagedClusterArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the managed cluster resource.
	ResourceName string `pulumi:"resourceName"`
}

// Managed cluster.
type LookupManagedClusterResult struct {
	// Profile of Azure Active Directory configuration.
	AadProfile *ManagedClusterAADProfileResponse `pulumi:"aadProfile"`
	// Profile of managed cluster add-on.
	AddonProfiles map[string]ManagedClusterAddonProfileResponse `pulumi:"addonProfiles"`
	// Properties of the agent pool.
	AgentPoolProfiles []ManagedClusterAgentPoolProfileResponse `pulumi:"agentPoolProfiles"`
	// (PREVIEW) Authorized IP Ranges to kubernetes API server.
	ApiServerAuthorizedIPRanges []string `pulumi:"apiServerAuthorizedIPRanges"`
	// DNS prefix specified when creating the managed cluster.
	DnsPrefix *string `pulumi:"dnsPrefix"`
	// (DEPRECATING) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020. Learn more at aka.ms/aks/azpodpolicy.
	EnablePodSecurityPolicy *bool `pulumi:"enablePodSecurityPolicy"`
	// Whether to enable Kubernetes Role-Based Access Control.
	EnableRBAC *bool `pulumi:"enableRBAC"`
	// FQDN for the master pool.
	Fqdn string `pulumi:"fqdn"`
	// Resource Id
	Id string `pulumi:"id"`
	// Version of Kubernetes specified when creating the managed cluster.
	KubernetesVersion *string `pulumi:"kubernetesVersion"`
	// Profile for Linux VMs in the container service cluster.
	LinuxProfile *ContainerServiceLinuxProfileResponse `pulumi:"linuxProfile"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// Profile of network configuration.
	NetworkProfile *ContainerServiceNetworkProfileResponse `pulumi:"networkProfile"`
	// Name of the resource group containing agent pool nodes.
	NodeResourceGroup string `pulumi:"nodeResourceGroup"`
	// The current deployment or provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Information about a service principal identity for the cluster to use for manipulating Azure APIs.
	ServicePrincipalProfile *ManagedClusterServicePrincipalProfileResponse `pulumi:"servicePrincipalProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
