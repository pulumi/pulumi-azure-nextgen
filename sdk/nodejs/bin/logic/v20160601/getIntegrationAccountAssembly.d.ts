import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIntegrationAccountAssembly(args: GetIntegrationAccountAssemblyArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountAssemblyResult>;
export interface GetIntegrationAccountAssemblyArgs {
    /**
     * The assembly artifact name.
     */
    readonly assemblyArtifactName: string;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The assembly definition.
 */
export interface GetIntegrationAccountAssemblyResult {
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The assembly properties.
     */
    readonly properties: outputs.logic.v20160601.AssemblyPropertiesResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
