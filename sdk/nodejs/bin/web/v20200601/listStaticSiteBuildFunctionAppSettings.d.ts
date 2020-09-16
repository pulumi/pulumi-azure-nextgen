import * as pulumi from "@pulumi/pulumi";
export declare function listStaticSiteBuildFunctionAppSettings(args: ListStaticSiteBuildFunctionAppSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteBuildFunctionAppSettingsResult>;
export interface ListStaticSiteBuildFunctionAppSettingsArgs {
    /**
     * Name of the static site.
     */
    readonly name: string;
    /**
     * The stage site identifier.
     */
    readonly prId: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * String dictionary resource.
 */
export interface ListStaticSiteBuildFunctionAppSettingsResult {
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
