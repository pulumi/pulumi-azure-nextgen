import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIntegrationAccountBatchConfiguration(args: GetIntegrationAccountBatchConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountBatchConfigurationResult>;
export interface GetIntegrationAccountBatchConfigurationArgs {
    /**
     * The batch configuration name.
     */
    readonly batchConfigurationName: string;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The batch configuration resource definition.
 */
export interface GetIntegrationAccountBatchConfigurationResult {
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The batch configuration properties.
     */
    readonly properties: outputs.logic.v20190501.BatchConfigurationPropertiesResponse;
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
