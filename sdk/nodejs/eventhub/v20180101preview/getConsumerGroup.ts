// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getConsumerGroup(args: GetConsumerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetConsumerGroupResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:eventhub/v20180101preview:getConsumerGroup", {
        "consumerGroupName": args.consumerGroupName,
        "eventHubName": args.eventHubName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConsumerGroupArgs {
    /**
     * The consumer group name
     */
    readonly consumerGroupName: string;
    /**
     * The Event Hub name
     */
    readonly eventHubName: string;
    /**
     * The Namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    readonly resourceGroupName: string;
}

/**
 * Single item in List or Get Consumer group operation
 */
export interface GetConsumerGroupResult {
    /**
     * Exact time the message was created.
     */
    readonly createdAt: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The exact time the message was updated.
     */
    readonly updatedAt: string;
    /**
     * User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.
     */
    readonly userMetadata?: string;
}
