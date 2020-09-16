import * as pulumi from "@pulumi/pulumi";
export declare function getTrigger(args: GetTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetTriggerResult>;
export interface GetTriggerArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the shareSubscription.
     */
    readonly shareSubscriptionName: string;
    /**
     * The name of the trigger.
     */
    readonly triggerName: string;
}
/**
 * A Trigger data transfer object.
 */
export interface GetTriggerResult {
    /**
     * Kind of synchronization
     */
    readonly kind: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
