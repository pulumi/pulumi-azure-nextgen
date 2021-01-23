// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getTrigger(args: GetTriggerArgs, opts?: pulumi.InvokeOptions): Promise<GetTriggerResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:datafactory/latest:getTrigger", {
        "factoryName": args.factoryName,
        "resourceGroupName": args.resourceGroupName,
        "triggerName": args.triggerName,
    }, opts);
}

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
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Properties of the trigger.
     */
    readonly properties: outputs.datafactory.latest.BlobEventsTriggerResponse | outputs.datafactory.latest.BlobTriggerResponse | outputs.datafactory.latest.ChainingTriggerResponse | outputs.datafactory.latest.CustomEventsTriggerResponse | outputs.datafactory.latest.MultiplePipelineTriggerResponse | outputs.datafactory.latest.RerunTumblingWindowTriggerResponse | outputs.datafactory.latest.ScheduleTriggerResponse | outputs.datafactory.latest.TumblingWindowTriggerResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
