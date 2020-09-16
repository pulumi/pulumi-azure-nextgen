import * as pulumi from "@pulumi/pulumi";
export declare function getSession(args: GetSessionArgs, opts?: pulumi.InvokeOptions): Promise<GetSessionResult>;
export interface GetSessionArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The integration account session name.
     */
    readonly sessionName: string;
}
/**
 * The integration account session.
 */
export interface GetSessionResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The session content.
     */
    readonly content?: {
        [key: string]: any;
    };
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
