import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getWorkflow(args: GetWorkflowArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowResult>;
export interface GetWorkflowArgs {
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The workflow name.
     */
    readonly workflowName: string;
}
/**
 * The workflow type.
 */
export interface GetWorkflowResult {
    /**
     * The access control configuration.
     */
    readonly accessControl?: outputs.logic.v20190501.FlowAccessControlConfigurationResponse;
    /**
     * Gets the access endpoint.
     */
    readonly accessEndpoint: string;
    /**
     * Gets the changed time.
     */
    readonly changedTime: string;
    /**
     * Gets the created time.
     */
    readonly createdTime: string;
    /**
     * The definition.
     */
    readonly definition?: {
        [key: string]: any;
    };
    /**
     * The endpoints configuration.
     */
    readonly endpointsConfiguration?: outputs.logic.v20190501.FlowEndpointsConfigurationResponse;
    /**
     * The integration account.
     */
    readonly integrationAccount?: outputs.logic.v20190501.ResourceReferenceResponse;
    /**
     * The integration service environment.
     */
    readonly integrationServiceEnvironment?: outputs.logic.v20190501.ResourceReferenceResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The parameters.
     */
    readonly parameters?: {
        [key: string]: outputs.logic.v20190501.WorkflowParameterResponse;
    };
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The sku.
     */
    readonly sku: outputs.logic.v20190501.SkuResponse;
    /**
     * The state.
     */
    readonly state?: string;
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
    /**
     * Gets the version.
     */
    readonly version: string;
}
