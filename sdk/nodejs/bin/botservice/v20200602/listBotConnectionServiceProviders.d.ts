import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listBotConnectionServiceProviders(args?: ListBotConnectionServiceProvidersArgs, opts?: pulumi.InvokeOptions): Promise<ListBotConnectionServiceProvidersResult>;
export interface ListBotConnectionServiceProvidersArgs {
}
/**
 * The list of bot service providers response.
 */
export interface ListBotConnectionServiceProvidersResult {
    /**
     * The link used to get the next page of bot service providers.
     */
    readonly nextLink?: string;
    /**
     * Gets the list of bot service providers and their properties.
     */
    readonly value: outputs.botservice.v20200602.ServiceProviderResponse[];
}
