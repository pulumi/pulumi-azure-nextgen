import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Definition of the runbook type.
 */
export declare class Runbook extends pulumi.CustomResource {
    /**
     * Get an existing Runbook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Runbook;
    /**
     * Returns true if the given object is an instance of Runbook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Runbook;
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the draft runbook properties.
     */
    readonly draft: pulumi.Output<outputs.automation.v20151031.RunbookDraftResponse | undefined>;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the job count of the runbook.
     */
    readonly jobCount: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the last modified by.
     */
    readonly lastModifiedBy: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the option to log activity trace of the runbook.
     */
    readonly logActivityTrace: pulumi.Output<number | undefined>;
    /**
     * Gets or sets progress log option.
     */
    readonly logProgress: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets verbose log option.
     */
    readonly logVerbose: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the runbook output types.
     */
    readonly outputTypes: pulumi.Output<string[] | undefined>;
    /**
     * Gets or sets the runbook parameters.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: outputs.automation.v20151031.RunbookParameterResponse;
    } | undefined>;
    /**
     * Gets or sets the provisioning state of the runbook.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the published runbook content link.
     */
    readonly publishContentLink: pulumi.Output<outputs.automation.v20151031.ContentLinkResponse | undefined>;
    /**
     * Gets or sets the type of the runbook.
     */
    readonly runbookType: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the state of the runbook.
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
     * Create a Runbook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RunbookArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Runbook resource.
 */
export interface RunbookArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the description of the runbook.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Gets or sets the draft runbook properties.
     */
    readonly draft?: pulumi.Input<inputs.automation.v20151031.RunbookDraft>;
    /**
     * Gets or sets the location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets or sets the activity-level tracing options of the runbook.
     */
    readonly logActivityTrace?: pulumi.Input<number>;
    /**
     * Gets or sets progress log option.
     */
    readonly logProgress?: pulumi.Input<boolean>;
    /**
     * Gets or sets verbose log option.
     */
    readonly logVerbose?: pulumi.Input<boolean>;
    /**
     * Gets or sets the name of the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Gets or sets the published runbook content link.
     */
    readonly publishContentLink?: pulumi.Input<inputs.automation.v20151031.ContentLink>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The runbook name.
     */
    readonly runbookName: pulumi.Input<string>;
    /**
     * Gets or sets the type of the runbook.
     */
    readonly runbookType: pulumi.Input<string>;
    /**
     * Gets or sets the tags attached to the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
