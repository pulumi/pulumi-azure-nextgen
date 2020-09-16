import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A DDoS custom policy in a resource group.
 */
export declare class DdosCustomPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DdosCustomPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DdosCustomPolicy;
    /**
     * Returns true if the given object is an instance of DdosCustomPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DdosCustomPolicy;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The protocol-specific DDoS policy customization parameters.
     */
    readonly protocolCustomSettings: pulumi.Output<outputs.network.v20190901.ProtocolCustomSettingsFormatResponse[] | undefined>;
    /**
     * The provisioning state of the DDoS custom policy resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
     */
    readonly publicIPAddresses: pulumi.Output<outputs.network.v20190901.SubResourceResponse[]>;
    /**
     * The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    readonly resourceGuid: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DdosCustomPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosCustomPolicyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DdosCustomPolicy resource.
 */
export interface DdosCustomPolicyArgs {
    /**
     * The name of the DDoS custom policy.
     */
    readonly ddosCustomPolicyName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The protocol-specific DDoS policy customization parameters.
     */
    readonly protocolCustomSettings?: pulumi.Input<pulumi.Input<inputs.network.v20190901.ProtocolCustomSettingsFormat>[]>;
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
}
