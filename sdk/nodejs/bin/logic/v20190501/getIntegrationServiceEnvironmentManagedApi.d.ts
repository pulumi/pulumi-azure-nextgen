import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIntegrationServiceEnvironmentManagedApi(args: GetIntegrationServiceEnvironmentManagedApiArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationServiceEnvironmentManagedApiResult>;
export interface GetIntegrationServiceEnvironmentManagedApiArgs {
    /**
     * The api name.
     */
    readonly apiName: string;
    /**
     * The integration service environment name.
     */
    readonly integrationServiceEnvironmentName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroup: string;
}
/**
 * The managed api definition.
 */
export interface GetIntegrationServiceEnvironmentManagedApiResult {
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The api resource properties.
     */
    readonly properties: outputs.logic.v20190501.ApiResourcePropertiesResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
