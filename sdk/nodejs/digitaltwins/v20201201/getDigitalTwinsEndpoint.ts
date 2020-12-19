// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getDigitalTwinsEndpoint(args: GetDigitalTwinsEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetDigitalTwinsEndpointResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:digitaltwins/v20201201:getDigitalTwinsEndpoint", {
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetDigitalTwinsEndpointArgs {
    /**
     * Name of Endpoint Resource.
     */
    readonly endpointName: string;
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the DigitalTwinsInstance.
     */
    readonly resourceName: string;
}

/**
 * DigitalTwinsInstance endpoint resource.
 */
export interface GetDigitalTwinsEndpointResult {
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Extension resource name.
     */
    readonly name: string;
    /**
     * DigitalTwinsInstance endpoint resource properties.
     */
    readonly properties: outputs.digitaltwins.v20201201.EventGridResponse | outputs.digitaltwins.v20201201.EventHubResponse | outputs.digitaltwins.v20201201.ServiceBusResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
