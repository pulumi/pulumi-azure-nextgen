import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Specifies information about the Dedicated host.
 */
export declare class DedicatedHost extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedHost resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DedicatedHost;
    /**
     * Returns true if the given object is an instance of DedicatedHost.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DedicatedHost;
    /**
     * Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
     */
    readonly autoReplaceOnFailure: pulumi.Output<boolean | undefined>;
    /**
     * A unique id generated and assigned to the dedicated host by the platform. <br><br> Does not change throughout the lifetime of the host.
     */
    readonly hostId: pulumi.Output<string>;
    /**
     * The dedicated host instance view.
     */
    readonly instanceView: pulumi.Output<outputs.compute.v20190701.DedicatedHostInstanceViewResponse>;
    /**
     * Specifies the software license type that will be applied to the VMs deployed on the dedicated host. <br><br> Possible values are: <br><br> **None** <br><br> **Windows_Server_Hybrid** <br><br> **Windows_Server_Perpetual** <br><br> Default: **None**
     */
    readonly licenseType: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Fault domain of the dedicated host within a dedicated host group.
     */
    readonly platformFaultDomain: pulumi.Output<number | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The date when the host was first provisioned.
     */
    readonly provisioningTime: pulumi.Output<string>;
    /**
     * SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
     */
    readonly sku: pulumi.Output<outputs.compute.v20190701.SkuResponse>;
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
     * A list of references to all virtual machines in the Dedicated Host.
     */
    readonly virtualMachines: pulumi.Output<outputs.compute.v20190701.SubResourceReadOnlyResponse[]>;
    /**
     * Create a DedicatedHost resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedHostArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DedicatedHost resource.
 */
export interface DedicatedHostArgs {
    /**
     * Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
     */
    readonly autoReplaceOnFailure?: pulumi.Input<boolean>;
    /**
     * The name of the dedicated host group.
     */
    readonly hostGroupName: pulumi.Input<string>;
    /**
     * The name of the dedicated host .
     */
    readonly hostName: pulumi.Input<string>;
    /**
     * Specifies the software license type that will be applied to the VMs deployed on the dedicated host. <br><br> Possible values are: <br><br> **None** <br><br> **Windows_Server_Hybrid** <br><br> **Windows_Server_Perpetual** <br><br> Default: **None**
     */
    readonly licenseType?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Fault domain of the dedicated host within a dedicated host group.
     */
    readonly platformFaultDomain?: pulumi.Input<number>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
     */
    readonly sku: pulumi.Input<inputs.compute.v20190701.Sku>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
