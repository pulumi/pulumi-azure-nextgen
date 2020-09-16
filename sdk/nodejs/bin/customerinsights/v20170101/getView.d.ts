import * as pulumi from "@pulumi/pulumi";
export declare function getView(args: GetViewArgs, opts?: pulumi.InvokeOptions): Promise<GetViewResult>;
export interface GetViewArgs {
    /**
     * The name of the hub.
     */
    readonly hubName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The user ID. Use * to retrieve hub level view.
     */
    readonly userId: string;
    /**
     * The name of the view.
     */
    readonly viewName: string;
}
/**
 * The view resource format.
 */
export interface GetViewResult {
    /**
     * Date time when view was last modified.
     */
    readonly changed: string;
    /**
     * Date time when view was created.
     */
    readonly created: string;
    /**
     * View definition.
     */
    readonly definition: string;
    /**
     * Localized display name for the view.
     */
    readonly displayName?: {
        [key: string]: string;
    };
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * the hub name.
     */
    readonly tenantId: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * the user ID.
     */
    readonly userId?: string;
    /**
     * Name of the view.
     */
    readonly viewName: string;
}
