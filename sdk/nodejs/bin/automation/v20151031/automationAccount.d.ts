import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Definition of the automation account type.
 */
export declare class AutomationAccount extends pulumi.CustomResource {
    /**
     * Get an existing AutomationAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AutomationAccount;
    /**
     * Returns true if the given object is an instance of AutomationAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AutomationAccount;
    /**
     * Gets the creation time.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the last modified by.
     */
    readonly lastModifiedBy: pulumi.Output<string | undefined>;
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the SKU of account.
     */
    readonly sku: pulumi.Output<outputs.automation.v20151031.SkuResponse | undefined>;
    /**
     * Gets status of account.
     */
    readonly state: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a AutomationAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutomationAccountArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AutomationAccount resource.
 */
export interface AutomationAccountArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets or sets name of the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets account SKU.
     */
    readonly sku?: pulumi.Input<inputs.automation.v20151031.Sku>;
    /**
     * Gets or sets the tags attached to the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
