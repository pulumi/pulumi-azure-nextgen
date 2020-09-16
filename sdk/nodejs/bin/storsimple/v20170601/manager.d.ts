import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The StorSimple Manager.
 */
export declare class Manager extends pulumi.CustomResource {
    /**
     * Get an existing Manager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Manager;
    /**
     * Returns true if the given object is an instance of Manager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Manager;
    /**
     * Represents the type of StorSimple Manager.
     */
    readonly cisIntrinsicSettings: pulumi.Output<outputs.storsimple.v20170601.ManagerIntrinsicSettingsResponse | undefined>;
    /**
     * The etag of the manager.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The geo location of the resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Specifies the Sku.
     */
    readonly sku: pulumi.Output<outputs.storsimple.v20170601.ManagerSkuResponse | undefined>;
    /**
     * The tags attached to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Manager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Manager resource.
 */
export interface ManagerArgs {
    /**
     * Represents the type of StorSimple Manager.
     */
    readonly cisIntrinsicSettings?: pulumi.Input<inputs.storsimple.v20170601.ManagerIntrinsicSettings>;
    /**
     * The etag of the manager.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The geo location of the resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the Sku.
     */
    readonly sku?: pulumi.Input<inputs.storsimple.v20170601.ManagerSku>;
    /**
     * The tags attached to the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
