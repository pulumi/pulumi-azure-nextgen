import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getGateway(args: GetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayResult>;
export interface GetGatewayArgs {
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    readonly gatewayId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Gateway details.
 */
export interface GetGatewayResult {
    /**
     * Gateway description
     */
    readonly description?: string;
    /**
     * Gateway location.
     */
    readonly locationData?: outputs.apimanagement.v20191201.ResourceLocationDataContractResponse;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
