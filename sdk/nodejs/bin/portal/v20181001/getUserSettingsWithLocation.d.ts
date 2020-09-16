import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getUserSettingsWithLocation(args: GetUserSettingsWithLocationArgs, opts?: pulumi.InvokeOptions): Promise<GetUserSettingsWithLocationResult>;
export interface GetUserSettingsWithLocationArgs {
    /**
     * The provider location
     */
    readonly location: string;
    /**
     * The name of the user settings
     */
    readonly userSettingsName: string;
}
/**
 * Response to get user settings
 */
export interface GetUserSettingsWithLocationResult {
    /**
     * The cloud shell user settings properties.
     */
    readonly properties: outputs.portal.v20181001.UserPropertiesResponse;
}
