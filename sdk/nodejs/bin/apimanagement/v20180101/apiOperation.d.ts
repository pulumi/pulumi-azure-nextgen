import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Api Operation details.
 */
export declare class ApiOperation extends pulumi.CustomResource {
    /**
     * Get an existing ApiOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiOperation;
    /**
     * Returns true if the given object is an instance of ApiOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiOperation;
    /**
     * Description of the operation. May include HTML formatting tags.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Operation Name.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    readonly method: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Operation Policies
     */
    readonly policies: pulumi.Output<string | undefined>;
    /**
     * An entity containing request details.
     */
    readonly request: pulumi.Output<outputs.apimanagement.v20180101.RequestContractResponse | undefined>;
    /**
     * Array of Operation responses.
     */
    readonly responses: pulumi.Output<outputs.apimanagement.v20180101.ResponseContractResponse[] | undefined>;
    /**
     * Collection of URL template parameters.
     */
    readonly templateParameters: pulumi.Output<outputs.apimanagement.v20180101.ParameterContractResponse[] | undefined>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    readonly urlTemplate: pulumi.Output<string>;
    /**
     * Create a ApiOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiOperationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApiOperation resource.
 */
export interface ApiOperationArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: pulumi.Input<string>;
    /**
     * Description of the operation. May include HTML formatting tags.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Operation Name.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them.
     */
    readonly method: pulumi.Input<string>;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    readonly operationId: pulumi.Input<string>;
    /**
     * Operation Policies
     */
    readonly policies?: pulumi.Input<string>;
    /**
     * An entity containing request details.
     */
    readonly request?: pulumi.Input<inputs.apimanagement.v20180101.RequestContract>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Array of Operation responses.
     */
    readonly responses?: pulumi.Input<pulumi.Input<inputs.apimanagement.v20180101.ResponseContract>[]>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Collection of URL template parameters.
     */
    readonly templateParameters?: pulumi.Input<pulumi.Input<inputs.apimanagement.v20180101.ParameterContract>[]>;
    /**
     * Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date={date}
     */
    readonly urlTemplate: pulumi.Input<string>;
}
