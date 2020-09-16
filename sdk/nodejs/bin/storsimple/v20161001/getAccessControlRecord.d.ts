import * as pulumi from "@pulumi/pulumi";
export declare function getAccessControlRecord(args: GetAccessControlRecordArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessControlRecordResult>;
export interface GetAccessControlRecordArgs {
    /**
     * Name of access control record to be fetched.
     */
    readonly accessControlRecordName: string;
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
 * The access control record
 */
export interface GetAccessControlRecordResult {
    /**
     * The Iscsi initiator name (IQN)
     */
    readonly initiatorName: string;
    /**
     * The name.
     */
    readonly name: string;
    /**
     * The type.
     */
    readonly type: string;
}
