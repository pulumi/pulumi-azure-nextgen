import * as pulumi from "@pulumi/pulumi";
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
     * List of References to Assessments created on this group.
     */
    readonly assessments: string[];
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    readonly createdTimestamp: string;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: string;
    /**
     * List of machine names that are part of this group.
     */
    readonly machines: string[];
    /**
     * Name of the group.
     */
    readonly name: string;
    /**
     * Type of the object = [Microsoft.Migrate/projects/groups].
     */
    readonly type: string;
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601 format.
     */
    readonly updatedTimestamp: string;
}
