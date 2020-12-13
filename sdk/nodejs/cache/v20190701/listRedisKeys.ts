// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listRedisKeys(args: ListRedisKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListRedisKeysResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:cache/v20190701:listRedisKeys", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListRedisKeysArgs {
    /**
     * The name of the Redis cache.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Redis cache access keys.
 */
export interface ListRedisKeysResult {
    /**
     * The current primary key that clients can use to authenticate with Redis cache.
     */
    readonly primaryKey: string;
    /**
     * The current secondary key that clients can use to authenticate with Redis cache.
     */
    readonly secondaryKey: string;
}
