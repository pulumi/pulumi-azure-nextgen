import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppDomainOwnershipIdentifierSlot(args: GetWebAppDomainOwnershipIdentifierSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDomainOwnershipIdentifierSlotResult>;
export interface GetWebAppDomainOwnershipIdentifierSlotArgs {
    /**
     * Name of domain ownership identifier.
     */
    readonly domainOwnershipIdentifierName: string;
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
     */
    readonly slot: string;
}
/**
 * A domain specific resource identifier.
 */
export interface GetWebAppDomainOwnershipIdentifierSlotResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
