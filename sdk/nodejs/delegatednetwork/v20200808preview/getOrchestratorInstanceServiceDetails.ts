// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getOrchestratorInstanceServiceDetails(args: GetOrchestratorInstanceServiceDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetOrchestratorInstanceServiceDetailsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:delegatednetwork/v20200808preview:getOrchestratorInstanceServiceDetails", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetOrchestratorInstanceServiceDetailsArgs {
    /**
     * The name of the Azure Resource group of which a given DelegatedNetwork resource is part. This name must be at least 1 character in length, and no more than 90.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
     */
    readonly resourceName: string;
}

/**
 * Represents an instance of a orchestrator.
 */
export interface GetOrchestratorInstanceServiceDetailsResult {
    /**
     * K8s APIServer url
     */
    readonly apiServerEndpoint?: string;
    /**
     * RootCA certificate of kubernetes cluster base64 encoded
     */
    readonly clusterRootCA?: string;
    /**
     * controller details
     */
    readonly controllerDetails: outputs.delegatednetwork.v20200808preview.ControllerDetailsResponse;
    /**
     * An identifier that represents the resource.
     */
    readonly id: string;
    /**
     * The identity of the orchestrator
     */
    readonly identity?: outputs.delegatednetwork.v20200808preview.OrchestratorIdentityResponse;
    /**
     * The kind of workbook. Choices are user and shared.
     */
    readonly kind: string;
    /**
     * Location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * AAD ID used with apiserver
     */
    readonly orchestratorAppId?: string;
    /**
     * TenantID of server App ID
     */
    readonly orchestratorTenantId?: string;
    /**
     * The current state of orchestratorInstance resource.
     */
    readonly provisioningState: string;
    /**
     * Resource guid.
     */
    readonly resourceGuid: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of resource.
     */
    readonly type: string;
}
