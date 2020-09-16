import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult>;
export interface GetUserArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=identity)'
     */
    readonly expand?: string;
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the user profile.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Profile of a lab user.
 */
export interface GetUserResult {
    /**
     * The creation date of the user profile.
     */
    readonly createdDate: string;
    /**
     * The identity of the user.
     */
    readonly identity?: outputs.devtestlab.v20180915.UserIdentityResponse;
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
    readonly provisioningState: string;
    /**
     * The secret store of the user.
     */
    readonly secretStore?: outputs.devtestlab.v20180915.UserSecretStoreResponse;
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
    readonly uniqueIdentifier: string;
}
