import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getConsole(args: GetConsoleArgs, opts?: pulumi.InvokeOptions): Promise<GetConsoleResult>;
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
    readonly properties: outputs.portal.v20181001.ConsolePropertiesResponse;
}
