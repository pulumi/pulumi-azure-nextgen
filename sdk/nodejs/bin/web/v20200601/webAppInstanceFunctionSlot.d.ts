import * as pulumi from "@pulumi/pulumi";
/**
 * Function information.
 */
export declare class WebAppInstanceFunctionSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppInstanceFunctionSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppInstanceFunctionSlot;
    /**
     * Returns true if the given object is an instance of WebAppInstanceFunctionSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppInstanceFunctionSlot;
    /**
     * Config information.
     */
    readonly config: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Config URI.
     */
    readonly configHref: pulumi.Output<string | undefined>;
    /**
     * File list.
     */
    readonly files: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Function App ID.
     */
    readonly functionAppId: pulumi.Output<string | undefined>;
    /**
     * Function URI.
     */
    readonly href: pulumi.Output<string | undefined>;
    /**
     * The invocation URL
     */
    readonly invokeUrlTemplate: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a value indicating whether the function is disabled
     */
    readonly isDisabled: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * The function language
     */
    readonly language: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Script URI.
     */
    readonly scriptHref: pulumi.Output<string | undefined>;
    /**
     * Script root path URI.
     */
    readonly scriptRootPathHref: pulumi.Output<string | undefined>;
    /**
     * Secrets file URI.
     */
    readonly secretsFileHref: pulumi.Output<string | undefined>;
    /**
     * Test data used when testing via the Azure Portal.
     */
    readonly testData: pulumi.Output<string | undefined>;
    /**
     * Test data URI.
     */
    readonly testDataHref: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a WebAppInstanceFunctionSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppInstanceFunctionSlotArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppInstanceFunctionSlot resource.
 */
export interface WebAppInstanceFunctionSlotArgs {
    /**
     * Config information.
     */
    readonly config?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Config URI.
     */
    readonly configHref?: pulumi.Input<string>;
    /**
     * File list.
     */
    readonly files?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Function App ID.
     */
    readonly functionAppId?: pulumi.Input<string>;
    /**
     * Function name.
     */
    readonly functionName: pulumi.Input<string>;
    /**
     * Function URI.
     */
    readonly href?: pulumi.Input<string>;
    /**
     * The invocation URL
     */
    readonly invokeUrlTemplate?: pulumi.Input<string>;
    /**
     * Gets or sets a value indicating whether the function is disabled
     */
    readonly isDisabled?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The function language
     */
    readonly language?: pulumi.Input<string>;
    /**
     * Site name.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Script URI.
     */
    readonly scriptHref?: pulumi.Input<string>;
    /**
     * Script root path URI.
     */
    readonly scriptRootPathHref?: pulumi.Input<string>;
    /**
     * Secrets file URI.
     */
    readonly secretsFileHref?: pulumi.Input<string>;
    /**
     * Name of the deployment slot.
     */
    readonly slot: pulumi.Input<string>;
    /**
     * Test data used when testing via the Azure Portal.
     */
    readonly testData?: pulumi.Input<string>;
    /**
     * Test data URI.
     */
    readonly testDataHref?: pulumi.Input<string>;
}
