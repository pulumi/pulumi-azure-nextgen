import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getLinkedService(args: GetLinkedServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedServiceResult>;
export interface GetLinkedServiceArgs {
    /**
     * The factory name.
     */
    readonly factoryName: string;
    /**
     * The linked service name.
     */
    readonly linkedServiceName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Linked service resource type.
 */
export interface GetLinkedServiceResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Properties of linked service.
     */
    readonly properties: outputs.datafactory.v20180601.LinkedServiceResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
