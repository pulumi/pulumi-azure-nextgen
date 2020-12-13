// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getApiOperation(args: GetApiOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetApiOperationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:apimanagement/v20200601preview:getApiOperation", {
        "apiId": args.apiId,
        "operationId": args.operationId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiOperationArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: string;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    readonly operationId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}

/**
 * Api Operation details.
 */
export interface GetApiOperationResult {
    /**
     * Description of the operation. May include HTML formatting tags.
     */
    readonly description?: string;
    /**
     * Operation Name.
     */
    readonly displayName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    readonly method: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Operation Policies
     */
    readonly policies?: string;
    /**
     * An entity containing request details.
     */
    readonly request?: outputs.apimanagement.v20200601preview.RequestContractResponse;
    /**
     * Array of Operation responses.
     */
    readonly responses?: outputs.apimanagement.v20200601preview.ResponseContractResponse[];
    /**
     * Collection of URL template parameters.
     */
    readonly templateParameters?: outputs.apimanagement.v20200601preview.ParameterContractResponse[];
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    readonly urlTemplate: string;
}
