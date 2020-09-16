import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Definition of the module type.
 */
export declare class Module extends pulumi.CustomResource {
    /**
     * Get an existing Module resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Module;
    /**
     * Returns true if the given object is an instance of Module.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Module;
    /**
     * Gets or sets the activity count of the module.
     */
    readonly activityCount: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the contentLink of the module.
     */
    readonly contentLink: pulumi.Output<outputs.automation.v20151031.ContentLinkResponse | undefined>;
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the error info of the module.
     */
    readonly error: pulumi.Output<outputs.automation.v20151031.ModuleErrorInfoResponse | undefined>;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets or sets type of module, if its composite or not.
     */
    readonly isComposite: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the isGlobal flag of the module.
     */
    readonly isGlobal: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state of the module.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the size in bytes of the module.
     */
    readonly sizeInBytes: pulumi.Output<number | undefined>;
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
     * Gets or sets the version of the module.
     */
    readonly version: pulumi.Output<string | undefined>;
    /**
     * Create a Module resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ModuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Module resource.
 */
export interface ModuleArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the module content link.
     */
    readonly contentLink: pulumi.Input<inputs.automation.v20151031.ContentLink>;
    /**
     * Gets or sets the location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of module.
     */
    readonly moduleName: pulumi.Input<string>;
    /**
     * Gets or sets name of the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the tags attached to the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
