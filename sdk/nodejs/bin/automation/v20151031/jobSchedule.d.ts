import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Definition of the job schedule.
 */
export declare class JobSchedule extends pulumi.CustomResource {
    /**
     * Get an existing JobSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobSchedule;
    /**
     * Returns true if the given object is an instance of JobSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is JobSchedule;
    /**
     * Gets or sets the id of job schedule.
     */
    readonly jobScheduleId: pulumi.Output<string | undefined>;
    /**
     * Gets the name of the variable.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the parameters of the job schedule.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets or sets the hybrid worker group that the scheduled job should run on.
     */
    readonly runOn: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the runbook.
     */
    readonly runbook: pulumi.Output<outputs.automation.v20151031.RunbookAssociationPropertyResponse | undefined>;
    /**
     * Gets or sets the schedule.
     */
    readonly schedule: pulumi.Output<outputs.automation.v20151031.ScheduleAssociationPropertyResponse | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a JobSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobScheduleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a JobSchedule resource.
 */
export interface JobScheduleArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * The job schedule name.
     */
    readonly jobScheduleId: pulumi.Input<string>;
    /**
     * Gets or sets a list of job properties.
     */
    readonly parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the hybrid worker group that the scheduled job should run on.
     */
    readonly runOn?: pulumi.Input<string>;
    /**
     * Gets or sets the runbook.
     */
    readonly runbook: pulumi.Input<inputs.automation.v20151031.RunbookAssociationProperty>;
    /**
     * Gets or sets the schedule.
     */
    readonly schedule: pulumi.Input<inputs.automation.v20151031.ScheduleAssociationProperty>;
}
