import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppFunction(args: GetWebAppFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppFunctionResult>;
export interface GetWebAppFunctionArgs {
    /**
     * Function name.
     */
    readonly functionName: string;
    /**
     * Site name.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Web Job Information.
 */
export interface GetWebAppFunctionResult {
    /**
     * Config information.
     */
    readonly config?: {
        [key: string]: any;
    };
    /**
     * Config URI.
     */
    readonly configHref?: string;
    /**
     * File list.
     */
    readonly files?: {
        [key: string]: string;
    };
    /**
     * Function App ID.
     */
    readonly functionAppId: string;
    /**
     * Function URI.
     */
    readonly href?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Script URI.
     */
    readonly scriptHref?: string;
    /**
     * Script root path URI.
     */
    readonly scriptRootPathHref?: string;
    /**
     * Secrets file URI.
     */
    readonly secretsFileHref?: string;
    /**
     * Test data used when testing via the Azure Portal.
     */
    readonly testData?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
