// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getJobDefinition(args: GetJobDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetJobDefinitionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:hybriddata/latest:getJobDefinition", {
        "dataManagerName": args.dataManagerName,
        "dataServiceName": args.dataServiceName,
        "jobDefinitionName": args.jobDefinitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobDefinitionArgs {
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    readonly dataManagerName: string;
    /**
     * The data service name of the job definition
     */
    readonly dataServiceName: string;
    /**
     * The job definition name that is being queried.
     */
    readonly jobDefinitionName: string;
    /**
     * The Resource Group Name
     */
    readonly resourceGroupName: string;
}

/**
 * Job Definition.
 */
export interface GetJobDefinitionResult {
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    readonly customerSecrets?: outputs.hybriddata.latest.CustomerSecretResponse[];
    /**
     * A generic json used differently by each data service type.
     */
    readonly dataServiceInput?: any;
    /**
     * Data Sink Id associated to the job definition.
     */
    readonly dataSinkId: string;
    /**
     * Data Source Id associated to the job definition.
     */
    readonly dataSourceId: string;
    /**
     * Id of the object.
     */
    readonly id: string;
    /**
     * Last modified time of the job definition.
     */
    readonly lastModifiedTime?: string;
    /**
     * Name of the object.
     */
    readonly name: string;
    /**
     * This is the preferred geo location for the job to run.
     */
    readonly runLocation?: string;
    /**
     * Schedule for running the job definition
     */
    readonly schedules?: outputs.hybriddata.latest.ScheduleResponse[];
    /**
     * State of the job definition.
     */
    readonly state: string;
    /**
     * Type of the object.
     */
    readonly type: string;
    /**
     * Enum to detect if user confirmation is required. If not passed will default to NotRequired.
     */
    readonly userConfirmation?: string;
}
