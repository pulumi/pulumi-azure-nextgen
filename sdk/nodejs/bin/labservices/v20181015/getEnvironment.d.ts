import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getEnvironment(args: GetEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentResult>;
export interface GetEnvironmentArgs {
    /**
     * The name of the environment.
     */
    readonly environmentName: string;
    /**
     * The name of the environment Setting.
     */
    readonly environmentSettingName: string;
    /**
     * Specify the $expand query. Example: 'properties($expand=networkInterface)'
     */
    readonly expand?: string;
    /**
     * The name of the lab Account.
     */
    readonly labAccountName: string;
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Represents an environment instance
 */
export interface GetEnvironmentResult {
    /**
     * The name or email address of the user who has claimed the environment
     */
    readonly claimedByUserName: string;
    /**
     * The AAD object Id of the user who has claimed the environment
     */
    readonly claimedByUserObjectId: string;
    /**
     * The user principal Id of the user who has claimed the environment
     */
    readonly claimedByUserPrincipalId: string;
    /**
     * Is the environment claimed or not
     */
    readonly isClaimed: boolean;
    /**
     * Last known power state of the environment
     */
    readonly lastKnownPowerState: string;
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
     * Network details of the environment
     */
    readonly networkInterface: outputs.labservices.v20181015.NetworkInterfaceResponse;
    /**
     * When the password was last reset on the environment.
     */
    readonly passwordLastReset: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The set of a VM and the setting id it was created for
     */
    readonly resourceSets?: outputs.labservices.v20181015.ResourceSetResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * How long the environment has been used by a lab user
     */
    readonly totalUsage: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: string;
}
