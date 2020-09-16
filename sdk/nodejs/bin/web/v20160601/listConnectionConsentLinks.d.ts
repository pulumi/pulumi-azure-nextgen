import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
export declare function listConnectionConsentLinks(args: ListConnectionConsentLinksArgs, opts?: pulumi.InvokeOptions): Promise<ListConnectionConsentLinksResult>;
export interface ListConnectionConsentLinksArgs {
    /**
     * Connection name
     */
    readonly connectionName: string;
    /**
     * Collection of resources
     */
    readonly parameters?: inputs.web.v20160601.ConsentLinkParameterDefinition[];
    /**
     * The resource group
     */
    readonly resourceGroupName: string;
}
/**
 * Collection of consent links
 */
export interface ListConnectionConsentLinksResult {
    /**
     * Collection of resources
     */
    readonly value?: outputs.web.v20160601.ConsentLinkDefinitionResponse[];
}
