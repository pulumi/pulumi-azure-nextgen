import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getChapSetting(args: GetChapSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetChapSettingResult>;
export interface GetChapSettingArgs {
    /**
     * The user name of chap to be fetched.
     */
    readonly chapUserName: string;
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
}
/**
 * Challenge-Handshake Authentication Protocol (CHAP) setting
 */
export interface GetChapSettingResult {
    /**
     * The name.
     */
    readonly name: string;
    /**
     * The chap password.
     */
    readonly password: outputs.storsimple.v20161001.AsymmetricEncryptedSecretResponse;
    /**
     * The type.
     */
    readonly type: string;
}
