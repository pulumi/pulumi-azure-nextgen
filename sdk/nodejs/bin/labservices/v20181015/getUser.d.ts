import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult>;
export interface GetUserArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=email)'
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
    /**
     * The name of the user.
     */
    readonly userName: string;
}
/**
 * The User registered to a lab
 */
export interface GetUserResult {
    /**
     * The user email address, as it was specified during registration.
     */
    readonly email: string;
    /**
     * The user family name, as it was specified during registration.
     */
    readonly familyName: string;
    /**
     * The user given name, as it was specified during registration.
     */
    readonly givenName: string;
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
     * The tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The user tenant ID, as it was specified during registration.
     */
    readonly tenantId: string;
    /**
     * How long the user has used his VMs in this lab
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
