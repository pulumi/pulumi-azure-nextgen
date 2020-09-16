import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listBitLockerKey(args: ListBitLockerKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListBitLockerKeyResult>;
export interface ListBitLockerKeyArgs {
    /**
     * The name of the import/export job.
     */
    readonly jobName: string;
    /**
     * The resource group name uniquely identifies the resource group within the user subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * GetBitLockerKeys response
 */
export interface ListBitLockerKeyResult {
    /**
     * drive status
     */
    readonly value?: outputs.importexport.v20161101.DriveBitLockerKeyResponse[];
}
