import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getTrigger(args: GetTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetTriggerResult>;
export interface GetTriggerArgs {
    /**
     * The factory name.
     */
    readonly factoryName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The trigger name.
     */
    readonly triggerName: string;
}
/**
 * Trigger resource type.
 */
export interface GetTriggerResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Properties of the trigger.
     */
    readonly properties: outputs.datafactory.v20180601.TriggerResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
