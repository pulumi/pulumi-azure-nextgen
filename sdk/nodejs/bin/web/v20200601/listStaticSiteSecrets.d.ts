import * as pulumi from "@pulumi/pulumi";
export declare function listStaticSiteSecrets(args: ListStaticSiteSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteSecretsResult>;
export interface ListStaticSiteSecretsArgs {
    /**
     * Name of the static site.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * String dictionary resource.
 */
export interface ListStaticSiteSecretsResult {
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
