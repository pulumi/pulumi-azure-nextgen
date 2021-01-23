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
    return pulumi.runtime.invoke("azure-nextgen:datafactory/v20180601:getTrigger", {
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
    readonly properties: outputs.datafactory.v20180601.BlobEventsTriggerResponse | outputs.datafactory.v20180601.BlobTriggerResponse | outputs.datafactory.v20180601.ChainingTriggerResponse | outputs.datafactory.v20180601.CustomEventsTriggerResponse | outputs.datafactory.v20180601.MultiplePipelineTriggerResponse | outputs.datafactory.v20180601.RerunTumblingWindowTriggerResponse | outputs.datafactory.v20180601.ScheduleTriggerResponse | outputs.datafactory.v20180601.TumblingWindowTriggerResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
