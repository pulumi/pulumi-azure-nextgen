import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getFactory(args: GetFactoryArgs, opts?: pulumi.InvokeOptions): Promise<GetFactoryResult>;
export interface GetFactoryArgs {
    /**
     * The factory name.
     */
    readonly factoryName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Factory resource type.
 */
export interface GetFactoryResult {
    /**
     * Time the factory was created in ISO8601 format.
     */
    readonly createTime: string;
    /**
     * Etag identifies change in the resource.
     */
    readonly eTag: string;
    /**
     * List of parameters for factory.
     */
    readonly globalParameters?: {
        [key: string]: outputs.datafactory.v20180601.GlobalParameterSpecificationResponse;
    };
    /**
     * Managed service identity of the factory.
     */
    readonly identity?: outputs.datafactory.v20180601.FactoryIdentityResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Factory provisioning state, example Succeeded.
     */
    readonly provisioningState: string;
    /**
     * Git repo information of the factory.
     */
    readonly repoConfiguration?: outputs.datafactory.v20180601.FactoryRepoConfigurationResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The resource type.
     */
    readonly type: string;
    /**
     * Version of the factory.
     */
    readonly version: string;
}
