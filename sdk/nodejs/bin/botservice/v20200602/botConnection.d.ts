import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Bot channel resource definition
 */
export declare class BotConnection extends pulumi.CustomResource {
    /**
     * Get an existing BotConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BotConnection;
    /**
     * Returns true if the given object is an instance of BotConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BotConnection;
    /**
     * Entity Tag
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Specifies the location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The set of properties specific to bot channel resource
     */
    readonly properties: pulumi.Output<outputs.botservice.v20200602.ConnectionSettingPropertiesResponse>;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku: pulumi.Output<outputs.botservice.v20200602.SkuResponse | undefined>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a BotConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BotConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a BotConnection resource.
 */
export interface BotConnectionArgs {
    /**
     * The name of the Bot Service Connection Setting resource.
     */
    readonly connectionName: pulumi.Input<string>;
    /**
     * Entity Tag
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The set of properties specific to bot channel resource
     */
    readonly properties?: pulumi.Input<inputs.botservice.v20200602.ConnectionSettingProperties>;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Bot resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: pulumi.Input<inputs.botservice.v20200602.Sku>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
