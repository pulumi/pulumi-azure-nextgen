import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Describes a hybrid machine.
 */
export declare class Machine extends pulumi.CustomResource {
    /**
     * Get an existing Machine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Machine;
    /**
     * Returns true if the given object is an instance of Machine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Machine;
    /**
     * The hybrid machine agent full version.
     */
    readonly agentVersion: pulumi.Output<string>;
    /**
     * Public Key that the client provides to be used during initial resource onboarding
     */
    readonly clientPublicKey: pulumi.Output<string | undefined>;
    /**
     * Specifies the hybrid machine display name.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Details about the error state.
     */
    readonly errorDetails: pulumi.Output<outputs.hybridcompute.v20191212.ErrorDetailResponse[]>;
    /**
     * Machine Extensions information
     */
    readonly extensions: pulumi.Output<outputs.hybridcompute.v20191212.MachineExtensionInstanceViewResponse[] | undefined>;
    readonly identity: pulumi.Output<outputs.hybridcompute.v20191212.MachineResponseIdentity | undefined>;
    /**
     * The time of the last status change.
     */
    readonly lastStatusChange: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Output<string>;
    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    readonly locationData: pulumi.Output<outputs.hybridcompute.v20191212.LocationDataResponse | undefined>;
    /**
     * Specifies the hybrid machine FQDN.
     */
    readonly machineFqdn: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Operating System running on the hybrid machine.
     */
    readonly osName: pulumi.Output<string>;
    /**
     * Specifies the operating system settings for the hybrid machine.
     */
    readonly osProfile: pulumi.Output<outputs.hybridcompute.v20191212.MachinePropertiesResponseOsProfile | undefined>;
    /**
     * The version of Operating System running on the hybrid machine.
     */
    readonly osVersion: pulumi.Output<string>;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The status of the hybrid machine agent.
     */
    readonly status: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Specifies the hybrid machine unique ID.
     */
    readonly vmId: pulumi.Output<string | undefined>;
    /**
     * Create a Machine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Machine resource.
 */
export interface MachineArgs {
    /**
     * Public Key that the client provides to be used during initial resource onboarding
     */
    readonly clientPublicKey?: pulumi.Input<string>;
    /**
     * Machine Extensions information
     */
    readonly extensions?: pulumi.Input<pulumi.Input<inputs.hybridcompute.v20191212.MachineExtensionInstanceView>[]>;
    readonly identity?: pulumi.Input<inputs.hybridcompute.v20191212.MachineIdentity>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Input<string>;
    /**
     * Metadata pertaining to the geographic location of the resource.
     */
    readonly locationData?: pulumi.Input<inputs.hybridcompute.v20191212.LocationData>;
    /**
     * The name of the hybrid machine.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the hybrid machine unique ID.
     */
    readonly vmId?: pulumi.Input<string>;
}
