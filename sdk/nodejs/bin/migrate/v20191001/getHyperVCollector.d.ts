import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getHyperVCollector(args: GetHyperVCollectorArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperVCollectorResult>;
export interface GetHyperVCollectorArgs {
    /**
     * Unique name of a Hyper-V collector within a project.
     */
    readonly hyperVCollectorName: string;
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: string;
}
export interface GetHyperVCollectorResult {
    readonly eTag?: string;
    readonly name: string;
    readonly properties: outputs.migrate.v20191001.CollectorPropertiesResponse;
    readonly type: string;
}
