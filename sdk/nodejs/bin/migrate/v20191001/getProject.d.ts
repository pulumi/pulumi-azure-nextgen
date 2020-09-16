import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getProject(args: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult>;
export interface GetProjectArgs {
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
 * Azure Migrate Project.
 */
export interface GetProjectResult {
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: string;
    /**
     * Azure location in which project is created.
     */
    readonly location?: string;
    /**
     * Name of the project.
     */
    readonly name: string;
    /**
     * Properties of the project.
     */
    readonly properties: outputs.migrate.v20191001.ProjectPropertiesResponse;
    /**
     * Tags provided by Azure Tagging service.
     */
    readonly tags?: {
        [key: string]: any;
    };
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects].
     */
    readonly type: string;
}
