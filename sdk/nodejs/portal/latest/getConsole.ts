// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getConsole(args: GetConsoleArgs, opts?: pulumi.InvokeOptions): Promise<GetConsoleResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:portal/latest:getConsole", {
        "consoleName": args.consoleName,
    }, opts);
}

export interface GetConsoleArgs {
    /**
     * The name of the console
     */
    readonly consoleName: string;
}

/**
 * Cloud shell console
 */
export interface GetConsoleResult {
    /**
     * Cloud shell console properties.
     */
    readonly properties: outputs.portal.latest.ConsolePropertiesResponse;
}
