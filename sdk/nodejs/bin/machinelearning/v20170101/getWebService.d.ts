import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getWebService(args: GetWebServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetWebServiceResult>;
export interface GetWebServiceArgs {
    /**
     * The region for which encrypted credential parameters are valid.
     */
    readonly region?: string;
    /**
     * Name of the resource group in which the web service is located.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the web service.
     */
    readonly webServiceName: string;
}
/**
 * Instance of an Azure ML web service resource.
 */
export interface GetWebServiceResult {
    /**
     * Specifies the location of the resource.
     */
    readonly location: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * Contains the property payload that describes the web service.
     */
    readonly properties: outputs.machinelearning.v20170101.WebServicePropertiesResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
}
