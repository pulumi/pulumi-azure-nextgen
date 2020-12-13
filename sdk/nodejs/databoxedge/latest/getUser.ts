// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:databoxedge/latest:getUser", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

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
    readonly encryptedPassword?: outputs.databoxedge.latest.AsymmetricEncryptedSecretResponse;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * List of shares that the user has rights on. This field should not be specified during user creation.
     */
    readonly shareAccessRights?: outputs.databoxedge.latest.ShareAccessRightResponse[];
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * Type of the user.
     */
    readonly userType: string;
}
