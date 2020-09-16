import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The StorSimple Manager
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
     * Specifies if the Manager is Garda or Helsinki
     */
    readonly cisIntrinsicSettings: pulumi.Output<outputs.storsimple.v20161001.ManagerIntrinsicSettingsResponse | undefined>;
    /**
     * ETag of the Manager
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The Geo location of the Manager
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Resource Name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Specifies the Sku
     */
    readonly sku: pulumi.Output<outputs.storsimple.v20161001.ManagerSkuResponse | undefined>;
    /**
     * Tags attached to the Manager
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Resource type
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
     * Specifies if the Manager is Garda or Helsinki
     */
    readonly cisIntrinsicSettings?: pulumi.Input<inputs.storsimple.v20161001.ManagerIntrinsicSettings>;
    /**
     * ETag of the Manager
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The Geo location of the Manager
     */
    readonly location: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the Sku
     */
    readonly sku?: pulumi.Input<inputs.storsimple.v20161001.ManagerSku>;
    /**
     * Tags attached to the Manager
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
