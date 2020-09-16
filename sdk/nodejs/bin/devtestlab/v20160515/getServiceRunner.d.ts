import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getServiceRunner(args: GetServiceRunnerArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceRunnerResult>;
export interface GetServiceRunnerArgs {
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the service runner.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * A container for a managed identity to execute DevTest lab services.
 */
export interface GetServiceRunnerResult {
    /**
     * The identity of the resource.
     */
    readonly identity?: outputs.devtestlab.v20160515.IdentityPropertiesResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
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
}
