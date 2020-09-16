import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVMwareCollector(args: GetVMwareCollectorArgs, opts?: pulumi.InvokeOptions): Promise<GetVMwareCollectorResult>;
export interface GetVMwareCollectorArgs {
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: string;
    /**
     * Unique name of a VMware collector within a project.
     */
    readonly vmWareCollectorName: string;
}
export interface GetVMwareCollectorResult {
    readonly eTag?: string;
    readonly name: string;
    readonly properties: outputs.migrate.v20191001.CollectorPropertiesResponse;
    readonly type: string;
}
