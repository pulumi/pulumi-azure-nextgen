import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getContainerService(args: GetContainerServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerServiceResult>;
export interface GetContainerServiceArgs {
    /**
     * The name of the container service in the specified subscription and resource group.
     */
    readonly containerServiceName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Container service.
 */
export interface GetContainerServiceResult {
    /**
     * Properties of the agent pool.
     */
    readonly agentPoolProfiles: outputs.containerservice.v20160330.ContainerServiceAgentPoolProfileResponse[];
    /**
     * Properties of the diagnostic agent.
     */
    readonly diagnosticsProfile?: outputs.containerservice.v20160330.ContainerServiceDiagnosticsProfileResponse;
    /**
     * Properties of Linux VMs.
     */
    readonly linuxProfile: outputs.containerservice.v20160330.ContainerServiceLinuxProfileResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Properties of master agents.
     */
    readonly masterProfile: outputs.containerservice.v20160330.ContainerServiceMasterProfileResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Properties of the orchestrator.
     */
    readonly orchestratorProfile?: outputs.containerservice.v20160330.ContainerServiceOrchestratorProfileResponse;
    /**
     * the current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Properties of Windows VMs.
     */
    readonly windowsProfile?: outputs.containerservice.v20160330.ContainerServiceWindowsProfileResponse;
}
