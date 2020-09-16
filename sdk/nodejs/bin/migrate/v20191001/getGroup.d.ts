import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getGroup(args: GetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupResult>;
export interface GetGroupArgs {
    /**
     * Unique name of a group within a project.
     */
    readonly groupName: string;
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: string;
}
/**
 * A group created in a Migration project.
 */
export interface GetGroupResult {
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: string;
    /**
     * Name of the group.
     */
    readonly name: string;
    /**
     * Properties of the group.
     */
    readonly properties: outputs.migrate.v20191001.GroupPropertiesResponse;
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects/groups].
     */
    readonly type: string;
}
