import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getEnvironmentSetting(args: GetEnvironmentSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentSettingResult>;
export interface GetEnvironmentSettingArgs {
    /**
     * The name of the environment Setting.
     */
    readonly environmentSettingName: string;
    /**
     * Specify the $expand query. Example: 'properties($select=publishingState)'
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
 * Represents settings of an environment, from which environment instances would be created
 */
export interface GetEnvironmentSettingResult {
    /**
     * Describes the user's progress in configuring their environment setting
     */
    readonly configurationState?: string;
    /**
     * Describes the environment and its resource settings
     */
    readonly description?: string;
    /**
     * Time when the template VM was last changed.
     */
    readonly lastChanged: string;
    /**
     * Time when the template VM was last sent for publishing.
     */
    readonly lastPublished: string;
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
     * Describes the readiness of this environment setting
     */
    readonly publishingState: string;
    /**
     * The resource specific settings
     */
    readonly resourceSettings: outputs.labservices.v20181015.ResourceSettingsResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Brief title describing the environment and its resource settings
     */
    readonly title?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: string;
}
