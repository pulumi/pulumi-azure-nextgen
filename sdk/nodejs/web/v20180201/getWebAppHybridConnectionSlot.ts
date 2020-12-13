// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getWebAppHybridConnectionSlot(args: GetWebAppHybridConnectionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppHybridConnectionSlotResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:web/v20180201:getWebAppHybridConnectionSlot", {
        "name": args.name,
        "namespaceName": args.namespaceName,
        "relayName": args.relayName,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppHybridConnectionSlotArgs {
    /**
     * The name of the web app.
     */
    readonly name: string;
    /**
     * The namespace for this hybrid connection.
     */
    readonly namespaceName: string;
    /**
     * The relay name for this hybrid connection.
     */
    readonly relayName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the slot for the web app.
     */
    readonly slot: string;
}

/**
 * Hybrid Connection contract. This is used to configure a Hybrid Connection.
 */
export interface GetWebAppHybridConnectionSlotResult {
    /**
     * The hostname of the endpoint.
     */
    readonly hostname?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * The port of the endpoint.
     */
    readonly port?: number;
    /**
     * The ARM URI to the Service Bus relay.
     */
    readonly relayArmUri?: string;
    /**
     * The name of the Service Bus relay.
     */
    readonly relayName?: string;
    /**
     * The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
     */
    readonly sendKeyName?: string;
    /**
     * The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
     * normally, use the POST /listKeys API instead.
     */
    readonly sendKeyValue?: string;
    /**
     * The name of the Service Bus namespace.
     */
    readonly serviceBusNamespace?: string;
    /**
     * The suffix for the service bus endpoint. By default this is .servicebus.windows.net
     */
    readonly serviceBusSuffix?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
