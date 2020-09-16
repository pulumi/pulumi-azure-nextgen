import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIntegrationServiceEnvironment(args: GetIntegrationServiceEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationServiceEnvironmentResult>;
export interface GetIntegrationServiceEnvironmentArgs {
    /**
     * The integration service environment name.
     */
    readonly integrationServiceEnvironmentName: string;
    /**
     * The resource group.
     */
    readonly resourceGroup: string;
}
/**
 * The integration service environment.
 */
export interface GetIntegrationServiceEnvironmentResult {
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The integration service environment properties.
     */
    readonly properties: outputs.logic.v20190501.IntegrationServiceEnvironmentPropertiesResponse;
    /**
     * The sku.
     */
    readonly sku?: outputs.logic.v20190501.IntegrationServiceEnvironmentSkuResponse;
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
