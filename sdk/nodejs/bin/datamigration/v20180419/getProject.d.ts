import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getProject(args: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult>;
export interface GetProjectArgs {
    /**
     * Name of the resource group
     */
    readonly groupName: string;
    /**
     * Name of the project
     */
    readonly projectName: string;
    /**
     * Name of the service
     */
    readonly serviceName: string;
}
/**
 * A project resource
 */
export interface GetProjectResult {
    /**
     * UTC Date and time when project was created
     */
    readonly creationTime: string;
    /**
     * List of DatabaseInfo
     */
    readonly databasesInfo?: outputs.datamigration.v20180419.DatabaseInfoResponse[];
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The project's provisioning state
     */
    readonly provisioningState: string;
    /**
     * Information for connecting to source
     */
    readonly sourceConnectionInfo?: outputs.datamigration.v20180419.ConnectionInfoResponse;
    /**
     * Source platform for the project
     */
    readonly sourcePlatform: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Information for connecting to target
     */
    readonly targetConnectionInfo?: outputs.datamigration.v20180419.ConnectionInfoResponse;
    /**
     * Target platform for the project
     */
    readonly targetPlatform: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
