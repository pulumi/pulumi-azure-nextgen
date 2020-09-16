import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Container service.
 */
export declare class ContainerService extends pulumi.CustomResource {
    /**
     * Get an existing ContainerService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContainerService;
    /**
     * Returns true if the given object is an instance of ContainerService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ContainerService;
    /**
     * Properties of the agent pool.
     */
    readonly agentPoolProfiles: pulumi.Output<outputs.containerservice.v20160930.ContainerServiceAgentPoolProfileResponse[]>;
    /**
     * Properties for custom clusters.
     */
    readonly customProfile: pulumi.Output<outputs.containerservice.v20160930.ContainerServiceCustomProfileResponse | undefined>;
    /**
     * Properties of the diagnostic agent.
     */
    readonly diagnosticsProfile: pulumi.Output<outputs.containerservice.v20160930.ContainerServiceDiagnosticsProfileResponse | undefined>;
    /**
     * Properties of Linux VMs.
     */
    readonly linuxProfile: pulumi.Output<outputs.containerservice.v20160930.ContainerServiceLinuxProfileResponse>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Properties of master agents.
     */
    readonly masterProfile: pulumi.Output<outputs.containerservice.v20160930.ContainerServiceMasterProfileResponse>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties of the orchestrator.
     */
    readonly orchestratorProfile: pulumi.Output<outputs.containerservice.v20160930.ContainerServiceOrchestratorProfileResponse | undefined>;
    /**
     * the current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Properties for cluster service principals.
     */
    readonly servicePrincipalProfile: pulumi.Output<outputs.containerservice.v20160930.ContainerServiceServicePrincipalProfileResponse | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Properties of Windows VMs.
     */
    readonly windowsProfile: pulumi.Output<outputs.containerservice.v20160930.ContainerServiceWindowsProfileResponse | undefined>;
    /**
     * Create a ContainerService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ContainerService resource.
 */
export interface ContainerServiceArgs {
    /**
     * Properties of the agent pool.
     */
    readonly agentPoolProfiles: pulumi.Input<pulumi.Input<inputs.containerservice.v20160930.ContainerServiceAgentPoolProfile>[]>;
    /**
     * The name of the container service in the specified subscription and resource group.
     */
    readonly containerServiceName: pulumi.Input<string>;
    /**
     * Properties for custom clusters.
     */
    readonly customProfile?: pulumi.Input<inputs.containerservice.v20160930.ContainerServiceCustomProfile>;
    /**
     * Properties of the diagnostic agent.
     */
    readonly diagnosticsProfile?: pulumi.Input<inputs.containerservice.v20160930.ContainerServiceDiagnosticsProfile>;
    /**
     * Properties of Linux VMs.
     */
    readonly linuxProfile: pulumi.Input<inputs.containerservice.v20160930.ContainerServiceLinuxProfile>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Properties of master agents.
     */
    readonly masterProfile: pulumi.Input<inputs.containerservice.v20160930.ContainerServiceMasterProfile>;
    /**
     * Properties of the orchestrator.
     */
    readonly orchestratorProfile?: pulumi.Input<inputs.containerservice.v20160930.ContainerServiceOrchestratorProfile>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Properties for cluster service principals.
     */
    readonly servicePrincipalProfile?: pulumi.Input<inputs.containerservice.v20160930.ContainerServiceServicePrincipalProfile>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Properties of Windows VMs.
     */
    readonly windowsProfile?: pulumi.Input<inputs.containerservice.v20160930.ContainerServiceWindowsProfile>;
}
