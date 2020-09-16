import * as pulumi from "@pulumi/pulumi";
export declare function listStaticSiteFunctionAppSettings(args: ListStaticSiteFunctionAppSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteFunctionAppSettingsResult>;
export interface ListStaticSiteFunctionAppSettingsArgs {
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
export interface ListStaticSiteFunctionAppSettingsResult {
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
