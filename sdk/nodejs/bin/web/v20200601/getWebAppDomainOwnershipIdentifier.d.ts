import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppDomainOwnershipIdentifier(args: GetWebAppDomainOwnershipIdentifierArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDomainOwnershipIdentifierResult>;
export interface GetWebAppDomainOwnershipIdentifierArgs {
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
}
/**
 * A domain specific resource identifier.
 */
export interface GetWebAppDomainOwnershipIdentifierResult {
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
    /**
     * String representation of the identity.
     */
    readonly value?: string;
}
