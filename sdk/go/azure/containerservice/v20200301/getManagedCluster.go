// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupManagedCluster(ctx *pulumi.Context, args *LookupManagedClusterArgs, opts ...pulumi.InvokeOption) (*LookupManagedClusterResult, error) {
	var rv LookupManagedClusterResult
	err := ctx.Invoke("azure-nextgen:containerservice/v20200301:getManagedCluster", args, &rv, opts...)
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
	// Access profile for managed cluster API server.
	ApiServerAccessProfile *ManagedClusterAPIServerAccessProfileResponse `pulumi:"apiServerAccessProfile"`
	// Parameters to be applied to the cluster-autoscaler when enabled
	AutoScalerProfile *ManagedClusterPropertiesResponseAutoScalerProfile `pulumi:"autoScalerProfile"`
	// ResourceId of the disk encryption set to use for enabling encryption at rest.
	DiskEncryptionSetID *string `pulumi:"diskEncryptionSetID"`
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
	// The identity of the managed cluster, if configured.
	Identity *ManagedClusterIdentityResponse `pulumi:"identity"`
	// Identities associated with the cluster.
	IdentityProfile map[string]ManagedClusterPropertiesResponseIdentityProfile `pulumi:"identityProfile"`
	// Version of Kubernetes specified when creating the managed cluster.
	KubernetesVersion *string `pulumi:"kubernetesVersion"`
	// Profile for Linux VMs in the container service cluster.
	LinuxProfile *ContainerServiceLinuxProfileResponse `pulumi:"linuxProfile"`
	// Resource location
	Location string `pulumi:"location"`
	// The max number of agent pools for the managed cluster.
	MaxAgentPools int `pulumi:"maxAgentPools"`
	// Resource name
	Name string `pulumi:"name"`
	// Profile of network configuration.
	NetworkProfile *ContainerServiceNetworkProfileResponse `pulumi:"networkProfile"`
	// Name of the resource group containing agent pool nodes.
	NodeResourceGroup *string `pulumi:"nodeResourceGroup"`
	// FQDN of private cluster.
	PrivateFQDN string `pulumi:"privateFQDN"`
	// The current deployment or provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Information about a service principal identity for the cluster to use for manipulating Azure APIs.
	ServicePrincipalProfile *ManagedClusterServicePrincipalProfileResponse `pulumi:"servicePrincipalProfile"`
	// The managed cluster SKU.
	Sku *ManagedClusterSKUResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
	// Profile for Windows VMs in the container service cluster.
	WindowsProfile *ManagedClusterWindowsProfileResponse `pulumi:"windowsProfile"`
}
