import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getJobSchedule(args: GetJobScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetJobScheduleResult>;
export interface GetJobScheduleArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * The job schedule name.
     */
    readonly jobScheduleId: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Definition of the job schedule.
 */
export interface GetJobScheduleResult {
    /**
     * Gets or sets the id of job schedule.
     */
    readonly jobScheduleId?: string;
    /**
     * Gets the name of the variable.
     */
    readonly name: string;
    /**
     * Gets or sets the parameters of the job schedule.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Gets or sets the hybrid worker group that the scheduled job should run on.
     */
    readonly runOn?: string;
    /**
     * Gets or sets the runbook.
     */
    readonly runbook?: outputs.automation.v20151031.RunbookAssociationPropertyResponse;
    /**
     * Gets or sets the schedule.
     */
    readonly schedule?: outputs.automation.v20151031.ScheduleAssociationPropertyResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
