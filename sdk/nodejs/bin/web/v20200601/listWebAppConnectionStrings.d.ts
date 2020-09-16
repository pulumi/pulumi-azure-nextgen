import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppConnectionStrings(args: ListWebAppConnectionStringsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppConnectionStringsResult>;
export interface ListWebAppConnectionStringsArgs {
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
 * String dictionary resource.
 */
export interface ListWebAppConnectionStringsResult {
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
