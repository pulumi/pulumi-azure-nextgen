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
 * The access control record.
 */
export interface GetAccessControlRecordResult {
    /**
     * The iSCSI initiator name (IQN).
     */
    readonly initiatorName: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The number of volumes using the access control record.
     */
    readonly volumeCount: number;
}
