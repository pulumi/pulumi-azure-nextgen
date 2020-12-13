// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getConnectionType(args: GetConnectionTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionTypeResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:automation/v20151031:getConnectionType", {
        "automationAccountName": args.automationAccountName,
        "connectionTypeName": args.connectionTypeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectionTypeArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * The name of connection type.
     */
    readonly connectionTypeName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Definition of the connection type.
 */
export interface GetConnectionTypeResult {
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets the field definitions of the connection type.
     */
    readonly fieldDefinitions: {[key: string]: outputs.automation.v20151031.FieldDefinitionResponse};
    /**
     * Gets the id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets a Boolean value to indicate if the connection type is global.
     */
    readonly isGlobal?: boolean;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * Gets the name of the connection type.
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}
