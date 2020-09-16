import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getEnvironment(args: GetEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentResult>;
export interface GetEnvironmentArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=deploymentProperties)'
     */
    readonly expand?: string;
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the environment.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the user profile.
     */
    readonly userName: string;
}
/**
 * An environment, which is essentially an ARM template deployment.
 */
export interface GetEnvironmentResult {
    /**
     * The display name of the Azure Resource Manager template that produced the environment.
     */
    readonly armTemplateDisplayName?: string;
    /**
     * The creator of the environment.
     */
    readonly createdByUser: string;
    /**
     * The deployment properties of the environment.
     */
    readonly deploymentProperties?: outputs.devtestlab.v20160515.EnvironmentDeploymentPropertiesResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The identifier of the resource group containing the environment's resources.
     */
    readonly resourceGroupId: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: string;
}
