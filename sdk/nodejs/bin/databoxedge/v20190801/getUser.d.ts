import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult>;
export interface GetUserArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The user name.
     */
    readonly name: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Represents a user who has access to one or more shares on the Data Box Edge/Gateway device.
 */
export interface GetUserResult {
    /**
     * The password details.
     */
    readonly encryptedPassword?: outputs.databoxedge.v20190801.AsymmetricEncryptedSecretResponse;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * List of shares that the user has rights on. This field should not be specified during user creation.
     */
    readonly shareAccessRights?: outputs.databoxedge.v20190801.ShareAccessRightResponse[];
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * Type of the user.
     */
    readonly userType: string;
}
