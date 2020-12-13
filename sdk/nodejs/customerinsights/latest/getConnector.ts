// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getConnector(args: GetConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:customerinsights/latest:getConnector", {
        "connectorName": args.connectorName,
        "hubName": args.hubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectorArgs {
    /**
     * The name of the connector.
     */
    readonly connectorName: string;
    /**
     * The name of the hub.
     */
    readonly hubName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * The connector resource format.
 */
export interface GetConnectorResult {
    /**
     * ID of the connector.
     */
    readonly connectorId: number;
    /**
     * Name of the connector.
     */
    readonly connectorName?: string;
    /**
     * The connector properties.
     */
    readonly connectorProperties: {[key: string]: any};
    /**
     * Type of connector.
     */
    readonly connectorType: string;
    /**
     * The created time.
     */
    readonly created: string;
    /**
     * Description of the connector.
     */
    readonly description?: string;
    /**
     * Display name of the connector.
     */
    readonly displayName?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * If this is an internal connector.
     */
    readonly isInternal?: boolean;
    /**
     * The last modified time.
     */
    readonly lastModified: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * State of connector.
     */
    readonly state: string;
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
