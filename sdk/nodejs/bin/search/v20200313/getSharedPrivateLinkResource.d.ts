import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSharedPrivateLinkResource(args: GetSharedPrivateLinkResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedPrivateLinkResourceResult>;
export interface GetSharedPrivateLinkResourceArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    readonly searchServiceName: string;
    /**
     * The name of the shared private link resource managed by the Azure Cognitive Search service within the specified resource group.
     */
    readonly sharedPrivateLinkResourceName: string;
}
/**
 * Describes a Shared Private Link Resource managed by the Azure Cognitive Search service.
 */
export interface GetSharedPrivateLinkResourceResult {
    /**
     * The name of the shared private link resource.
     */
    readonly name: string;
    /**
     * Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service.
     */
    readonly properties: outputs.search.v20200313.SharedPrivateLinkResourcePropertiesResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
