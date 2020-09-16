import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getConsoleWithLocation(args: GetConsoleWithLocationArgs, opts?: pulumi.InvokeOptions): Promise<GetConsoleWithLocationResult>;
export interface GetConsoleWithLocationArgs {
    /**
     * The name of the console
     */
    readonly consoleName: string;
    /**
     * The provider location
     */
    readonly location: string;
}
/**
 * Cloud shell console
 */
export interface GetConsoleWithLocationResult {
    /**
     * Cloud shell console properties.
     */
    readonly properties: outputs.portal.v20181001.ConsolePropertiesResponse;
}
