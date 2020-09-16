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
    readonly agentPoolProfiles?: outputs.containerservice.v20170701.ContainerServiceAgentPoolProfileResponse[];
    /**
     * Properties to configure a custom container service cluster.
     */
    readonly customProfile?: outputs.containerservice.v20170701.ContainerServiceCustomProfileResponse;
    /**
     * Profile for diagnostics in the container service cluster.
     */
    readonly diagnosticsProfile?: outputs.containerservice.v20170701.ContainerServiceDiagnosticsProfileResponse;
    /**
     * Profile for Linux VMs in the container service cluster.
     */
    readonly linuxProfile: outputs.containerservice.v20170701.ContainerServiceLinuxProfileResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Profile for the container service master.
     */
    readonly masterProfile: outputs.containerservice.v20170701.ContainerServiceMasterProfileResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Profile for the container service orchestrator.
     */
    readonly orchestratorProfile: outputs.containerservice.v20170701.ContainerServiceOrchestratorProfileResponse;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs. Exact one of secret or keyVaultSecretRef need to be specified.
     */
    readonly servicePrincipalProfile?: outputs.containerservice.v20170701.ContainerServiceServicePrincipalProfileResponse;
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
     * Profile for Windows VMs in the container service cluster.
     */
    readonly windowsProfile?: outputs.containerservice.v20170701.ContainerServiceWindowsProfileResponse;
}
