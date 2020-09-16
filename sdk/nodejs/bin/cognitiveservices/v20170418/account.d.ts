import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Cognitive Services Account is an Azure resource representing the provisioned account, its type, location and SKU.
 */
export declare class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Account;
    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Account;
    /**
     * Entity Tag
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The identity of Cognitive Services account.
     */
    readonly identity: pulumi.Output<outputs.cognitiveservices.v20170418.IdentityResponse | undefined>;
    /**
     * The Kind of the resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * The location of the resource
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the created account
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties of Cognitive Services account.
     */
    readonly properties: pulumi.Output<outputs.cognitiveservices.v20170418.CognitiveServicesAccountPropertiesResponse>;
    /**
     * The SKU of Cognitive Services account.
     */
    readonly sku: pulumi.Output<outputs.cognitiveservices.v20170418.SkuResponse | undefined>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of Cognitive Services account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The identity of Cognitive Services account.
     */
    readonly identity?: pulumi.Input<inputs.cognitiveservices.v20170418.Identity>;
    /**
     * The Kind of the resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The location of the resource
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Properties of Cognitive Services account.
     */
    readonly properties?: pulumi.Input<inputs.cognitiveservices.v20170418.CognitiveServicesAccountProperties>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of Cognitive Services account.
     */
    readonly sku?: pulumi.Input<inputs.cognitiveservices.v20170418.Sku>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
