import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Agent Pool.
 */
export declare class AgentPool extends pulumi.CustomResource {
    /**
     * Get an existing AgentPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AgentPool;
    /**
     * Returns true if the given object is an instance of AgentPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AgentPool;
    /**
     * Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
     */
    readonly availabilityZones: pulumi.Output<string[] | undefined>;
    /**
     * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
     */
    readonly count: pulumi.Output<number | undefined>;
    /**
     * Whether to enable auto-scaler
     */
    readonly enableAutoScaling: pulumi.Output<boolean | undefined>;
    /**
     * Enable public IP for nodes
     */
    readonly enableNodePublicIP: pulumi.Output<boolean | undefined>;
    /**
     * Maximum number of nodes for auto-scaling
     */
    readonly maxCount: pulumi.Output<number | undefined>;
    /**
     * Maximum number of pods that can run on a node.
     */
    readonly maxPods: pulumi.Output<number | undefined>;
    /**
     * Minimum number of nodes for auto-scaling
     */
    readonly minCount: pulumi.Output<number | undefined>;
    /**
     * AgentPoolMode represents mode of an agent pool
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Version of node image
     */
    readonly nodeImageVersion: pulumi.Output<string>;
    /**
     * Agent pool node labels to be persisted across all nodes in agent pool.
     */
    readonly nodeLabels: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    readonly nodeTaints: pulumi.Output<string[] | undefined>;
    /**
     * Version of orchestrator specified when creating the managed cluster.
     */
    readonly orchestratorVersion: pulumi.Output<string | undefined>;
    /**
     * OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
     */
    readonly osDiskSizeGB: pulumi.Output<number | undefined>;
    /**
     * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
     */
    readonly osType: pulumi.Output<string | undefined>;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The ID for Proximity Placement Group.
     */
    readonly proximityPlacementGroupID: pulumi.Output<string | undefined>;
    /**
     * ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
     */
    readonly scaleSetEvictionPolicy: pulumi.Output<string | undefined>;
    /**
     * ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
     */
    readonly scaleSetPriority: pulumi.Output<string | undefined>;
    /**
     * SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
     */
    readonly spotMaxPrice: pulumi.Output<number | undefined>;
    /**
     * Agent pool tags to be persisted on the agent pool virtual machine scale set.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * AgentPoolType represents types of an agent pool
     */
    readonly type: pulumi.Output<string>;
    /**
     * Settings for upgrading the agentpool
     */
    readonly upgradeSettings: pulumi.Output<outputs.containerservice.v20200701.AgentPoolUpgradeSettingsResponse | undefined>;
    /**
     * Size of agent VMs.
     */
    readonly vmSize: pulumi.Output<string | undefined>;
    /**
     * VNet SubnetID specifies the VNet's subnet identifier.
     */
    readonly vnetSubnetID: pulumi.Output<string | undefined>;
    /**
     * Create a AgentPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AgentPoolArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AgentPool resource.
 */
export interface AgentPoolArgs {
    /**
     * The name of the agent pool.
     */
    readonly agentPoolName: pulumi.Input<string>;
    /**
     * Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
     */
    readonly availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
     */
    readonly count?: pulumi.Input<number>;
    /**
     * Whether to enable auto-scaler
     */
    readonly enableAutoScaling?: pulumi.Input<boolean>;
    /**
     * Enable public IP for nodes
     */
    readonly enableNodePublicIP?: pulumi.Input<boolean>;
    /**
     * Maximum number of nodes for auto-scaling
     */
    readonly maxCount?: pulumi.Input<number>;
    /**
     * Maximum number of pods that can run on a node.
     */
    readonly maxPods?: pulumi.Input<number>;
    /**
     * Minimum number of nodes for auto-scaling
     */
    readonly minCount?: pulumi.Input<number>;
    /**
     * AgentPoolMode represents mode of an agent pool
     */
    readonly mode?: pulumi.Input<string>;
    /**
     * Agent pool node labels to be persisted across all nodes in agent pool.
     */
    readonly nodeLabels?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    readonly nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version of orchestrator specified when creating the managed cluster.
     */
    readonly orchestratorVersion?: pulumi.Input<string>;
    /**
     * OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
     */
    readonly osDiskSizeGB?: pulumi.Input<number>;
    /**
     * OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
     */
    readonly osType?: pulumi.Input<string>;
    /**
     * The ID for Proximity Placement Group.
     */
    readonly proximityPlacementGroupID?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
     */
    readonly scaleSetEvictionPolicy?: pulumi.Input<string>;
    /**
     * ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
     */
    readonly scaleSetPriority?: pulumi.Input<string>;
    /**
     * SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
     */
    readonly spotMaxPrice?: pulumi.Input<number>;
    /**
     * Agent pool tags to be persisted on the agent pool virtual machine scale set.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * AgentPoolType represents types of an agent pool
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Settings for upgrading the agentpool
     */
    readonly upgradeSettings?: pulumi.Input<inputs.containerservice.v20200701.AgentPoolUpgradeSettings>;
    /**
     * Size of agent VMs.
     */
    readonly vmSize?: pulumi.Input<string>;
    /**
     * VNet SubnetID specifies the VNet's subnet identifier.
     */
    readonly vnetSubnetID?: pulumi.Input<string>;
}
