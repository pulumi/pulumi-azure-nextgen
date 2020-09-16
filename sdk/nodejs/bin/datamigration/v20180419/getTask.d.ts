import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getTask(args: GetTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetTaskResult>;
export interface GetTaskArgs {
    /**
     * Expand the response
     */
    readonly expand?: string;
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
    /**
     * Name of the Task
     */
    readonly taskName: string;
}
/**
 * A task resource
 */
export interface GetTaskResult {
    /**
     * HTTP strong entity tag value. This is ignored if submitted.
     */
    readonly etag?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Custom task properties
     */
    readonly properties: outputs.datamigration.v20180419.ProjectTaskPropertiesResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
