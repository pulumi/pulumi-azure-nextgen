import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getLabAccount(args: GetLabAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetLabAccountResult>;
export interface GetLabAccountArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=sizeConfiguration)'
     */
    readonly expand?: string;
    /**
     * The name of the lab Account.
     */
    readonly labAccountName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Represents a lab account.
 */
export interface GetLabAccountResult {
    /**
     * Represents if region selection is enabled
     */
    readonly enabledRegionSelection?: boolean;
    /**
     * The details of the latest operation. ex: status, error
     */
    readonly latestOperationResult: outputs.labservices.v20181015.LatestOperationResultResponse;
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
     * Represents the size configuration under the lab account
     */
    readonly sizeConfiguration: outputs.labservices.v20181015.SizeConfigurationPropertiesResponse;
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
