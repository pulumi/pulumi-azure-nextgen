// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getWebAppDiagnosticLogsConfiguration(args: GetWebAppDiagnosticLogsConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDiagnosticLogsConfigurationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:web/v20180201:getWebAppDiagnosticLogsConfiguration", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppDiagnosticLogsConfigurationArgs {
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
 * Configuration of App Service site logs.
 */
export interface GetWebAppDiagnosticLogsConfigurationResult {
    /**
     * Application logs configuration.
     */
    readonly applicationLogs?: outputs.web.v20180201.ApplicationLogsConfigResponse;
    /**
     * Detailed error messages configuration.
     */
    readonly detailedErrorMessages?: outputs.web.v20180201.EnabledConfigResponse;
    /**
     * Failed requests tracing configuration.
     */
    readonly failedRequestsTracing?: outputs.web.v20180201.EnabledConfigResponse;
    /**
     * HTTP logs configuration.
     */
    readonly httpLogs?: outputs.web.v20180201.HttpLogsConfigResponse;
    /**
     * Resource Id.
     */
    readonly id: string;
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
