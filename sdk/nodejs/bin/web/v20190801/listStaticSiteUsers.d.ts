import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listStaticSiteUsers(args: ListStaticSiteUsersArgs, opts?: pulumi.InvokeOptions): Promise<ListStaticSiteUsersResult>;
export interface ListStaticSiteUsersArgs {
    /**
     * The auth provider for the users.
     */
    readonly authprovider: string;
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
 * Collection of static site custom users.
 */
export interface ListStaticSiteUsersResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: outputs.web.v20190801.StaticSiteUserARMResourceResponse[];
}
