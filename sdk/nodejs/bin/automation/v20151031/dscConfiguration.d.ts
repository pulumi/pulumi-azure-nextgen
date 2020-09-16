import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Definition of the configuration type.
 */
export declare class DscConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing DscConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DscConfiguration;
    /**
     * Returns true if the given object is an instance of DscConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DscConfiguration;
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the job count of the configuration.
     */
    readonly jobCount: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets or sets verbose log option.
     */
    readonly logVerbose: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets the number of compiled node configurations.
     */
    readonly nodeConfigurationCount: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the configuration parameters.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: outputs.automation.v20151031.DscConfigurationParameterResponse;
    } | undefined>;
    /**
     * Gets or sets the provisioning state of the configuration.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the source.
     */
    readonly source: pulumi.Output<outputs.automation.v20151031.ContentSourceResponse | undefined>;
    /**
     * Gets or sets the state of the configuration.
     */
    readonly state: pulumi.Output<string | undefined>;
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
     * Create a DscConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DscConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DscConfiguration resource.
 */
export interface DscConfigurationArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * The create or update parameters for configuration.
     */
    readonly configurationName: pulumi.Input<string>;
    /**
     * Gets or sets the description of the configuration.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Gets or sets the location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets or sets progress log option.
     */
    readonly logProgress?: pulumi.Input<boolean>;
    /**
     * Gets or sets verbose log option.
     */
    readonly logVerbose?: pulumi.Input<boolean>;
    /**
     * Gets or sets name of the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Gets or sets the configuration parameters.
     */
    readonly parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.automation.v20151031.DscConfigurationParameter>;
    }>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the source.
     */
    readonly source: pulumi.Input<inputs.automation.v20151031.ContentSource>;
    /**
     * Gets or sets the tags attached to the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
