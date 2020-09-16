import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getUserSettings(args: GetUserSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetUserSettingsResult>;
export interface GetUserSettingsArgs {
    /**
     * The name of the user settings
     */
    readonly userSettingsName: string;
}
/**
 * Response to get user settings
 */
export interface GetUserSettingsResult {
    /**
     * The cloud shell user settings properties.
     */
    readonly properties: outputs.portal.v20181001.UserPropertiesResponse;
}
