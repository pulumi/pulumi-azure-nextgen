import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getApp(args: GetAppArgs, opts?: pulumi.InvokeOptions): Promise<GetAppResult>;
export interface GetAppArgs {
    /**
     * The name of the App resource.
     */
    readonly appName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    readonly serviceName: string;
    /**
     * Indicates whether sync status
     */
    readonly syncStatus?: string;
}
/**
 * App resource payload
 */
export interface GetAppResult {
    /**
     * The Managed Identity type of the app resource
     */
    readonly identity?: outputs.appplatform.v20200701.ManagedIdentityPropertiesResponse;
    /**
     * The GEO location of the application, always the same with its parent resource
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the App resource
     */
    readonly properties: outputs.appplatform.v20200701.AppResourcePropertiesResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
