import * as pulumi from "@pulumi/pulumi";
export declare function getTrigger(args: GetTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetTriggerResult>;
export interface GetTriggerArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The trigger name.
     */
    readonly name: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Trigger details.
 */
export interface GetTriggerResult {
    /**
     * Trigger Kind.
     */
    readonly kind: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
