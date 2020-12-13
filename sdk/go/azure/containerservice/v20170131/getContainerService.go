// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170131

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupContainerService(ctx *pulumi.Context, args *LookupContainerServiceArgs, opts ...pulumi.InvokeOption) (*LookupContainerServiceResult, error) {
	var rv LookupContainerServiceResult
	err := ctx.Invoke("azure-nextgen:containerservice/v20170131:getContainerService", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupContainerServiceArgs struct {
	// The name of the container service in the specified subscription and resource group.
	ContainerServiceName string `pulumi:"containerServiceName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Container service.
type LookupContainerServiceResult struct {
	// Properties of the agent pool.
	AgentPoolProfiles []ContainerServiceAgentPoolProfileResponse `pulumi:"agentPoolProfiles"`
	// Properties for custom clusters.
	CustomProfile *ContainerServiceCustomProfileResponse `pulumi:"customProfile"`
	// Properties of the diagnostic agent.
	DiagnosticsProfile *ContainerServiceDiagnosticsProfileResponse `pulumi:"diagnosticsProfile"`
	// Resource Id
	Id string `pulumi:"id"`
	// Properties of Linux VMs.
	LinuxProfile ContainerServiceLinuxProfileResponse `pulumi:"linuxProfile"`
	// Resource location
	Location string `pulumi:"location"`
	// Properties of master agents.
	MasterProfile ContainerServiceMasterProfileResponse `pulumi:"masterProfile"`
	// Resource name
	Name string `pulumi:"name"`
	// Properties of the orchestrator.
	OrchestratorProfile *ContainerServiceOrchestratorProfileResponse `pulumi:"orchestratorProfile"`
	// the current deployment or provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Properties for cluster service principals.
	ServicePrincipalProfile *ContainerServiceServicePrincipalProfileResponse `pulumi:"servicePrincipalProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
	// Properties of Windows VMs.
	WindowsProfile *ContainerServiceWindowsProfileResponse `pulumi:"windowsProfile"`
}
