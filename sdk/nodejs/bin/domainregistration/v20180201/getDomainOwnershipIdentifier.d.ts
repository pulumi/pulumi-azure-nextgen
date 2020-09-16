import * as pulumi from "@pulumi/pulumi";
export declare function getDomainOwnershipIdentifier(args: GetDomainOwnershipIdentifierArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainOwnershipIdentifierResult>;
export interface GetDomainOwnershipIdentifierArgs {
    /**
     * Name of domain.
     */
    readonly domainName: string;
    /**
     * Name of identifier.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Domain ownership Identifier.
 */
export interface GetDomainOwnershipIdentifierResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Ownership Id.
     */
    readonly ownershipId?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
