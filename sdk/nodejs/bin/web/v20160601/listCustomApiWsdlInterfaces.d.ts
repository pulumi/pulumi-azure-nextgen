import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
export declare function listCustomApiWsdlInterfaces(args: ListCustomApiWsdlInterfacesArgs, opts?: pulumi.InvokeOptions): Promise<ListCustomApiWsdlInterfacesResult>;
export interface ListCustomApiWsdlInterfacesArgs {
    /**
     * The WSDL content
     */
    readonly content?: string;
    /**
     * The WSDL import method
     */
    readonly importMethod?: string;
    /**
     * The location
     */
    readonly location: string;
    /**
     * The service with name and endpoint names
     */
    readonly service?: inputs.web.v20160601.WsdlService;
    /**
     * The WSDL URL
     */
    readonly url?: string;
}
/**
 * A list of custom API WSDL interfaces
 */
export interface ListCustomApiWsdlInterfacesResult {
    /**
     * Collection of WSDL interfaces
     */
    readonly value?: outputs.web.v20160601.WsdlServiceResponse[];
}
